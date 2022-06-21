 //TIMELINE 
 (function () {
	// "use strict";


	var items = document.querySelectorAll(".timeline li");


	function isElementInViewport(el) {
	var rect = el.getBoundingClientRect();
	return (
	rect.top >= 0 &&
	rect.left >= 0 &&
	rect.bottom <=
		(window.innerHeight || document.documentElement.clientHeight) &&
	rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

function callbackFunc() {
	for (var i = 0; i < items.length; i++) {
	if (isElementInViewport(items[i])) {
		items[i].classList.add("in-view");
	}
	}
}

	// listen for events
	window.addEventListener("load", callbackFunc);
	window.addEventListener("resize", callbackFunc);
	window.addEventListener("scroll", callbackFunc);
})();


// // // MODAL
const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];

//
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
//   modal.style.display = 'block';
	modal.classList.add('effect');
};

//
buttonClose.addEventListener('click', modalClose);
function modalClose() {
//   modal.style.display = 'none';
	modal.classList.remove('effect');
};

//
addEventListener('click', outsideClose);
function outsideClose(e) {
if (e.target == modal) {
//   modal.style.display = 'none';
	modal.classList.remove('effect');
    };
};

