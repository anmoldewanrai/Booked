//Search Bookmarks
var term = "";
search.addEventListener("keyup", (e) => {
  showMore.style.display = "none";
  if (e.keyCode === 13) {
    folderTitle.innerText = "Search Results";
    term = search.value.trim();
    chrome.bookmarks.search(term, (terms) => {
      list.innerHTML = "";
      if (terms.length) {
        terms.forEach((term) => {
          list.innerHTML += `
							<a href="${term.url}" target="_blank">
							<div class="item">
							<img height="20" width="20" src="http://www.google.com/s2/favicons?domain=${term.url}">
							<p class="title">${term.title}</p>
							</div>
							</a>`;
        });
      } else {
        list.innerHTML = `<h3>No Bookmark(s) Found</h3>`;
      }
    });
  }
});
