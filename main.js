'use strict';

const eighth = () => {
	document.onclick = (event) => {
	const removedElement = document.elementFromPoint(event.clientX, event.clientY);
	removedElement.remove();}
}

eighth();