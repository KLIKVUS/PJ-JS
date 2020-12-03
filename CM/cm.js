//      №1

// let number = 0
// while (number <= 100){
//     let num = prompt("Введите число болше 100: ", 0)
//     number = num
// }

//      №2

// let Person = {
//     worker1: 4577,
//     worker2: 35789,
//     worker3: 457897,
//     worker4: 678897,
//     worker5: 463346
// }

// var sum = 0

// for (let i in Person) {
//     sum = sum + Person[i]
// }

// alert(sum)

//      №3

// var styles = ["Джаз", "Блюз"]
// styles.push("Рок-н-ролл")
// delete styles[0]
// // alert(styles)
// styles[0] = ("Регги,Рэп")
// alert(styles)

//      №4

// let a = undefined || null && 3 || 4
// alert(a)

// // Пояснение: Выбирая из undefined ИЛИ null он выбирает null. При выборе 3 или 4 выбирает 3, но она съедается null и она выводит 4

//      №5

log()
function log() {
    let login = prompt("Введите логин: ", "login")

    if (login == "Админ" || login == "админ"){
        let pas = prompt("Введите пароль: ", "")
        if (pas == "Я главный") {
            alert("HELLO")
        } else if (pas == undefined) {
            alert("Отмена")
            log()
        } else {
            alert("Не верный пароль")
            log()
        }
    } else if (login == undefined) {
        alert("Отмена")
        log()
    } else {
        alert("Не верный логин")
        log()
    }
}