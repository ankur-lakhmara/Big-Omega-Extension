import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import problemToCompanyMatcher from "../resources/company-wise-problem-list";
import ChevronDown from "./ChevronDown";
import CloseButton from "./CloseButton";

function CollapseLogo(props) {
	return (
		<div
			style={{
				right: "10px",
				padding: "10px",
				width: "20px",
				fontSize: "1.3rem",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				cursor: "pointer",
				transition: "all 400ms ease"
			}}
			className="dark:hover:bg-dark-fill-3"
			onClick={props.handleCollapseTags}
		>
			Ω
		</div>
	);
}

function CompanyTags(props) {
	const [state, setState] = useState({
		companies: [],
		isExpanded: false,
		isClosed: false,
		theme: props.theme,
		isTagsContainerScrollable: false
	});

	useEffect(() => {
		let host = window.location.host;
		// e.g. /problems/flip-string-to-monotone-increasing/
		let problem = window.location.pathname.split("/")[2];

		setState((prevState) => ({
			...prevState,
			companies: problemToCompanyMatcher[host][problem] || [],
			isClosed: false
		}));

		handleURLChange();
		window.onurlchange = (event) => {
			let host = window.location.host;
			// e.g. /problems/flip-string-to-monotone-increasing/
			let problem = window.location.pathname.split("/")[2];
			let theme = document.querySelector("html").dataset.theme;

			setState((prevState) => ({
				...prevState,
				companies: problemToCompanyMatcher[host][problem] || [],
				isClosed: false,
				theme: theme
			}));
		};
	}, []);

	useEffect(() => {
		if (state.isClosed && state.companies.length > 0) {
			let btns = document.querySelector(
				"#__next > div > div > div > nav > div > div > div.relative.ml-4.flex.items-center.space-x-4"
			);

			let dummyElem = document.createElement("div");
			dummyElem.id = "big-omega-collapse-wrapper";

			btns.appendChild(dummyElem);
			ReactDOM.render(<CollapseLogo handleCollapseTags={handleCollapseTags} />, dummyElem);
		} else {
			let collapseBtn = document.getElementById("big-omega-collapse-wrapper");
			if (collapseBtn) collapseBtn.remove();
		}
	}, [state.isClosed]);

	const handleURLChange = () => {
		const hasNativeEvent = Object.keys(window).includes("onurlchange");
		if (!hasNativeEvent) {
			let oldURL = window.location.href;
			setInterval(() => {
				const newURL = window.location.href;
				if (oldURL === newURL) {
					return;
				}
				const urlChangeEvent = new CustomEvent("urlchange", {
					detail: {
						oldURL,
						newURL
					}
				});
				oldURL = newURL;
				dispatchEvent(urlChangeEvent);
			}, 25);
			window.addEventListener("urlchange", (event) => {
				if (typeof onurlchange === "function") {
					window.onurlchange(event);
				}
			});
		}
	};

	const toggleExpansion = () => {
		setState((prevState) => ({ ...prevState, isExpanded: !prevState.isExpanded }));
	};

	const handleCollapseTags = () => {
		setState((prevState) => ({ ...prevState, isClosed: !prevState.isClosed }));
	};

	let shouldCollapse = state.isClosed || state.companies.length === 0;

	return (
		<div
			id="big-omega-topbar"
			style={{
				width: "100vw",
				transition: "all 400ms ease",
				display: "flex"
			}}
		>
			{!shouldCollapse && (
				<>
					<div
						className="companyTagsContainer"
						style={{
							display: "flex",
							padding: "5px",
							width: `calc(100vw - 100px)`,
							overflowX: state.isExpanded ? "hidden" : "scroll",
							flexWrap: state.isExpanded ? "wrap" : "nowrap"
						}}
					>
						{state.companies.map((company, idx) => {
							return (
								<div
									key={company.company + idx}
									className="companyTagsContainer--tag"
									style={{
										margin: "5px",
										padding: "5px 10px 5px 10px",
										border: "1px solid #4087F1",
										background: "#C5DCFF",
										color: "#262626bf",
										fontSize: ".75rem",
										borderRadius: "4px",
										whiteSpace: "nowrap",
										display: "flex",
										justifyContent: "center",
										alignItems: "center"
									}}
								>
									<div>{company.company}</div>
									<div
										style={{
											marginLeft: "10px",
											background: "white",
											padding: "3px 5px 3px 5px",
											borderRadius: "4px",
											fontWeight: "600",
											fontSize: ".6rem",
											opacity: ".8"
										}}
									>
										{company.num_occur}
									</div>
								</div>
							);
						})}
					</div>
					<div
						style={{
							right: "10px",
							width: "50px",
							display: "flex",
							justifyContent: "flex-end",
							padding: "10px",
							alignItems: "flex-start",
							cursor: "pointer"
						}}
						onClick={toggleExpansion}
					>
						<div style={{ transform: state.isExpanded ? "rotate(180deg)" : "" }}>
							<ChevronDown theme={state.theme} style={{ transform: state.isExpanded ? "rotate(180deg)" : "" }} />
						</div>
					</div>
					<div
						style={{
							right: "10px",
							padding: "10px",
							display: "flex",
							width: "50px",
							justifyContent: "flex-start",
							alignItems: "flex-start",
							cursor: "pointer"
						}}
						onClick={handleCollapseTags}
					>
						<CloseButton theme={state.theme} />
					</div>
				</>
			)}
		</div>
	);
}

export default CompanyTags;
