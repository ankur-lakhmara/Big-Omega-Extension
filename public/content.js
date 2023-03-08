function makeApiCall(options) {
	chrome.runtime.sendMessage(chrome.runtime.id, { ...options }, function (response) {
		if (!chrome.runtime.lastError) {
			console.log("lastError : ", response);
		}

		if (response != undefined && response != "") {
			console.log("POST /v1/api/tour SUCCESS : ", response);
		} else {
			console.log("POST /v1/api/tour ERR : ", response);
		}
	});
}

if (typeof init === "undefined") {
	/* global chrome */
	console.log("Leetcode live extension instance created");
	function init() {
		//External Script loading logic
		// var ele = document.createElement("script");
		//verify the script path, it should be from public folder of extention folder
		// var scriptPath = chrome.runtime.getURL("leetcode-tools.js");
		// ele.setAttribute("src", scriptPath);
		// document.body.appendChild(ele);

		// eslint-disable-next-line no-undef
		const extensionOrigin = "chrome-extension://" + chrome.runtime.id;
		console.log(chrome.runtime, extensionOrigin, chrome.runtime.getURL("index.html"));

		// Resource urls
		//console.log("url : ", chrome.runtime.getURL("<resource urls>"));
		// eslint-disable-next-line no-restricted-globals
		if (!location.ancestorOrigins.contains(extensionOrigin)) {
			// Fetch the local React index.html page
			// eslint-disable-next-line no-undef
			fetch(chrome.runtime.getURL("index.html") /*, options */)
				.then((response) => response.text())
				.then((html) => {
					const styleStashHTML = html.replace(/\/static\//g, `${extensionOrigin}/static/`);
					// eslint-disable-next-line no-undef
					$(styleStashHTML).appendTo("body");
					// $(`<div style="display: none" id="beeURL">${chrome.runtime.getURL("resource url from public folder")}</div>`).appendTo("body");
					$(`<div style="display: none" id="extId">${chrome.runtime.id}</div>`).appendTo("body");
					$(`<script> window.makeApiCall = ${makeApiCall}</script>`).appendTo("body");
				})
				.catch((error) => {
					console.warn(error);
				});
		}
	}

	init();

	window.addEventListener("message", function (event) {
		if (event.source !== window) return;
		onDidReceiveMessage(event);
	});

	window.addEventListener("api-req", function (event) {
		chrome.runtime.sendMessage({ ...event.detail }, function (response) {
			window.dispatchEvent(new CustomEvent("api-res", { detail: response }));
		});
	});

	async function onDidReceiveMessage(event) {
		if (event.data.type && event.data.type === "GET_EXTENSION_ID") {
			window.postMessage({ type: "EXTENSION_ID_RESULT", extensionId: chrome.runtime.id }, "*");
		}
	}
}
