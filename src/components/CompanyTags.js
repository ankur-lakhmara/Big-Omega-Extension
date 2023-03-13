import React, { useState, useEffect } from "react";
import problemToCompanyMatcher from "../resources/company-wise-problem-list";
import ChevronDown from "./ChevronDown";
import CloseButton from "./CloseButton";

function CompanyTags() {
	const [state, setState] = useState({
		companies: [],
		isExpanded: false
	});

	useEffect(() => {
		let host = window.location.host;
		// e.g. /problems/flip-string-to-monotone-increasing/
		let problem = window.location.pathname.split("/")[2];
		setState((prevState) => ({ ...prevState, companies: problemToCompanyMatcher[host][problem] || [] }));
		console.log("companies - ", problemToCompanyMatcher[host][problem]);
	}, []);

	const toggleExpansion = () => {
		setState((prevState) => ({ ...prevState, isExpanded: !prevState.isExpanded }));
	};

	const handleCloseTags = () => {
		let elem = document.getElementById("big-omega-topbar");
		if (elem) {
			elem.remove();
		}
	};

	return (
		<div id="big-omega-topbar" style={{ width: "100vw", display: "flex", transition: "all 400ms ease" }}>
			<div
				className="companyTagsContainer"
				style={{
					display: "flex",
					padding: "5px",
					width: "calc(100vw - 100px)",
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
								whiteSpace: "nowrap"
							}}
						>
							{company.company}
						</div>
					);
				})}
			</div>
			<div
				style={{
					right: "10px",
					width: "50px",
					transform: state.isExpanded ? "rotate(180deg)" : "",
					display: "flex",
					justifyContent: "center",
					padding: "15px",
					alignItems: state.isExpanded ? "flex-end" : "center",
					cursor: "pointer"
				}}
				onClick={toggleExpansion}
			>
				<ChevronDown />
			</div>
			<div
				style={{
					right: "10px",
					padding: "15px",
					width: "50px",
					display: "flex",
					justifyContent: "center",
					alignItems: state.isExpanded ? "flex-end" : "center",
					cursor: "pointer"
				}}
				onClick={handleCloseTags}
			>
				<CloseButton />
			</div>
		</div>
	);
}

export default CompanyTags;
