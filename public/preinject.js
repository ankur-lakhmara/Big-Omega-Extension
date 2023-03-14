oldElems = document.querySelectorAll("#big-omega-extention");
if (oldElems && oldElems.length > 0) {
	Array.from(oldElems).forEach((e) => {
		e.remove();
	});
}

elem = document.createElement("div");
elem.id = "big-omega-extention";
document.body.appendChild(elem);
