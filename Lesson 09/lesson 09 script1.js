// Створити та описати сутності Багатоквартирного будинку, квартири, мешканця.

// Додати можливість створювати нові будинки на певну кількість квартир.

// Не обмежувати кількість мешканців у квартирі




// клас Будинок
// властивості
// масив квартир, який при створенні пустий
// максимальна кількість квартир
// методи
// конструктор, який приймає один параметр: максимальну кількість квартир
// додати квартиру - метод повинен приймати екземпляр класу Квартира, 
// перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, 
// і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення



class House {
  maxNumberOfApartmentsInHouse;
  numberOfOccupiedApartments = 0;
  apartmentsInHouse = [];

  constructor(maxNumberOfApartmentsInHouse) {
    this.maxNumberOfApartmentsInHouse = maxNumberOfApartmentsInHouse;
  }

  addApartment(apartment) {
    if (this.numberOfOccupiedApartments < this.maxNumberOfApartmentsInHouse) {
    this.apartmentsInHouse.push(apartment);
    this.numberOfOccupiedApartments++;
    }
    else{
      console.log(`\nYou can't add more apartments to the house. The maximum amount of apartments is: ${this.maxNumberOfApartmentsInHouse}
      \n----------------------------------------------------------------------------------------------`);
    }
  }

  getInfoAboutHouse(){
    console.log("\nHouse:\n");
    console.log(`The maximum number of apartments in the house: ${this.maxNumberOfApartmentsInHouse} \nNumber of occupied apartments: ${this.numberOfOccupiedApartments}`);
    console.log("\nWho live's in the apartment:");
    this.apartmentsInHouse.forEach((elem) => {
    console.log(`\nNumber of the apartment: ${elem.numberOfFlat}\n`)
    elem.apartmentResidents.forEach(item => console.log(`Name: ${item.name}, Surname: ${item.surname}, Age: ${item.age}`))
  })
    console.log("-------------------------------------------------------------------------------------");
  }
}

class Apartment {
  numberOfFlat;
  apartmentResidents = [];

  constructor(numberOfFlat) {
    this.numberOfFlat = numberOfFlat;
  }

  addPerson(people) {
    this.apartmentResidents.push(people);
    return this.apartmentResidents;
  }
}

class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}





const people = new Person("ED", "Novik", 30)
const people2 = new Person("Anna", "Novik", 31)
const people3 = new Person("John", "Novik", 10)


const people4 = new Person("John", "Norton", 28)
const people5 = new Person("Kate", "Norton", 25)


const people6 = new Person("Alise", "Cane", 38)
const people7 = new Person("James", "Cane", 35)



const apartment = new Apartment(39);
apartment.addPerson(people);
apartment.addPerson(people2);
apartment.addPerson(people3);

const apartment2 = new Apartment(42);
apartment2.addPerson(people4);
apartment2.addPerson(people5);


const apartment3 = new Apartment(52);
apartment3.addPerson(people6);
apartment3.addPerson(people7);

const apartment4 = new Apartment(11);
apartment4.addPerson(people6);
apartment4.addPerson(people7);


const house = new House(2);
const house2 = new House(1);


house.addApartment(apartment);
house.addApartment(apartment2);
house.addApartment(apartment4)
house.getInfoAboutHouse()



house2.addApartment(apartment3);
house2.getInfoAboutHouse()

