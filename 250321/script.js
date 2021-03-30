const viewBox = document.getElementById("box"),
    bg = document.getElementById("bg"),
    items = document.getElementsByClassName("color-item");
/* 
    document.getElementsByClassName - получение HTML-коллекции из узлов элементов с заданным классом
    document.getElementsByName - получение HTML-коллекции из узлов элементов с атрибутом NAME
    document.getElementsByTagName - получение HTML-коллекции из узлов элементов с соответсвующим тегом
*/

const getNumber = (max = 11, min = 0) => Math.floor(Math.random() * (max - min) + min);
const getColor = () => `rgb(${getNumber(256)},${getNumber(256)},${getNumber(256)})`;

for(let it of items) {
    // .setAttribute("название атрибута", "значение атрибута") - добавляет к тегу атрибут
    it.setAttribute("data-color", getColor());
    // .getAttribute("название атрибута") - получить значение атрибута
    let currentColor = it.getAttribute("data-color");
    it.setAttribute("style", `background: ${currentColor}`);
    bg.setAttribute("style", `background: ${currentColor}`);    
    it.onclick = () => {
        viewBox.setAttribute("style", `background: ${currentColor}`);
        bg.setAttribute("style", `background: ${currentColor}`);
    }
}

viewBox.setAttribute("style", `background: ${items[0].getAttribute("data-color")}`);
bg.setAttribute("style", `background: ${items[0].getAttribute("data-color")}`);