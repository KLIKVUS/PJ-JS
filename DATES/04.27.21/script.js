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
});