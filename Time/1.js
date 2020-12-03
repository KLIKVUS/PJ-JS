// Немного о времени

//      (YEAR-MONTH-DAY-HOUR-SECOND)
// let a = new Date()      // Выводит время
// alert(a)
// let b = new Date(2016, 6 ,4 ,10 ,30 ,0 )        // Вывод нужного времени
// alert(b)
// let c = new Date("1992-02-1")
// alert(c)

// getFullYear()
// 	Получить год (из 4 цифр)
// 	getMonth()
// 	Получить месяц, от 0 до 11.
// 	getDate()
// 	Получить число месяца, от 1 до 31.
// 	getHours(), getMinutes(), getSeconds(), getMilliseconds()

//-----------------------------------------------

// Задачка

// function out(date) {
//     let days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
//     return days[date.getDay()]
// }

// let date = new Date(2020, 7, 10)
// alert(out(date))

//-----------------------------------------------

// let date = new Date(160700741400 + 24*60*60*1000)
// alert(date)

// let date = new Date(1970, 1, 1)
// alert(date.getTime())

// let date = new Date()
// alert(date.getTimezoneOffset())

// alert(Date.now())       // Можно вывести дату не создавая новые переменны