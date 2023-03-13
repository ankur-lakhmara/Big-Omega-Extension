oldElems = document.querySelectorAll("#windowFrame");
if (oldElems && oldElems.length > 0) {
	Array.from(oldElems).forEach((e) => {
		e.remove();
	});
}

elem = document.createElement("div");
elem.id = "windowFrame";
document.body.appendChild(elem);
