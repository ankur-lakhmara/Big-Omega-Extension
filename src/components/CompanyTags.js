import React, { useState, useEffect } from "react";
import problemToCompanyMatcher from "../resources/company-wise-problem-list";

function CompanyTags() {
	const [state, setState] = useState({
		companies: []
	});

	useEffect(() => {
		let host = window.location.host;
		// e.g. /problems/flip-string-to-monotone-increasing/
		let problem = window.location.pathname.split("/")[2];
		setState((prevState) => ({ ...prevState, companies: problemToCompanyMatcher[host][problem] || [] }));
		console.log("companies - ", problemToCompanyMatcher[host][problem]);
	}, []);

	return (
		<div className="companyTagsContainer" style={{ display: "flex", padding: "5px" }}>
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
							color: "#4087F1",
							fontSize: "0.8rem"
						}}
					>
						{company.company}
					</div>
				);
			})}
		</div>
	);
}

export default CompanyTags;
