//fetch from to https://api.waifu.pics/
let imgElem = document.getElementById("waifu-img");
let mode = document.getElementById("mode");

function clickedButton() {
    let type = "sfw";

    if (mode.checked) {
        type = "nsfw";
    }
    getWaifu(type, "waifu").then(data => {
        //console.log(data['url']);
        imgElem.src = data['url'];
    });
}

async function getWaifu(type, category) {
    const response = await fetch(`https://api.waifu.pics/${type}/${category}`);
    const data = await response.json();
    return data;
}
