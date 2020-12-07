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

        /* function perfect(number) {
                let result = 0;
                for (let i = 1; i < number; i++) {
                        if (number % i == 0) { result += i; }
                }
                if (result == number && result) console.log(`${number} is a perfect number.`)
                else console.log(`${number} is not a perfect number.`);
        }

        perfect(6);
        perfect(28);
        perfect(496);
        perfect(8128);
        perfect(99999); */


/* 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.  */
        

        /* function perfectInRange(minRange, maxRange) {
                for (let i=minRange; i<=maxRange; i++) {
                        perfect(i);
                }
        }
        
        function perfect (number) {
                let result = 0;
                for (let i = 1; i < number; i++) {
                        if (number % i == 0) { result += i; }
                }
                if (result == number && result) console.log(`${number} is a perfect number.`)
                //else console.log(`${number} is not a perfect number.`);
        }

        perfectInRange(0,1000);
        //perfectInRange(1000,10000); */


/* 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00. */

        /* function showTime(hours=0, minutes=0, seconds=0) {
                if (hours < 10) hours = "0" + hours;
                if (minutes < 10) minutes = "0" + minutes;
                if (seconds < 10) seconds = "0" + seconds; 
                console.log(`${hours}:${minutes}:${seconds}`);

        }

        showTime();
        showTime(12);
        showTime(7,30);
        showTime(16,45,3); */

/* 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах. */

        /* function inSeconds(hours=0, minutes=0, seconds=0) {
                console.log (`${hours*3600 + minutes*60 + seconds}`);
                return (hours*3600 + minutes*60 + seconds);
        }

        inSeconds();
        inSeconds(1,1,1);
        inSeconds(23,59,59); */

/* 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс». */


        /* function usualTime(seconds=0) {
                let hours = Math.trunc(seconds / 3600); 
                let minutes = Math.trunc((seconds - hours*3600)/60);
                seconds = seconds - hours*3600 - minutes*60;
                if (hours < 10) hours = "0" + hours;
                if (minutes < 10) minutes = "0" + minutes;
                if (seconds < 10) seconds = "0" + seconds; 
                console.log(`${hours}:${minutes}:${seconds}`);

        }

        usualTime();
        usualTime(62);
        usualTime(3598);
        usualTime(7271);
        usualTime(81573); */

/* 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс» */

        /* function differenceInTime(hoursBefore=0, minutesBefore=0, secondsBefore=0, hoursNow=0, minutesNow=0, secondsNow=0) {
                usualTime( inSeconds(hoursNow, minutesNow, secondsNow) - inSeconds(hoursBefore, minutesBefore, secondsBefore) );
        }

        function inSeconds(hours=0, minutes=0, seconds=0) {
                //console.log (`${hours*3600 + minutes*60 + seconds}`);
                return (hours*3600 + minutes*60 + seconds);
        }

        function usualTime(seconds=0) {
                let hours = Math.trunc(seconds / 3600); 
                let minutes = Math.trunc((seconds - hours*3600)/60);
                seconds = seconds - hours*3600 - minutes*60;
                if (hours < 10) hours = "0" + hours;
                if (minutes < 10) minutes = "0" + minutes;
                if (seconds < 10) seconds = "0" + seconds; 
                console.log(`${hours}:${minutes}:${seconds}`);
                
        }

        differenceInTime(1,2,3,6,7,8);
        differenceInTime();
        differenceInTime(4,12,34,12,4,56); */