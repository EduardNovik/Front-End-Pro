// Створити сутність людини:
// ім'я
// вік
// Метод виведення даних

// Створити сутність автомобіля:
// Характеристики автомобіля окремими властивостями
// Методи:
// Виведення на екран даних про цей автомобіль
// Привласнення цього автомобіля власнику (записати в автомобіль об'єкт власника)

// Всі дані про людину та про автомобіль отримувати від користувача. 
// Реалізувати необхідні перевірки на коректність введення (порожні поля, вік > 18 для людини та ін. за необхідності)
// Максимально використовувати функції



class Person {
  name;
  surname;
  age;
  yearOfBirth;

  constructor(name, surname, age = 18) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.yearOfBirth = new Date().getFullYear() - age;
  }
}

class Car {
  brand;
  model;
  carProducedInYear;
  owner = [];

  constructor(brand, model, carProducedInYear) {
    this.brand = brand;
    this.model = model;
    this.carProducedInYear = carProducedInYear;
  }

  pushCarOwnerToMassive(person) {
      if (person.age >= 18) {
        this.owner.push(person);
    }
  }

  getCarAndOwnerInfo() {
    console.log("\nThe car owners:\n");
    this.owner.forEach((person) => console.log(`Name: ${person.name}, Surname: ${person.surname}, Age: ${person.age}, Year of birth: ${person.yearOfBirth}`))
    console.log("\nThe car description:\n");
    console.log(`Brand of the car: ${this.brand}; Model of the car: ${this.model}; The car was produced in: ${this.carProducedInYear}`)
    console.log("-------------------------------------------------------------------------------------");
  }

  getBrandOfAuto() {
    return console.log(`The car brand is: ${this.brand}`);
  }

  getModelOfAuto() {
    return console.log(`The car model is: ${this.model}`);
  }

  getProducedInYear() {
    return console.log(`The car produced in year: ${this.carProducedInYear}`);
  }

  getOwnerOfAuto() {
    console.log("\nThe car owners:\n");
    this.owner.forEach((person) => console.log(`Name: ${person.name}, Surname: ${person.surname}, Age: ${person.age}, Year of birth: ${person.yearOfBirth}`))
  }
}

const person = new Person("Eduard", "Novik", 30)
const person2 = new Person("Anna", "Novik", 27)

const person3 = new Person("John", "Norton", 32)
const person4 = new Person("Kate", "Norton", 29)



const car = new Car("Tesla", "Model3", 2018);
car.pushCarOwnerToMassive(person);
car.pushCarOwnerToMassive(person2);
car.getCarAndOwnerInfo()

const car2 = new Car("BMW", "X5", 2020);
car2.pushCarOwnerToMassive(person3);
car2.pushCarOwnerToMassive(person4);
car2.getCarAndOwnerInfo()



// car.getBrandOfAuto();
// car.getModelOfAuto();
// car.getProducedInYear();
// car.getOwnerOfAuto();



