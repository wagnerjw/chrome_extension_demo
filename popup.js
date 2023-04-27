chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
  var url = tabs[0].url;
  document.getElementById('url').href = url;
  document.getElementById('url').textContent = url;
});

