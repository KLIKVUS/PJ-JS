let op = document.getElementsByClassName("op");
op = Array.from(op);

op.forEach(item => {
    let bro = item.parentNode;
    let h = item.firstElementChild;
    bro.style.height = h.scrollHeight + "px"
    item.onclick = e => {
        if (bro.style.height != "auto") {
            bro.style.height = "auto";
            bro.style.overflow = "visible";
        } else {
            bro.style.height = e.target.scrollHeight + "px";
            bro.style.overflow = "hidden";
        }
    }


//          Бяка кривая
    // item.onclick = e => {
    //     let bro = e.target.parentNode.parentNode;
    //     bro.classList.toggle("active");
    //     if (bro.classList.contains("active")) {
    //         bro.style.height = bro.scrollHeight + "px";
    //         bro.style.overflow = "visible";
    //     } else {
    //         bro.style.height = e.target.scrollHeight + "px";
    //         bro.style.overflow = "hidden";
    //     }
    // }
})

