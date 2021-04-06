const body = document.body;
const block = document.getElementById("block");
const btn = document.getElementById("btn");
const r_th = document.getElementById("rand_thing")

let cnt = 0;
let rands = ["марковка", "греча", "сироп", "чашка", "пуля", "мышь", "чай", "перо", "сироп", "чашка", "пуля", "марковка", "греча", "чай", "перо"]


body.addEventListener("click", function (e) {
    body.style.background = getRGB();
    // e.target.style.color = getRGB();
})
btn.addEventListener("click", function (e) {
    e.target.style.background = getRGB();
    e.target.style.color = getRGB();

    r_th.innerHTML = `<p>${rands[getNumber(15)]}</p>`;
})

block.addEventListener("click", function (e) {
    e.stopPropagation();
    this.classList.toggle("white")
})

btn.addEventListener("click", e => {
    cnt++
    e.stopPropagation();    // При нажатии на кномпочку фон не меняется
    e.target.innerText = `Clicked ${cnt} times`
})