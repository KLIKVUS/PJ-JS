const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const container = document.getElementsByClassName("INcontainer")[0];

px = 0;

btnLeft.addEventListener("click", e => {
    px += 500;
    if (/* ТУТ НАДА ДА */) {
        container.style = `
            left: ${px}px;
        `;
    }
})
btnRight.addEventListener("click", e => {
    px -= 500;
    if (/* ТУТ НАДА ДА */) {
        container.style = `
            left: ${px}px;
        `;
    }
})