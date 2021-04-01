let table = document.body.firstElementChild.firstElementChild
console.log(table.hasChildNodes())

if (table.hasChildNodes()) {
    console.log(table.firstChild.nodeName)
}

let cnt = 3
while(cnt--) {
    let tr = document.createElement("tr")
    table.appendChild(tr)
    let n = 5

    while(n--) {
        if (cnt === 2) {
            let th = document.createElement("th")
            tr.appendChild(th)
            th.innerText = "capt" + n
        } else {
            let td = document.createElement("td")
            tr.appendChild(td)
            td.innerText = n
        }
    
        if (cnt == 0) {
            console.log("While end")
        }
    }
}