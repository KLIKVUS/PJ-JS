let body = document.childNodes[1].lastChild
let paragraph = body.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling
/*
    document.childNodes возращает список элементов ( в первом случае - doctype и html )

    node.firstChild - возращяет первый дочерний узел
    node.lastChild - возращяет последний дочерний узел

    node.nextShibling - следующий брат
    node.previousShibling - предыдущий брат
*/
console.log(body, paragraph)

function getNumber(max = 10, min = 0) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getRGB() {
    return `RGB(${getNumber(256)}, ${getNumber(256)}, ${getNumber(256)})`
}

function lal() {
    paragraph.innerText = "YEP"
    paragraph.style.color = getRGB()
    // console.log("l")
}