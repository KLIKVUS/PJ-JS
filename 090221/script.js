// Для активации
let INF = false
let getFORM = true


// let form = document.forms[0]
let form = document.forms.rating;
// console.log(form.elements);
let table = document.body.firstElementChild.nextElementSibling
let logText = document.createElement("p");
table.appendChild(logText)
logText.innerText = "LOGS:"
let log1 = document.createElement("p");
table.appendChild(log1)
let tm = 0


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
        let formBody = [];
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
            console.log(formBody);
        }
        // console.log(formBody);
    }
}