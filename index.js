//fetch from to https://api.waifu.pics/
let imgElem = document.getElementById("waifu-img");

function clickedButton() {
    getWaifu('sfw', 'waifu').then(data => {
        console.log(data['url']);
        imgElem.src = data['url'];
    });
}

async function getWaifu(type, category) {
    const response = await fetch(`https://api.waifu.pics/${type}/${category}`);
    const data = await response.json();
    return data;
}
