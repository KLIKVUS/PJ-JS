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
        plus.addEventListener("click", function(e) {
            step++;
            updateDate(step, block);
        })
        minus.addEventListener("click", function(e) {
            step--;
            updateDate(step, block);
        })
    }
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