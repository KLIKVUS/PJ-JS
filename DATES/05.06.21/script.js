window.addEventListener("load", (e) => {
    const list = document.getElementById("list");
    const search = document.querySelector("[type=\"search\"");

    const showList = (arr) => {
        let items = arr.map(el => `<li>${el}</li>`);
        list.innerHTML = items.join("---------------------------");
    }
    const searchList = (txt) => {
        let exp = new RegExp(txt, "i");
        // console.log(students[0], txt, exp.test(students[0]));
        // console.log(students[0], txt, students[0].search(exp));
        let newArr = students.filter(el => {
            if (exp.test(el)) return el;
        })
        showList(newArr);
    }

    search.addEventListener("input", e => {
        searchList(e.target.value);
    })
    showList(students);
})