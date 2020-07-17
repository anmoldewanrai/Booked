//Delete Bookmarks

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    chrome.bookmarks.remove(e.target.parentElement.id);

    // If all bookmarks are deleted
    if (!list.innerHTML) {
      list.innerHTML = `<h3>No Bookmarks Added</h3>`;
    }
  }
});
