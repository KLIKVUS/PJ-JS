window.addEventListener("load", (e) => {
    const board = document.querySelector(".board");
    const cInp = document.querySelector("[type='color\']");
    const sizeInp = document.querySelector("[type='range'");

    let isPaint = false,
        color = cInp.value,
        size = sizeInp.value;

    const setPoint = (x, y, size = 10, color = "black") => {
        let boardRect = board.getBoundingClientRect();
        if (x - size / 2 < boardRect.left) {
            x = boardRect.left
        } else if (x + size / 2 > boardRect.right) {
            x = boardRect.right;
        } else if (y - size / 2 < boardRect.top) {
            y = boardRect.top;
        } else if (y + size / 2 > boardRect.bottom) {
            y = boardRect.bottom
        }

        const point = document.createElement("div");

        // let x = e.clientX;
        // let y = e.clientY;
        // let size = 10;

        point.style = `
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background-color: ${color};
            position: fixed;
            top: ${y - size / 2}px;
            left: ${x - size / 2}px;
        `
        board.appendChild(point);
    }

    const paintHandler = (e) => {
        /*
            mousedown   mousemove   mouseup
        */
    //    console.log(board.getBoundingClientRect());

        switch(e.type) {
            case "mousedown":
                isPaint = true;
                setPoint(e.clientX, e.clientY, size, color)
                break;
            case "mousemove":
                if (isPaint) setPoint(e.clientX, e.clientY, size, color);
                break;
            case "mouseup":
                isPaint = false;
                break;
        }
    }

    board.addEventListener("mousedown", paintHandler);
    board.addEventListener("mousemove", paintHandler);
    board.addEventListener("mouseup", paintHandler);
    cInp.addEventListener("change", (e) => {color = e.target.value});
    sizeInp.addEventListener("change", (e) => {size = e.target.value});
})