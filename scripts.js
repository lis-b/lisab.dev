var navbar = document.getElementById("navbar");

window.onscroll = () => {
	if (window.pageYOffset >= document.documentElement.clientHeight/4 * 3) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
};
