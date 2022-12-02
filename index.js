//fetch from to https://api.waifu.pics/
let imgElem = document.getElementById("waifu-img");
let mode = document.getElementById("mode");
let optionMenu = document.querySelector(".select-menu");
let selectBtn = optionMenu.querySelector(".select-btn");
let options = optionMenu.querySelectorAll(".option");
let sBtn_text = optionMenu.querySelector(".sBtn-text");
let modeToggle = optionMenu.querySelector(".options-1");

selectBtn.addEventListener("click", () => {
    if (mode.checked) {
        modeToggle = optionMenu.querySelector(".options-2");
    }else {
        modeToggle = optionMenu.querySelector(".options-1");
    }
    modeToggle.classList.toggle("active");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    modeToggle.classList.remove("active");
  });
});

function clickedButton() {
    let type = "sfw";
    let category = sBtn_text.innerText;

    if (mode.checked) {
        type = "nsfw";
    }

    if (category == "Select your option") {
        category = "waifu";
    }

    getWaifu(type, category).then(data => {
        //console.log(data['url']);
        imgElem.src = data['url'];
    });
}

async function getWaifu(type, category) {
    const response = await fetch(`https://api.waifu.pics/${type}/${category}`);
    const data = await response.json();
    return data;
}
