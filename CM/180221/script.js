// Шапка и ее вложения
let header = document.body.firstElementChild;
let img = document.getElementById("img");
// console.log(header);

// Имечко
let userName = document.createElement("h1");
userName.innerText = "NAME";
header.appendChild(userName);

// Форма
let form = document.getElementById("former");
// console.log(former);

// Картинки
let logo = {
    img0: "500px-brands.svg",
    img1: "address-card.svg",
    img2: "apple-alt.svg",
    img3: "air-freshener.svg"
}



// Вписывалка имени
form.onsubmit = function (es) {
    es.preventDefault();
    let formEl = [];
    for (let i = 0; i < form.elements.length; i++) {
        let ele = form.elements[i];
        if (ele.name) {
            formEl[ele.name] = ele.value;
        }
    }

    userName.innerText = formEl.name;
    // console.log(formEl[name]);
}

// Выбор картинки
seleCard.onclick = function() {
    if (seleCard.value == "address-card") {
        img.src = "svg/"+logo.img1;
    } else if (seleCard.value == "apple-alt") {
        img.src = "svg/"+logo.img2;
    } else if (seleCard.value == "air-freshener") {
        img.src = "svg/"+logo.img3;
    } else if (seleCard.value == "500px-brands") {
        img.src = "svg/"+logo.img0
    }
}

// Смена цвета
seleColor.onclick = function() {
    if (seleColor.value == "Red") {
        header.style.background = "#b10000d7";
    } else if (seleColor.value == "Green") {
        header.style.background = "#0d5f0d";
    } else if (seleColor.value == "Blue") {
        header.style.background = "#1616bd";
    } else if (seleColor.value == "DEFAULT") {
        header.style.background = "#02BA6A";
    }
}

// Смена позиции
let Left = 0;
let Row = 0;
checkLeft.onclick = function () {
    if (checkLeft.checked && Row == 0) {
        Left = 1;
        header.style.alignItems = "flex-start";
        userName.style.marginLeft = "5%";
    } else if (checkLeft.checked && Row == 1) {
        header.style.justifyContent = "left";
    } else {
        Left = 0;
        header.style.alignItems = "center";
        header.style.justifyContent = "center";
        userName.style.marginLeft = "0";
    }
}
checkRow.onclick = function () {
    if (checkRow.checked && Left == 0) {
        Row = 1;
        header.style.flexDirection = "row";
    } else if (checkRow.checked && Left == 1) {
        header.style.flexDirection = "row";
        // header.style.justifyContent = "left";
    } else {
        Row = 0;
        header.style.flexDirection = "column";
        header.style.justifyContent = "center";
    }
}