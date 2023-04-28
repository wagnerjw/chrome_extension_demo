chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
  var url = tabs[0].url;
  var splitURL = url.split(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/);
  const fullPath = splitURL[5];
  console.log(fullPath);
  const rootPath = fullPath.split('/')[1];
  const rootPathCaps = rootPath.charAt(0).toUpperCase() + rootPath.slice(1);
  document.getElementById('url').href = url;
  document.getElementById('url').textContent = rootPathCaps;
});






