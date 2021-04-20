const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const daysOfWeek = [
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "St",
    "Su"
];

const today = new Date();
// console.log(today);
const currentYear = today.getFullYear();
// console.log(currentYear);
const currentMonth = monthNames[today.getMonth()];
// console.log(currentMonth);

var step = 0;
const showCalender = function() {
    const clndr = document.querySelector(".calendar");
    if (clndr) {
        clndr.remove();
    } else {
       const block = document.createElement("div");
       block.className = "calendar";
       block.innerText = `${currentMonth}, ${currentYear}`;
       document.body.appendChild(block);
   
       const plus = document.createElement("button");
       const minus = document.createElement("button");
       plus.innerText = "+";
       minus.innerText = "-";
       block.append(plus, minus);
       addGrid(block);
       plus.addEventListener("click", function(e) {
           step++;
           updateDate(step, block);
           setMonthGrid(step, new Date(currentYear, today.getMonth() + step).getFullYear);
       })
       minus.addEventListener("click", function(e) {
           step--;
           updateDate(step, block);
       })
    }
    setMonthGrid(today.getMonth, currentYear);
}

const updateDate = function(step, box) {
    newDate = new Date(currentYear, today.getMonth() + step);
    box.firstChild.nodeValue = monthNames[newDate.getMonth()] + ", " + newDate.getFullYear();
}

const setZeroNumber = function(number) {
    if ((number + "").length < 2) {
        return "0" + number;
    }
    return number;
}

const addGrid = function(parent) {
    const grid = document.createElement("div");
    grid.className = "monthGrid";
    let cnt = 42;
    for (let day of daysOfWeek) {
        grid.innerHTML += `<div class="cell day">${day}</div>`;
    }
    while (cnt--) {
        grid.innerHTML += "<div class=\"cell\"></div>"
    }
    parent.appendChild(grid);
}

const setMonthGrid = function(m, y) {
    let firstMounthDay = new Date(y, m);
    let lastMounthDay = new Date(y, m + 1, 0);
    console.log(firstMounthDay, lastMounthDay);
    let cells = document.querySelectorAll(".cell:not(.weekDay)");
    cells.forEach(c => c.innerText = "");
    for (
        let day = firstMounthDay.getDate(), start = firstMounthDay.getDay() === 0 ? 7 : firstMounthDay.getDay(), end = lastMounthDay.getDate();
        day <= end;
        day++
    ) {
        cells[start - 2 + day].innerText = new Date(y, m, day).getDate();
    }
}