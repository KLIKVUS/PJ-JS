let items = document.getElementsByClassName("caption");
items = Array.from(items)
items.forEach(item => {
    item.onclick = e => {
        e.target.classList.toggle("active");
        let bro = e.target.nextElementSibling;
        if (e.target.classList.contains("active")) {
            bro.style.height = bro.scrollHeight + "px";
        } else {
            bro.style.height = 0 + "px";
        }
    }
});

// classList - список всех классов элементов в виде массива
    /*
        Методы classList:
        .add("class") - добавить элементу еще один класс
        .remove("class") - удалить класс из элементов
        .contains("class") - прповеряет наличие класса в теге
        .toggle("class") - добавляет класс, елси его нет или удаляет класс, если он есть
    */