let images = [
    {name: "biohazard", path: "svg/biohazard.svg"},
    {name: "candy-cane", path: "svg/candy-cane.svg"},
    {name: "cannabis", path: "svg/biohazard.svg"},
    {name: "circle", path: "svg/circle.svg"}
]

let pic = document.body.firstElementChild.firstElementChild;
let text = document.body.firstElementChild.lastElementChild;

let select = document.createElement("select");
for (let img of images) {
    let opt = new Option(img.name, img.path);
    select.appendChild(opt);
}
document.body.appendChild(select);

select.onchange = function(e) {
    pic.src = this.value;
}