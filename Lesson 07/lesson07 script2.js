// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28


 function outer (num) {

    function inner (b) {
     return num += b
   }

   return inner;
}


const sum = outer(5)

console.log(sum(7)); 

console.log(sum(8)); 

console.log(sum(10)); 



