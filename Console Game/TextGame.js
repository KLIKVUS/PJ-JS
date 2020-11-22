// История - Нафиг она нам нужна ?

// Взаимодействе через клавиатуру

const { clear } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

clear();

console.log("Зачем ты запустил this tresh ?!");

// Подтверждение запуска
scen1();
function scen1() {
    rl.question("Ты хочешь начать игру ? \n Выбирай Да или Нет: ", (answer) => {
        if (answer == "Да" || answer == "да" || answer == "Da" || answer == "da") {
            clear();
            
            // Сцена с выбором преметов
            scen2();
            function scen2() {
                rl.question("Какой стаф будем брать с собой? \n Могу предложить: 1) Сосулька 2) Мармилад 3) Тупой нож \n Твой ответ: ", (answer) => {

                    // Предмет 1
                    if (answer == 1) {
                        let stuf = "Сосулька";
                        console.log("-------------------------");

                        //  Квест 1 ( Предмет 1 )
                        rl.question("Перед тобой две двери! Одна дверь с рисунком 1)Пони другая с рисунком 2)Единорога, какую выбериш ?? \n Твой ответ: ", (answer) => {
                            if (answer == 1 || answer == "Пони" || answer == "пони") {
                                console.log("-------------------------");
                                rl.question("После того как ты защел в дверь переде тобой стоял пони и его собратья! \n В конце комнаты можно было увидеть дверь, но пони промолвил: 'У тебя есть то, что мне нужно!!' \n Ты можешь 1) Дать сосульку пони 2) Добежать до двери. \n Твой ответ: ", (answer) => {
                                    if (answer == 1 || answer == "Дать сосульку пони") {
                                        console.log("-------------------------");
                                        console.log("Пони взял принял твой дар, после чего превратился в единорога и пронзил тебя своим рогом!! \n Игра окончена ;(")
                                        restart();
                                        function restart() {
                                            console.log("-------------------------");
                                            rl.question("Перезапустить игру? ( Да/Da; Выход/Exit ) \n Твой ответ: ", (answer) => {
                                                if (answer == "Да" || answer == "да" || answer == "Da" || answer == "da" ) {
                                                    clear();
                                                    scen2();
                                                } else if (answer == "Выход" || answer == "выход" || answer == "Exit" || answer == "exit" ) {
                                                    clear();
                                                    console.log("До встречи");
                                                    rl.close();
                                                } else {
                                                    console.log("Чет я не понял, давай еще разок!")
                                                    restart();
                                                }
                                            })
                                        }
                                    }
                                })
                            } else if (answer == 2 || answer == "Единорог" || answer == "единорог") {
                            
                            // Ошибка ( Квест 1 )
                            } else {
                                console.log("-------------------------");
                                rl.question("Чет я не понял. \n Перезапустить вопрос? ( Да/Da; Выход/Exit ) \n Твой ответ: ", (answer) => {
                                    if (answer == "Да" || answer == "да" || answer == "Da" || answer == "da" ) {
                                        clear();
                                        scen2();
                                    } else if (answer == "Выход" || answer == "выход" || answer == "Exit" || answer == "exit" ) {
                                        clear();
                                        console.log("До встречи");
                                        rl.close();
                                    } else {
                                        clear();
                                        rl.question("Чет я не понял, давай еще разок!", (answer) => {
                                            scen2();
                                        })
                                    }
                                })
                            }
                        });

                    // Педмет 2
                    } else if (answer == 2) {
                        let stuf = "Мармилад";
                        console.log("-------------------------");

                        // Квест 2 (Предмет 2)
                        rl.question("", (answer) => {
                            
                        });

                    // Предмет 3
                    } else if (answer == 3) {
                        let stuf = "Тупой нож";
                        console.log("-------------------------")

                        // Квест 3 ( Предмет 3 )
                        rl.question("", (answer) => {
                            
                        });

                    // Ошибка и перезапуск сцэны
                    } else {
                        console.log("-------------------------")
                        console.log("Чет тут ошибка");

                        // Перезагрузочка
                        error2();
                        function error2() {
                            rl.question("Перезапустить вопрос? ( Да/Da; Выход/Exit ) \n Твой ответ: ", (answer) => {
                                if (answer == "Да" || answer == "да" || answer == "Da" || answer == "da" ) {
                                    clear();
                                    scen2();
                                } else if (answer == "Выход" || answer == "выход" || answer == "Exit" || answer == "exit" ) {
                                    clear();
                                    console.log("До встречи");
                                    rl.close();
                                } else {
                                    clear();
                                    console.log("Чет я не понял, давай еще разок!")
                                    console.log("-------------------------");
                                    error2();
                                }
                            })
                        }
                    }
                })
            }
        
        // Выход
        } else if (answer == "Нет" || answer == "Net" || answer == "нет" || answer == "net") {
            console.log("Покеда");
            rl.close();
        } else {
            console.log("-------------------------");
            console.log("Чет тут ошибка");

            // Перезагрузочка
            rl.question("Перезапустить вапрос? ( Да/Da; Выход/Exit ) \n Твой ответ: ", (answer) => {
                if (answer == "Да" || answer == "да" || answer == "Da" || answer == "da" ) {
                    clear();
                    scen1();
                } else if (answer == "Выход" || answer == "выход" || answer == "Exit" || answer == "exit") {
                    clear();
                    console.log("До встречи");
                    rl.close();
                } else {
                    clear();
                    console.log("Чет я не понял, давай еще разок!");
                }
            })
        }
    });
}

// Итоговый счет / Реиграбельность

// Мусор
// console.log("------------------------- \n Твой стаф: ", stuf)
// rl.question("", (answer) => {

// })