// Материал с урока

// let persone = {
//     firstName: "Vlad",
//     lastName: "Savenko",
//     age: 18,
//     rost: 180,
//     mass: 200,
//     job: "not work"
// }

// persone.firstName = "Sasha"

// persone.Ff = persone.age + persone.rost + persone.mass

// delete persone.job

// console.log(persone, "Немного фигни о персоне -", persone.age + persone.rost, "Больше фигни о персоне -", persone.Ff)

// persone["raz dva"] = 20

// console.log(persone)

//-----------------------------------------------

// const obj = [
//     ["name", "vlad"],
//     ["age", "18"],
//     ["job", "driver"]
// ]

// const obj1 = {
//     name: "vlad",
//     age: 18,
//     job: "driver",
//     skills: job = {
//         driving: "good",
//         polite: ss = {
//             Smile: true,
//             Funny: true
//         }
//     }
// }

// obj1.skills["programing"] = "C#"
// obj1.skills.polite.Smile = false

// console.log(obj1)

// // console.log(Object.fromEntries(obj))
// // console.log(Object.entries(obj1))

// const map = new Map(obj)
// map.set("skills", ["html", "css", "js"])
// console.log(map)

//-----------------------------------------------

// const obj = [
//     ["name", "vlad"],
//     ["lastName", "fragud"],
//     ["age", "18"],
//     ["job", "driver"]
// ]

// const map = new Map(obj)
// .set("job","driver")
// .set("car","bmv")
// .set("awd","ehth")
// map.delete("job")
// console.log(map)

// console.log(map.size)

// for (let value of map.values()){
//     console.log(value)
// }

// console.log("-- -- --")

// for (let key of map.keys()){
//     console.log(key)
// }

// console.log("-- -- --")

// map.forEach((val, key, m) => { 
//     console.log(val, key)
// })

// const array = Array.from(map)
// console.log(array)

//-----------------------------------------------

// const set = new Set([1,2,3,3,3,3,4,55,5,5,5,5,5,6,7,7,7,7])
// console.log(set)

// console.log(set.entries())

//-----------------------------------------------




// Задание на уроке

// let Persone = {
//     Steave: 150,
//     Jon: 160,
//     Alex: 220,
//     Sasha: 330
// }

// Persone.money = (Persone.Steave + Persone.Jon + Persone.Alex + Persone.Sasha)

// console.log(Persone.Steave, Persone.Jon, Persone.Alex, Persone.Sasha, Persone.money)

//-----------------------------------------------

// const obj = [
//     ["name", "vlad"],
//     ["lastName", "fragud"],
//     ["age", "18"],
//     ["job", "driver"]
// ]

// console.log(Object.fromEntries(obj))

// function LsName() {
//     let a = Object.fromEntries(obj)
//     console.log(a.name, a.lastName)
// }

// function age() {
//     let b = Object.fromEntries(obj)
//     b.age = 20
//     console.log(b.age)
// }

// function job() {
//     let c = Object.fromEntries(obj)
//     c.job += ["1", "2", "3", "4"]
//     console.log(c.job)
// }

// LsName()
// age()
// job()

//-----------------------------------------------