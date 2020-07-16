//Delete Bookmarks
// var deletedBookmark = {};
list.addEventListener('click', (e) => {
	// name = e.target.parentElement.childnodes[3].text;
	// url = e.target.parentElement.childnodes[1].href;
	// id = chrome.storage.sync.get((current) => {
	// 	return current.bookmarkID;
	// });

	if (e.target.classList.contains('delete')) {
		e.target.parentElement.remove();
		chrome.bookmarks.remove(e.target.parentElement.id);

		// If all bookmarks are deleted
		if (!list.innerHTML) {
			list.innerHTML = `<h3>No Bookmarks Added</h3>`;
		}

		// Undo Delete
		// footer.innerHTML = `<h3 id="undo" class="bookmark-folder">Undo</h3>`;
		// let undo = document.getElementById('undo');
		// undo.addEventListener('click', (e) => {
		// 	newBookmark(name, url, id);
		// });
	}
});
