// Для активации
let INF = false
let getFORM = true

// Важные шуки
// let formDiv = document.body
// let form = document.forms[0];
let form = document.forms.rating;
let table = document.body.firstElementChild.nextElementSibling;
let list = document.getElementById("list");

let logText = document.createElement("p");
table.appendChild(logText);
logText.innerText = "LOGS:";
let log1 = document.createElement("p");
table.appendChild(log1);
let tm = 0;


function getInfo() {
    if (INF == true) {
        for (let i = 0; i < form.elements.length; i++) {
            if (i !== form.elements.length - 1){
                console.log(form.elements[i].value);
            }
            // if (form.elements[i].type) {
            //     console.log(form.elements[i].type);
            // } else {
            //     console.log(form.elements[i].value);
            // }
        }
    }
}

const getFormbody = function(el) {
    if (getFORM == true) {
        // console.log(el);
        let formBody = {};
        for (let i = 0; i < form.elements.length; i++) {
            let el = form.elements[i];
            if (el.name) {
                tm++
                if (tm == 3) {
                    tm = 1
                    log1.innerText = null;
                }

                formBody[el.name] = el.value;
                log1.innerText += ` ${formBody[el.name]}`
            }
        }
        // console.log(formBody);
    }
}


let link = form.nextElementSibling;
// console.log(link);
link.onclick = function(event) {
    event.preventDefault();      // Отменить действие по умолчанию
    document.body.style.background = getRGB();
    a.style.color = getRGB();
}

form.onsubmit = function(e) {
    e.preventDefault();
    let formBody = {};
    for (let i = 0; i < form.elements.length; i++) {
        let el = form.elements[i];
        if (el.name) {
            formBody[el.name] = el.value  || "Пустота...";
        }
    }

    console.log(formBody);

    list.innerText = `${formBody.name} : ${formBody.shoto}`;
    list.className = "line";
    
    // document.body.insertBefore(info, form);
    form.parentNode.insertBefore(info, form);   // Если есть папа
}

let selector = document.getElementById("shoto");
let options = ["Шото", "шото", "ШоТо"]

options.forEach(function(element, key) {
    if (element == "Шото") {
        selector[selector.options.length] = new Option(element, selector.length, false, false);
    }
    if (element == "шото") {
        selector[selector.options.length] = new Option(element, selector.options.length, true, false);
    }
    if (element == "ШоТо") {
        selector[selector.options.length] = new Option(element, selector.options.length, false, true);
    }
})
