//Setup for mobile navigation behaviour
const mainMenu = document.querySelector("ul.navigation");
const backdrop = document.querySelector("div.backdrop");
const burgerButton = document.getElementById("burger-btn");
const burgerImage = burgerButton.querySelector("img");

burgerButton.addEventListener("click", () => {
	//Change state based on menus's current display status
	if (mainMenu.style.display == "none") {
		burgerImage.src = "./images/icon-close.svg";
		backdrop.style.display = "block";
		mainMenu.style.display = "flex";
	} else {
		burgerImage.src = "./images/icon-hamburger.svg";
		backdrop.style.display = "none";
		mainMenu.style.display = "none";
	}
});

/* Setup for slider behaviour */
/* mobile slider behaviour */
const testimoniNav = document.querySelector("ul.testimony-nav");
const anchors = testimoniNav.querySelectorAll("a");
testimoniNav.addEventListener("click", (event) => {
	console.log(event);
	event.preventDefault();
	curr_index = 0;
	anchors.forEach((item) => {
		if (item.id != event.path[0].id) {
			item.className = "";
		} else {
			item.className = "selected";
			setActiveTestimony(curr_index);
		}
		curr_index++;
	});
});

const allTestimonies = document.querySelectorAll(
	"section.testimonials ul.testimonies li"
);
const setActiveTestimony = (index) => {
	let idx = 0;
	allTestimonies.forEach((item) => {
		if (index === idx) {
			item.style.display = "flex";
		} else {
			item.style.display = "none";
		}
		idx++;
	});
};
const displayAllTestimony = () => {
	allTestimonies.forEach((item) => {
		item.style.display = "flex";
	});
};

/* End mobile slider behaviour */

/* Setup for desktop slider behaviour */
//inspect current screen if it is desktop
const resizeHandler = () => {
	let w = window.screen.width;
	console.log("current width : " + w);
	if (w < 768) {
		setActiveTestimony(0);
	} else {
		displayAllTestimony();
	}
};
resizeHandler();
window.addEventListener("resize", resizeHandler);
/* End Setup for desktop slider behaviour */

/* End Setup for slider behaviour */

/* Setup for email validation */
const isEmailCorrect = (emailText) => {
	const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (emailText.match(mailformat)) {
		return true;
	}
	return false;
};

const form = document.querySelector("form");
const btnSubmit = form.querySelector("input[type='button']");
const emailAddress = form.querySelector("input[type='text']");
const errorLabel = form.querySelector("label");

btnSubmit.addEventListener("click", () => {
	if (emailAddress.value.trim() === "") {
		errorLabel.innerText = "Email address cannot be empty!";
	} else if (isEmailCorrect(emailAddress.value)) {
		errorLabel.innerText = "";
	} else {
		errorLabel.innerText = "Please insert a valid email!";
	}
});
/* End Setup for email validation */

/* handle touch event for teestimony slider on desktop screen */
const swipeArea = document.querySelector("ul.testimonies");

swipeArea.addEventListener("click", () => {});

/* end handle touch event for teestimony slider on desktop screen */
