var current = {
	bookmarkID: '1',
	bookmarkName: 'Bookmark Bar',
	recent: ''
};

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set(current);
});
