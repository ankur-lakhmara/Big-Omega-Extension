import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import CompanyTags from "./components/CompanyTags";

function App() {
	const [state, setState] = useState({});

	useEffect(() => {
		// window.addEventListener("api-res", (event) => {
		// 	if (event.detail.contentScriptQuery === "getTours") {
		// 		if (event.detail.status === 200) {
		// 			setState((prevState) => ({ ...prevState, savedScreenContent: event.detail.data }));
		// 		}
		// 	}
		// });
	}, []);

	useEffect(() => {
		//this.fetchStyles();
		/**
		 * TODO
		 * 1. Companies tag embedding
		 *      a. detect platform - leetcode, hackerearth,
		 *      b. detect actually code page route - https://leetcode.com/problems/<problem name>/
		 *      c. Get div where we want to show company tags from html path/id/tag from dynamic config
		 *      d. Call API to send problem string and get company tags array as response
		 *      e. ReactDOM.render(CompanyTags: ReactComponent,path: query path got from step 3)
		 *      f. Listen from browser url change and call API again if user is on a different problem
		 */
		let interval = setInterval(() => {
			let currentHref = window.location.href;
			// let currPlatformObj = this.state.platforms.find((platform) => currentHref.includes(platform.problemTriggerURL));
			// let elem = document.querySelector(currPlatformObj.companiesTagContainer);
			if (document.body) {
				let newElem = document.createElement("div");
				document.body.prepend(newElem);
				const root = ReactDOM.createRoot(newElem);
				root.render(<CompanyTags />, newElem);
				clearInterval(interval);
				console.log("again....");
			}
		}, 3000);
	}, []);

	const APICallingLogic = (tourContent) => {
		let reqOptions = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		};
		window.dispatchEvent(
			new CustomEvent("api-req", {
				detail: {
					contentScriptQuery: "deleteTour",
					reqOptions: reqOptions,
					url: `${process.env.REACT_APP_BASE_URL}/v1/api/tour?token=` + state.token + "&tourId=" + tourContent.id
				}
			})
		);
	};

	return <div id="windowFrame">Coming soon 1. Sticky bar on right side</div>;
}

export default App;
