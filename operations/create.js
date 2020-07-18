//Create New Bookmark Folder
var name = "";

function newBookmark(name) {
  chrome.bookmarks.create({
    title: name,
  });
  chrome.bookmarks.getTree(function (bookmarks) {
    processNode(bookmarks);
  });
}

newBtn.onclick = function () {
  if (search.value.trim()) {
    name = search.value.trim();
    folderTitle.innerText = name;
    newBookmark(name);
    rootFolder.innerHTML = `<li id="recentBtn">Recent</li>`;
    list.innerHTML = `<h3>No Bookmark(s) Added</h3>`;
    search.value = "";
  }
};
