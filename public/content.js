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
	function init() {
		//External Script loading logic
		//var ele = document.createElement("script");
		//verify the script path, it should be from public folder of extention folder
		// var scriptPath = chrome.runtime.getURL("jquery.js");
		// ele.setAttribute("src", scriptPath);
		// document.body.appendChild(ele);

		// eslint-disable-next-line no-undef
		const extensionOrigin = "chrome-extension://" + chrome.runtime.id;
		//console.log(chrome.runtime, extensionOrigin, chrome.runtime.getURL("index.html"));

		// Resource urls
		//console.log("url : ", chrome.runtime.getURL("<resource urls>"));
		// eslint-disable-next-line no-restricted-globals
		if (!location.ancestorOrigins.contains(extensionOrigin)) {
			// Fetch the local React index.html page
			// eslint-disable-next-line no-undef
			/**
			 * convert following line to js
			 * $(`<div style="display: none" id="extId">${chrome.runtime.id}</div>`).appendTo("body");
			 * $(`<script> window.makeApiCall = ${makeApiCall}</script>`).appendTo("body");
			 */
			// let script1 = document.createElement("script");
			// script1.innerHTML = `window.makeApiCall = ${makeApiCall}`;
			// document.body.appendChild(script1);
			// let div1 = document.createElement("script");
			// div1.id = "extId";
			// div1.style.display = "none";
			// div1.innerHTML = `${chrome.runtime.id}`;
			// document.body.appendChild(div1);
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
