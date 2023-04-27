chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
  var url = tabs[0].url;
  document.getElementById('url').href = url;
  document.getElementById('url').textContent = url;
});


// Explanation from ChatGPT:
// -----------------------------------------------------------------------------------------------------
// 1 - chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {  
// This line initiates a query to the Chrome browser to get the active tab in the current window. 
//
// It takes an object as its first parameter with two properties: currentWindow and active. 
// Setting currentWindow to true restricts the search to the current window, 
// and setting active to true restricts the search to the currently active tab. 
//
// The second parameter is a callback function that will be executed with the result of the query. 
// In this case, the tabs argument in the callback function will contain an array with one element, 
// which is the active tab object.
// -----------------------------------------------------------------------------------------------------
// 2 - var url = tabs[0].url;
// This line extracts the URL of the active tab from the tabs array returned 
// by the query and assigns it to the url variable.
// ----------------------------------------------------------------------------------------------------- 
// 3 - document.getElementById('url').href = url;  This line sets the href attribute of the HTML anchor 
// element with the id attribute set to "url" to the value of the url variable. 
// This makes the URL a clickable link in the popup window.
// ----------------------------------------------------------------------------------------------------- 
// 4 - document.getElementById('url').textContent = url; 
// This line sets the text content of the HTML anchor element with the id attribute set to "url" to the 
// value of the url variable. This displays the URL as plain text in the popup window.
// -----------------------------------------------------------------------------------------------------