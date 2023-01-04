import "./style.css";

(function () {
	window.onload = () => {
		setTimeout(() => document.body.classList.remove("blurred"), 800);
	};

	// enable dark mode & save to localstorage
	const darkModeBtn = document.querySelector(".dark-theme-btn");
	let darkModeValue = localStorage.getItem("dark-mode");
	if (darkModeValue === "enabled") {
		document.body.classList.add("dark-theme");
	}

	darkModeBtn.addEventListener("click", () => {
		let val = document.body.classList.contains("dark-theme") ? null : "enabled";
		darkModeValue = localStorage.setItem("dark-mode", val);
		document.body.classList.toggle("dark-theme");
	});

	const menuToggler = document.querySelector(".menu-toggler");
	const headerMenu = document.querySelector("header nav ul");
	if (menuToggler) {
		menuToggler.addEventListener("click", (e) => {
			headerMenu.classList.toggle("show-menu");
			menuToggler.classList.toggle("close-menu");
		});
	}

	const menuLinks = document.querySelectorAll("header nav ul a");
	menuLinks.forEach((link) => {
		link.addEventListener("click", (e) => {
			if (headerMenu.classList.contains("show-menu")) {
				headerMenu.classList.remove("show-menu");
				menuToggler.classList.remove("close-menu");
			}
		});
	});

	// encode email and phone number to Html entities
	const encodeEls = [document.querySelector("#email"), document.querySelector("#phone")];
	encodeEls.forEach((el) => {
		if (el) {
			const text = el.getAttribute("href");
			const replaceText = text.startsWith("mailto:") ? "mailto:" : "tel:";
			text.replace(replaceText, "");
			let encodeText = "";
			for (let i = 0; i < text.length; i++) {
				encodeText += `&#${text.charCodeAt(i)};`;
			}
			el.setAttribute("href", `${replaceText}${encodeText}`);
		}
	});

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					document.querySelectorAll("[data-progress]").forEach(function (el) {
						el.style.width = el.dataset.progress + "%";
					});
				} else {
					document.querySelectorAll("[data-progress]").forEach(function (el) {
						el.style.width = 0;
					});
				}
			});
		},
		{ threshold: 0.75 }
	);

	observer.observe(document.querySelector(".skills-block-wrap"));
})();
