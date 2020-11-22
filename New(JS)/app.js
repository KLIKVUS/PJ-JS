// let yers = prompt("Введите свой возраст", "")
// if (yers >= 18) {
//     alert("Прошу проходите!")
// } else if (yers < 18) {
//     alert("А ну кыш от седа!!")
// } 

//-----------------------------------------------

// let age = prompt("Возраст гони!!","")
// let acess = (age < 18) ? true: false;

// if (age >= 18) {
//     acess = true
// } else {
//     acess = false
// }

// alert(acess)

//-----------------------------------------------

// function Name() {
//     alert("Hi")
// }

// Name()

//-----------------------------------------------

// let login = prompt("Введите логи", "")

// if (login == "User") {
//     let pas = prompt("Нужен пароль", "")
//     if (pas == "Я главный") {
//         alert("Дарова")
//     } else if (pas == "" || pas == null) {
//         alert("Отменено")
//     } else {
//         alert("Пароль не верный")
//     }
// } else if (login == "" || login == null) {
//     alert("Отмена")
// } else {
//     alert("Я вас не знаю!")
// }

//-----------------------------------------------

// let box = {
//     color: "black",
//     size: 5,
//     ves: 10
// }

// console.log(box.color)

// console.log(Object.keys(box))
// console.log(Object.values(box))
// console.log(Object.entries(box))

// box.color = "red"
// console.log(box.color)
// console.log(Object.entries(box))

//-----------------------------------------------

// let korp = {
//     sotrud1: 34243,
//     sotrud2: 65411,
//     sotrud3: 876334,
//     sotrud4: 1243646,
//     sotrud5: 38792348
// }

// console.log("sotrud6" in korp)

// delete korp.sotrud1

// console.log(korp)

//-----------------------------------------------

// let box = {
//     raz: 10,
//     dva: 43,
//     tri: 51,
//     chi: "90"
// }

// cena(box)

// function cena(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == "number") {
//             obj[key] *= 2
//         }
//     }
// }

//-----------------------------------------------