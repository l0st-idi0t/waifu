//fetch from to https://api.waifu.pics/

let imgElem = document.getElementById("waifu-img");

async function getWaifu() {
    const response = await fetch("https://api.waifu.pics/sfw/waifu");
    const data = await response.json();
    return data;
}


let button = document.getElementById("waifu");
if (button.addEventListener)
    button.addEventListener("click", clickedButton, false);

function clickedButton() {
    getWaifu().then(data => {
        console.log(data['url']);
        imgElem.src = data['url'];
    });
}
