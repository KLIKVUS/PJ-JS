let ping = 0;
// document.getElementsByTagName("button")[0]; 
let btn = document.body.firstElementChild;

// btn.onclick = function() {
//     ping++;
//     console.log("Click!", ping);
// }

// btn.onclick = function() {
//     this.innerText = "Кнопка нажата!";
// }

const ticks = function() {
    ping++;
    console.log("Click!", ping);
}

btn.addEventListener("click", ticks);
btn.addEventListener("click", function() {
    this.innerText = "Кнопка нажата!";
    setTimeout(function(){btn.innerText="Жмякус"}, 500);
    if (ping >= 10) {
        alert("А уже усе");
        btn.removeEventListener("click", ticks);
    }
});
btn.addEventListener("click", e => {
    document.body.style.opacity = ((100 - ping * 10) / 100);
}); 