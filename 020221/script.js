const setNumber = function() {
    let number = getNumber(100, 1)
    console.log(number)
    /*
      firstElementChild - первый дочерний элемент
      lastElementChild - последний дочерний элемент
      nextElementSiling - младший брат элемента
      previousElementSibling - старший брат элемента
    */
    let tbl = document.body.lastElementChild.firstElementChild

    let rowsCount = tbl.childNodes.length
    if (rowsCount > 0) {
        let row = tbl.childNodes[rowsCount - 1]
        if (rowsCount < 4) {
            row.innerHTML += `<td>${number}</td>`
        } else {
            tbl.innerHTML += `<tr><td>${number}</td></tr>`
        }
    } else {
        tbl.innerHTML = `<tr><td>${number}</td></tr>`
    }
    console.log(tbl.childNodes)
}