 /* 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».  */

    /* let name = prompt("What is your name?");
    console.log(`Hello, your name is ${name}!`); */


/* 2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу. */

    /* let born_year = +prompt("What year were you born?");
    const  this_year = 2020;
    let age =  this_year - born_year;
    console.log(`You are ${age}.`);  */

/* 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата. */

    /* let length = +prompt("Enter the length of the side of the square");
    let Perimeter =  length * 4;
    console.log(`Perimeter of a square ${Perimeter}.`); 
 */

/* 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности. */

    /* let radius = +prompt("Enter the radius of the circle");
    const PI = 3.1415;
    let square =   PI * radius ** 2;
    console.log(`Circle area ${square}.`); */


/* 5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя. */

    /* let distance = +prompt("Enter the distance between cities in km");
    let time = +prompt("Enter travel time in hours");
    let velosity =   Math.floor(  distance / time ) ;
    console.log(`Approximate travel speed ${velosity} km/h.`); */


/* 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе. */

    /* let dollars = +prompt("Enter the amount in dollars");
    const course = 0.84;
    let euros =   dollars * course ;
    console.log(`The amount in euros is ${euros}.`); */

/* 7. Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку. */

    /*  let size_flashdrive = +prompt("Enter the size of the flash drive in gigabytes");
    const file_size = 820;
    let number =   Math.floor( size_flashdrive * 1024 / file_size );
    console.log(`This flash drive will fit ${number} files of 820 megabytes.`);
 */

/* 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется. */

    /* let amount = +prompt("Enter the available amount of money");
    let price = +prompt("Enter the price of one chocolate");
    let number = Math.floor(  amount / price ) ;
    let change = amount % price ;
    console.log(`you can buy ${number} chocolates, change ${change}.`); */

/* 9. Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления). */

    /* let number = +prompt("Enter a three-digit number");
    let first = number % 10;
    let second = ((number - first)/10) % 10;
    let third = (number - first - second * 10) / 100;
    let inverted_number = first * 100 + second * 10 + third;
    console.log(`Inverted number ${inverted_number}`); */

/* 10. Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.  */

    /* let amount = +prompt("Enter the deposit amount");
    let term = 2;
    let interest_rate = 5 ;
    let interest = Math.floor(amount * (interest_rate / 100) * term / 12 * 100) / 100 ; // округляем до копеек
    console.log(`Accrued interest ${interest}`); */


/* 11. Работа с переменными
важность: 2
Объявите две переменные: admin и name.
Запишите строку "Джон" в переменную name.
Скопируйте значение из переменной name в admin.
Выведите на экран значение admin, используя функцию alert (должна показать «Джон»). */

    /*  let admin, name;
    name = "Джон";
    admin = name;
    alert(`${admin}`);
 */

/* 12. Шаблонные строки
важность: 5
Что выведет этот скрипт? */

    /*  let name = "Ilya";
    alert( `hello ${1}` ); // hello 1
    alert( `hello ${"name"}` ); // hello name
    alert( `hello ${name}` ); // hello Ilya */

/* 13. Исправьте сложение
Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
В чём ошибка? Исправьте её. Результат должен быть 3. */
    
    /* let a = +prompt("Первое число?", 1);
    let b = +prompt("Второе число?", 2);

    alert(a + b); // 12 */
