let div = document.querySelector(".popup");
// console.log(div);

/*
    События клавиатуры:
    onkeypress - когда была нажата и отжата клавиша клавиатуры
    onkeypress - когда кнопка была нажата, но еще не была отжата
    onkeyup - когда кнопка была отжата, после нажатия
*/

document.body.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        div.innerHTML += "<br>";
    } else {
        div.innerText += e.key;
    }
});
document.body.addEventListener("keydown", e =>{
    if (e.key === " ") {
        e.target.innerHTML += " ";
    } else if (e.key === "Tab") {
        div.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;"
    } else if (e.key === "Backspace") {
        let str = "";
        let current = div.innerHTML;
        for (let i = 0; i < current.length - 1; i++) {
            str += current[i];
        }
    }
});
