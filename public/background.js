/* global chrome */

chrome.action.onClicked.addListener(function (tab) {
	chrome.scripting.executeScript({
		files: ["preinject.js", "big-omega-tools.js"],
		target: { tabId: tab.id }
	});
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log(request, sender, sendResponse);
	if (request.contentScriptQuery == "<NAME HERE FOR WHICH API IS TO BE CALLED>") {
		var url = request.url;
		fetch(url)
			.then((response) => response.text())
			.then((response) => sendResponse({ ...JSON.parse(response), contentScriptQuery: request.contentScriptQuery }))
			.catch((error) => console.log("Error:", error));
		return true;
	}
	return true;
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	console.log("tabId, changeInfo, tab - ", tabId, changeInfo, tab);
	let allowedPlatformDomains = ["leetcode.com/problems", "codechef.com/problems", "hackerrank.com/challenges/"];
	let injectScript = false;
	if (tab?.url) {
		allowedPlatformDomains.every((domain) => {
			if (tab.url.includes(domain)) {
				injectScript = true;
				return false;
			}

			return true;
		});
	}
	if (changeInfo.status === "complete" && injectScript) {
		chrome.scripting
			.executeScript({
				files: ["content.js"],
				target: { tabId: tabId }
			})
			.then(() => {
				console.log("INJECTED THE FOREGROUND SCRIPT.");
			})
			.catch((err) => console.log(err));
	}
});

chrome.runtime.onInstalled.addListener(() => {
	// default state goes here
	// this runs ONE TIME ONLY (unless the user reinstalls your extension)
});
