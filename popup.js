chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var tab = tabs[0];
  var url = tab.url;

  var copyInput = document.createElement("input");
  copyInput.setAttribute("type", "text");
  copyInput.setAttribute("value", url);
  document.body.appendChild(copyInput);
  copyInput.select();
  //document.execCommand("copy");
  document.body.removeChild(copyInput);

  var popupWindow = window.open("", "popup", "width=400,height=200");
  popupWindow.document.write("<p>URL copied:</p><p><a href='" + url + "'>" + url + "</a></p>");
});

