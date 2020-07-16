//Create New Bookmark Folder
function newBookmark(name, url, id) {
  if (url) {
    chrome.bookmarks.create({
      parentId: id,
      title: name,
      url: url,
    });
    chrome.bookmarks.getTree(function (bookmarks) {
      processNode(bookmarks);
    });
  } else if (name) {
    chrome.bookmarks.create({
      title: name,
    });
    chrome.bookmarks.getTree(function (bookmarks) {
      processNode(bookmarks);
    });
  }
}

var name = "";

newBtn.onclick = function () {
  if (search.value.trim()) {
    name = search.value.trim();
    newBookmark(name);
    search.value = "";
    rootFolder.innerHTML = "";
    bookmarkFolderTitle.innerText = term;
    list.innerHTML = `<h3>No Bookmarks Added</h3>`;
  }
};
