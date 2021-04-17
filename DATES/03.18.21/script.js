const group = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21"
]
console.log(group.length);
group.sort((a, b) => Math.random() - 0.5);       // group.sort() Сортируем по алфовиту
console.log(group);

console.log("-----------------------------------------");

let team = [];
let teams = [];

let cnt = Math.floor(group.length / 3);

for (let i = 0; i < group.length; i++) {
    if (i % 3 === 0) {
        if (i !== 0) {
            teams.push(team);
        }
        team = [];
        team.push(group[i]);
    } else {
        team.push(group[i]);
    }
}
teams.push(team)
console.log(teams.length);
console.log(teams);

console.log("-----------------------------------------");

let main = document.body.firstElementChild.nextElementSibling;
teams.forEach(t => {
    let card = document.createElement("div")
    card.className = "team";
    for (let i = 0; i < t.length; i++) {
        card.innerHTML += `<div>${t[i]}</div>`
    }
    main.appendChild(card);
});

