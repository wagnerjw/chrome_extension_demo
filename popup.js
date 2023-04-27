chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
  var url = tabs[0].url;
  document.getElementById('url').href = url;
  document.getElementById('url').textContent = url;
});

// Line 1: use the chrome tabs API to query the current window and create a callback function ('tabs') that returns an array of tabs
// Line 2: create variable 'url' and set it to the first (0th) index of the tabs callback - 
// Line 2: since currentWindow = true, the array only has one entry 
// Line 3: finally we write the contents of the url variable to the <a> tag in the html page
// line 3: notice this action must be done inside of the chrome.tabs.query function or else its undefined (locally scoped)