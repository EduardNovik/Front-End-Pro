// Створити та описати сутності Багатоквартирного будинку, квартири, мешканця.

// Додати можливість створювати нові будинки на певну кількість квартир.

// Не обмежувати кількість мешканців у квартирі



class House {
  numberOfHouse;
  numberOfFloors;
  numberOfHousesInTheStreet;
  numberOfApartmentsInHouse = 0;
  apartmentsInHouse = [];

  constructor(numberOfHouse, numberOfFloors, numberOfHousesInTheStreet) {
    this.numberOfHouse = numberOfHouse;
    this.numberOfFloors = numberOfFloors;
    this.numberOfHousesInTheStreet = numberOfHousesInTheStreet;
  }

  addApartment(apartment) {
    if (this.numberOfHouse > 0 || this.numberOfHouse <= 200) {
    this.apartmentsInHouse.push(apartment);
    this.numberOfApartmentsInHouse++;
    }
  }

  getInfoAboutHouse(){
    console.log("\nHouse:\n");
    console.log(`Number of the house: ${this.numberOfHouse}, Number of floors in house: ${this.numberOfFloors}, Number of houses on the street: ${this.numberOfHousesInTheStreet}`);
    console.log("\nWho lives in the Apartment:\n");
    console.log(this.apartmentsInHouse);
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


const house = new House(2, 2, 200);
const house2 = new House(1, 1, 200);


house.addApartment(apartment);
house.addApartment(apartment2);
house.getInfoAboutHouse()



house2.addApartment(apartment3);
house2.getInfoAboutHouse()

