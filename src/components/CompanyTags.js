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
					<ChevronDown style={{ transform: state.isExpanded ? "rotate(180deg)" : "" }} />
				</div>
			</div>
			<div
				style={{
					right: "10px",
					padding: "10px",
					width: "50px",
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "flex-start",
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
