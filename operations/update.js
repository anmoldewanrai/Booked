//Edit or Update Bookmarks
// window.addEventListener('contextmenu', function(e) {
// 	e.preventDefault();

// 	element = e.target;

// 	var rightClickMenu = document.getElementById('right-click-menu');
// 	rightClickMenu.style.top = e.clientY + 'px';
// 	rightClickMenu.style.left = e.clientX + 'px';
// 	rightClickMenu.classList.add('active');

// 	// Listen for delete button click
// 	deleteBtn.addEventListener('click', () => {
// 		chrome.bookmarks.removeTree(element.id);
// 		element.style.display = 'none';
// 	});

// 	var oldName = element.innerText;
// 	// Listen for Edit button click

// window.addEventListener('click', function() {
// 	document.getElementById('right-click-menu').classList.remove('active');
// });
//No Internet - Offline Mode Feature - Basically will list down all locally stored bookmarked files

// 	editBtn.addEventListener('click', () => {
// 		element.innerHTML = `
// 		<div id="new-form">
// 		<input
// 		  id="new-folder-name"
// 		 type="text"
// 		 class="new-name-input"
// 		 spellcheck="false"
// 		 required>
// 	  </div>`;
// 		var newForm = document.getElementById('new-form');

// 		var newFolderName = document.getElementById('new-folder-name');
// 		newForm.classList.add('activated');
// 		newFolderName.focus();
// 		newFolderName.value = oldName;

// 		newFolderName.addEventListener('keyup', (e) => {
// 			e.preventDefault();
// 			if (e.keyCode === 13) {
// 				element.innerText = newFolderName.value;
// 				bookmarkFolderTitle.innerText = newFolderName.value;
// 				chrome.bookmarks.update(element.id, {
// 					title: newFolderName.value
// 				});
// 				chrome.storage.sync.set({
// 					bookmarkName: newFolderName.value,
// 					recent: ''
// 				});
// 				document.getElementById('new-form').classList.remove('activated');
// 			}
// 		});
// 	});
// });
