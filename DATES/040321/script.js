const btn = document.getElementsByTagName("button")[0], inp = document.getElementsByTagName("input")[0], caption = document.body.firstElementChild;


const changeCaption = () => {
    caption.innerText = `Hello, ${inp.value ? inp.value : "guest"}`;
    inp.value = "";

}
// btn.onclick = changeCaption;
btn.onclick = e => {
    changeCaption();
    console.log(this);
    console.log(e);
}


const someInp = document.getElementById("some"), someBox = document.getElementsByClassName("some_text")[0];

const showText = e => {
    someBox.innerText = e.target.value;
}

someInp.oninput = showText;

someInp.onchange = e => {
    e.target.value = "";
}

someInp.onfocus = e => {
    e.target.style.borderColor = "red";
    e.target.style.borderStyle = "solid";
}

someInp.onblur = e => {
    e.target.style.borderColor = "lightgreen";
}