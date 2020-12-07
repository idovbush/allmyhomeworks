"use strict";

/* 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне. */

/* let startRange = +prompt("Enter the first element of the range");
let endRange = +prompt("Enter the last element of the range");
let sum = 0;
for (let i = startRange; i < endRange + 1; i++) {
        sum +=i;
}
console.log(`The sum of all elements in the range from ${startRange} to ${endRange} is ${sum}.`); */

/* 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны. */

/* function compare (firstNumber, secondNumber) {
        let result;
        if (firstNumber < secondNumber) { result = -1;}
        else if (firstNumber > secondNumber) { result = 1;}
        else if (firstNumber == secondNumber) { result = 0}
        console.log(`You entered ${firstNumber} and ${secondNumber}. Comparison result is ${result}.`);
  }
  compare(3,4);  
compare(100,23);
compare(456,456); */

/* 2. Написать функцию, которая вычисляет факториал переданного ей числа. */

/*  function factorial (number) {
        let result = 1;
        for (let i = 2; i <= number; i++) {
                result *=i;
        }
        console.log(`The factorial of ${number} is ${result}.`);
}
  factorial(0);
factorial(1);
factorial(5); */

/* 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149. */

/*  function digitsToNumber(firstNumber=0, secondNumber=0, thirdNumber=0) {
         console.log(`You entered ${firstNumber}, ${secondNumber}, ${thirdNumber}. The result of the transformation is ${firstNumber*100 + secondNumber*10 + thirdNumber}.`);
         
 } 
   digitsToNumber(1,3,7);
 digitsToNumber(0,0,0);
 digitsToNumber(0,3,0);
 digitsToNumber(6); */

/* 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата. */

/*  function square(lenght, width) {
        width = width ?? lenght;
        if (lenght == width) { console.log(`The area of ​​a square with side ${lenght} is ${lenght*width}.`); } 
        else { console.log(`The area of ​​a rectangle with length ${lenght} and width ${width} is ${lenght*width}.`); } 
}
  square(4,5);
square(7);
square(0,67); */

/* 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей. */
function perfect(number) {
  var result = 0;

  for (var i = 1; i < number; i++) {
    if (number % i == 0) {
      result += i;
    }
  }

  if (result == number) console.log("".concat(number, " is a perfect number."));else console.log("".concat(number, " is not a perfect number."));
}

perfect(6);
perfect(28);
perfect(496);
perfect(8128);
perfect(99999);
/* 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.  */

/* 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00. */

/* 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах. */

/* 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс». */

/* 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс» */