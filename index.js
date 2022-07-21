let dark = true;
let used = false;


function switchMode() {
	let mode_btn = document.getElementById("mode");
	let body = document.body;
	let modal = document.getElementById("quiz");

	if (!used) {
		modal.style.display = "block";
	}else {
		body.classList.toggle("light-mode");
		dark = !dark;

		if (dark) {
			mode_btn.src = "./images/light.png";
		}else {
			mode_btn.src = "./images/dark.png";
		}
	}
}

function quiz(ans) {
	let modal = document.getElementById("quiz");
	let body = document.body;
	let mode_btn = document.getElementById("mode");

	if (ans == "Yes") {
		mode_btn.remove();
		modal.style.display = "none";

		setTimeout(() => {
			alert("Stay in dark mode bitch");
		}, 100);
	}else if (ans == "No") {
		used = true;
		modal.style.display = "none";
		body.classList.toggle("light-mode");
		dark = !dark;

		if (dark) {
			mode_btn.src = "./images/light.png";
		}else {
			mode_btn.src = "./images/dark.png";
		}
	}
}