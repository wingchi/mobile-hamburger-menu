// Javascript to toggle hamburger menu goes here
"use strict";

var isMobile = () => {
	let userAgent = navigator.userAgent;

	if(userAgent.match(/Android/i) ||
		userAgent.match(/iPhone/i) ||
		userAgent.match(/iPad/i)) {
		return true;
	} else {
		return false;
	}
}

if(isMobile()) {
	const mainNav = document.querySelector("#main-nav");
	mainNav.style.display = "none";

	const hamburgerButtons = document.querySelectorAll(".hamburger-menu-button");
	for (var hamburgerButton of hamburgerButtons) {
		hamburgerButton.style.display = "block";
		hamburgerButton.addEventListener("click", (event) => {
			let navDisplay = mainNav.style.display;
			if (navDisplay === "none") {
				mainNav.style.display = "block";
				setTimeout(()=>{
					mainNav.style.visibility = "visible";
					mainNav.style.opacity = 1;
				}, 100);
			} else {
				mainNav.style.display = "none";
				mainNav.style.visibility = "hidden";
				mainNav.style.opacity = 0;
			}
		});
	}
	const navItems = document.querySelectorAll(".nav-item");
	for(var navItem of navItems) {
		navItem.classList.toggle("nav-item-mob");
		navItem.classList.toggle("nav-item");
	}
	const navSections = document.querySelectorAll(".nav-section");
	for(var navSection of navSections) {
		navSection.classList.toggle("nav-section-mob");
		navSection.classList.toggle("nav-section");
	}
}