class Person {
    // Переменные (поля класса)
    // name;
    // age;
    // job;


    // constructor
    constructor(public name: string, public age: number, public job: string) {   
    }       // 1. Получать аргументы
            // 2. Полученные аргументы приравнять к своим полям



    // Методы/функции

    changeJob(job: string) {
       this.job = job
    }

    log() {
        console.log(this.name)
    }

}


const john = new Person('John', 20, 'Fullstack');

john.job === 'Fullstack'

john.changeJob('frontend')

john.job === 'frontend'

john.log()

// class = объект
// 1. Название с большой буквы
// Начиники бывают трёх видов:
// 1. Поля/переменные
// 2. Constructor