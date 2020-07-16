//Selectors
let rootFolder = document.getElementById("root-folder");
let list = document.getElementById("list");
let folderTitle = document.getElementById("folder-title");
let showMore = document.getElementById("showMore");
let search = document.getElementById("search");
let newBtn = document.getElementById("newBtn");
let footer = document.getElementById("footer");

// let editBtn = document.getElementById('editBtn');
// let deleteBtn = document.getElementById('deleteBtn');
// let updateBtn = document.getElementById('updateBtn');

//Empty Search Box
window.onclick = function () {
  search.value = "";
};
// Recent Bookmarks
function recentBookmarks() {
  folderTitle.innerText = "Recent";
  list.innerHTML = "";
  showMore.style.display = "none";
  chrome.bookmarks.getRecent(12, (bookmarks) => {
    bookmarks.forEach((bookmark) => {
      list.innerHTML += `
			<div class="item">
				<img height="11" width="11" src="images/cancel.svg" class="delete">
				<a href="${bookmark.url}" target="_blank">
				<img height="20" width="20" src="http://www.google.com/s2/favicons?domain=${bookmark.url}">
				<p class="title">${bookmark.title}</p>
				</a>
			</div>`;
    });
    chrome.storage.sync.set({
      bookmarkID: "",
      bookmarkName: "Recent",
      recent: "1",
    });
  });
}

// Get all bookmarks within a folder
function getBookmarks(ID, name) {
  folderTitle.innerText = name;
  chrome.bookmarks.getChildren(ID, (children) => {
    if (children.length == 0) {
      list.innerHTML = `<h3>No Bookmark(s) Added</h3>`;
      showMore.style.display = "none";
    } else {
      //sorting bookmarks - latest first
      children.sort((a, b) => {
        return b.dateAdded - a.dateAdded;
      });

      //checking remaining children for show more option
      remainingChildren = children.length - n;

      if (remainingChildren > 12) {
        for (let i = j; i < n; i++) {
          if (children[i].url) {
            list.innerHTML += `
						<div class="item" id="${children[i].id}">
						<img height="11" width="11" src="images/cancel.svg" class="delete">
						<a href="${children[i].url}" target="_blank">
						<img height="20" width="20" src="http://www.google.com/s2/favicons?domain=${children[i].url}">
						<p class="title">${children[i].title}</p>
						</a>
						</div>`;
          } else {
            n++;
          }
        }
        showMore.style.display = "block";
        //Incrementing loop value after every 12 bookmarks
        j = n;
        n += 12;
      } else if (remainingChildren <= 12) {
        for (let i = j; i < children.length; i++) {
          if (children[i].url) {
            list.innerHTML += `
						<div class="item" id="${children[i].id}">
						<img height="11" width="11" src="images/cancel.svg" class="delete">
						<a href="${children[i].url}" target="_blank" id="${children[i].id}">
						<img height="20" width="20" src="http://www.google.com/s2/favicons?domain=${children[i].url}">
						<p class="title">${children[i].title}</p>
						</a>
						</div>`;
          }
        }
        showMore.style.display = "none";
      }
    }
  });
  chrome.storage.sync.set({
    bookmarkID: ID,
    bookmarkName: name,
    recent: "",
  });
}

//Getting default Bookmark Folder from storage
chrome.storage.sync.get((current) => {
  currentBookmarkID = current.bookmarkID;
  currentBookmarkName = current.bookmarkName;
  folderTitle.innerText = current.bookmarkName;
  if (current.recent) {
    recentBookmarks();
  } else {
    getBookmarks(currentBookmarkID, currentBookmarkName);
  }
});

// Getting all Bookmark Folders
chrome.bookmarks.getTree(function (bookmarks) {
  processNode(bookmarks);
});

function processNode(bookmarks) {
  bookmarks.forEach((bookmark) => {
    // recursively process child nodes
    if (bookmark.id == 0) {
      processNode(bookmark.children);
    } else if (bookmark.children && bookmark.id > 0) {
      rootFolder.innerHTML += `<li 
            class="bookmark-folder"
            id="${bookmark.id}">
			${bookmark.title}
			<img height="10" width="10" src="images/cancel.svg" fill="#3a3b3c" class="delete">
            </li>`;
      processNode(bookmark.children);
    }
  });
}

//For limiting Bookmark Load - Show More Trigger
let j = 0;
let n = 12;

// Show More Button
showMore.addEventListener("click", (e) => {
  getBookmarks(currentBookmarkID, currentBookmarkName);
});

rootFolder.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
