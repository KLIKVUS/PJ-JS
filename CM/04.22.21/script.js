const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const INcontainer = document.getElementsByClassName("INcontainer")[0];

const bg = document.getElementsByClassName("bg")[0];
let bgNum = 1;

let scrolls = 35;
let scrollOn = 0;

btnLeft.addEventListener("click", e => {
    if (scrollOn != 0) {
        scrollOn += scrolls;
        INcontainer.style = `
            left: ${scrollOn}vh;
        `;
        
        bgNum -= 1;
        bg.style = `
            background: url(img/${bgNum}.jpg) center / cover fixed;
        `;
    } else {
        scrollOn = -105;
        INcontainer.style = `
            left: -105vh;
        `;

        bgNum = 4;
        bg.style = `
            background: url(img/${bgNum}.jpg) center / cover fixed;
        `;
    }
})
btnRight.addEventListener("click", e => {
    if (scrollOn != -105) {
        scrollOn -= scrolls;
        INcontainer.style = `
            left: ${scrollOn}vh;
        `;

        bgNum += 1;
        bg.style = `
            background: url(img/${bgNum}.jpg) center / cover fixed;
        `;
    } else {
        scrollOn = 0;
        INcontainer.style = `
            left: 0vh;
        `;

        bgNum = 1;
        bg.style = `
            background: url(img/${bgNum}.jpg) center / cover fixed;
        `;
    }
})