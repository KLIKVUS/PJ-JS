let head = document.getElementById("head");
let userName = document.createElement("h1");
userName.innerText = "NAME";
head.appendChild(userName);
let form = document.getElementById("former");
console.log(head);

let logo = {
    img: "svg\arrow-up.svg"
    // img: ""
}


form.onsubmit = function (es) {
    es.preventDefault();
    let formEl = [];
    for (let i = 0; i < form.elements.length; i++) {
        let ele = form.elements[i];
        if (ele.name) {
            formEl[ele.name] = ele.value  || "ВАШЕ ИМЯ";
        }
    }

    userName.innerText = formEl.name
    console.log(formEl)
}

options.forEach(function (element, key) {
    if (element == "arrow-up") {
        let imgUP = document.createElement("img")
        head.appendChild(imgUP)
        imgUP.src("svg\arrow-up.svg")
    }
})