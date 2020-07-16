// Open or Read Bookmark Folder
function openBookmarkFolder(ID, name) {
	list.innerHTML = '';
	currentBookmarkID = ID;
	currentBookmarkName = name;

	chrome.storage.sync.set({
		bookmarkID: `${currentBookmarkID}`,
		bookmarkName: `${currentBookmarkName}`,
		recent: ''
	});
	getBookmarks(ID, name);
}

// Folder Selection Event Trigger on User Click
rootFolder.addEventListener('click', (e) => {
	j = 0;
	n = 12;

	// e.target.classList.add('active');
	if (e.target.classList.contains('bookmark-folder') && e.target.innerText != folderTitle.innerText) {
		openBookmarkFolder(e.target.id, e.target.innerText);
	} else if (e.target.id == 'recentBtn' && e.target.innerText != folderTitle.innerText) {
		recentBookmarks();
	} else if (e.target.classList.contains('delete')) {
		e.target.parentElement.remove();
		chrome.bookmarks.removeTree(e.target.parentElement.id);
		list.innerHTML = '';
		getBookmarks('1', 'Bookmark Bar');
	}
});
