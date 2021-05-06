window.addEventListener("load", e => {
    const container = document.createElement("div");
    container.className = "container";
    document.body.appendChild(container);

    images.forEach(img => {
        const el = document.createElement("div");
        el.className = "card";
        el.setAttribute("data-src", img);
        el.style.backgroundImage = `url(${img})`;
        container.appendChild(el);
    });


    const lbx = document.querySelector(".lightbox");
    const cross = lbx.querySelector(".cross");
    const next = lbx.querySelector(".arrow.right");
    const prev = lbx.querySelector(".arrow.left");
    const card = document.querySelectorAll(".card");

    var cardIco = "";

    const showLightbox = (e) => {
        document.body.classList.add("light")
        cardIco = e.target;
        lbx.firstElementChild.style.backgroundImage = `url(${cardIco.getAttribute("data-src")})`;
    }
    const hideLightbox = () => {
        document.body.classList.remove("light");
    }
    const prevI = () => {
        cardIco = cardIco.previousSibling;
        lbx.firstElementChild.style.backgroundImage = `url(${cardIco.getAttribute("data-src")})`;
    }
    const nextI = () => {
        cardIco = cardIco.nextSibling;
        lbx.firstElementChild.style.backgroundImage = `url(${cardIco.getAttribute("data-src")})`;
    }

    card.forEach(card => {
        card.addEventListener("click", showLightbox);
    });
    cross.addEventListener("click", hideLightbox);
    document.body.addEventListener("keydown", (e) => {
        // console.log(e.key);
        if (e.key === "Escape") {
            hideLightbox();
        }
    })
    prev.addEventListener("click", prevI)
    next.addEventListener("click", nextI)
});