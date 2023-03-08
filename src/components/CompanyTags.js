import React, { useState } from "react";

function CompanyTags() {
	const [state, setState] = useState({
		companies: [
			"Amazon",
			"Microsoft",
			"IBM",
			"Amazon",
			"Microsoft",
			"IBM",
			"Amazon",
			"Microsoft",
			"IBM",
			"Amazon",
			"Microsoft",
			"IBM"
		]
	});
	return (
		<div className="companyTagsContainer" style={{ display: "flex", padding: "5px" }}>
			{state.companies.map((company, idx) => {
				return (
					<div
						key={company + idx}
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
						{company}
					</div>
				);
			})}
		</div>
	);
}

export default CompanyTags;
