/*
    1. Получаем кнопку по атрибуту data-type
*/

var msgBtn = document.querySelector("[data-type=\"popup\"]");   // .querySelector(selctor) - возращает первый попавшийся html-элемент по соответствующему css-селектору     .querySelectorAll(selctor) - возрощяет Списо (NodeList) из всех html-элементов по соответсвующему css-селектору ( можно не использовать Array.from ибо цеуже массив )

const showPopup = (msg) => {
    let box = document.createElement("div");
    box.className = "popup";
    box.innerText = msg;
    let close = document.createElement("div");
    close.className = "closePopup";
    close.innerText = "+";
    box.appendChild(close);
    document.body.appendChild(box);
    document.body.classList.add("hidden");
    close.addEventListener("click", (e) => {
        box.remove();
        document.body.classList.remove("hidden");
    })
}

msgBtn.addEventListener("click", e => {
    let text = e.target.previousElementSibling.value;
    if (text) {
        showPopup(text);
    } else {
        showPopup("Пустота");
    }
})