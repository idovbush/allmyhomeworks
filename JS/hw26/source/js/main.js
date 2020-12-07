/* 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне. */

        /* let startRange = +prompt("Enter the first element of the range");
        let endRange = +prompt("Enter the last element of the range");
        let sum = 0;
        for (let i = startRange; i <= endRange; i++) {
                sum +=i;
        }
        console.log(`The sum of all elements in the range from ${startRange} to ${endRange} is ${sum}.`); */

/* 2. Запросить 2 числа и найти только наибольший общий делитель. */

        /* let firstNumber = +prompt("Enter the first number");
        let secondNumber = +prompt("Enter the second number");
        let gcd = 0;
        while (firstNumber != 0 && secondNumber != 0) {
        if (firstNumber > secondNumber) { firstNumber = firstNumber % secondNumber; }
        else { secondNumber = secondNumber % firstNumber; }
        }
        gcd = firstNumber + secondNumber;
        console.log(`The greatest common divisor is ${gcd}.`); */

/* 3. Запросить у пользователя число и вывести все делители этого числа. */
        
        /* let number = +prompt("Enter the number");
        let i = 1;         
        while (i <= number) {
                if (number % i == 0) {
                        console.log(i);
                }
                i++;
        }; */

/* 4. Определить количество цифр в введенном числе. */

        /* let number = +prompt("Enter the number");   
        let i = 1; 
        while (number / 10**i >= 1) { i++; };
        console.log(`This number ${number} has ${i} digits.`); */

/* 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем. */

        /* let negativeNumber = 0;
        let zeroNumber = 0;
        let positiveNumber = 0;
        let userNumber;
        for (let i = 1; i < 11; i++) {
                userNumber = +prompt(`Enter the ${i} number of 10`);
                if (userNumber == 0) {zeroNumber++;}
                else if (userNumber > 0) {positiveNumber++;}
                else if (userNumber < 0) {negativeNumber++;}
        }
        console.log(`You entered ${negativeNumber} negative numbers, ${positiveNumber} positive numbers, and ${zeroNumber} zeros.`); */

/* 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется. */

       /*  let firstNumber;
        let secondNumber;
        let sign;
        do {
                firstNumber = +prompt("Enter the first number");
                secondNumber = +prompt("Enter the second number");
                sign = +prompt("What action should be taken? 1 - addition, 2 - subtraction, 3 - multiplication, 4 - division.");
                switch (sign) {
                        case 1: console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`); break; 
                        case 2: console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`); break; 
                        case 3: console.log(`${firstNumber} x ${secondNumber} = ${firstNumber * secondNumber}`); break; 
                        case 4: console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`); break; 
                        default: console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
                }
        } while (confirm("Shall we continue?")); */
        
/* 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612). */

        /* let userNumber;
        let shift;
        let digitInUserNumber; 
        do {
                userNumber = +prompt("Enter the number");
                shift = +prompt("Indicate how many digits you need to shift the number");
                digitInUserNumber = 0; 
                while ((userNumber / (10**digitInUserNumber)) > 1) { digitInUserNumber++; };
                if (shift >= digitInUserNumber) {
                console.log(`Incorrect data entered. The shift is greater than or equal to the length of the number ( ${shift} >= ${digitInUserNumber} ). No shift is possible.`); 
                }
        } while (shift >= digitInUserNumber);        
        let shiftNumber = userNumber % 10**shift;
        let result = shiftNumber*(10**(digitInUserNumber - shift)) + Math.trunc(userNumber / 10 ** shift);
        console.log(`You entered number ${userNumber} and shift ${shift}. The result is ${result}.`); */

/* 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK. */

        /* let i = 1;
        let dayWeek;
        let question = true;
        do {
                switch (i) {
                        case 1: dayWeek = "Monday"; break;
                        case 2: dayWeek = "Tuesday"; break;
                        case 3: dayWeek = "Wednesday"; break;
                        case 4: dayWeek = "Thursday"; break;
                        case 5: dayWeek = "Friday"; break;
                        case 6: dayWeek = "Saturday"; break;
                        case 7: dayWeek = "Sunday"; break;
                        default: dayWeek = "Sunday";
                }
                question = confirm(`${dayWeek}. Do you want to see the next day?`);
                i++; 
                if (i == 8) { i = 1; };
        }
        while (question);   */      

/* 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10. */
        
        /* for (let i = 2; i < 10; i++) {  
                for (let j = 1; j < 11; j++ ) {
                        console.log(`${i} x ${j} = ${i * j}`);
                }        
        } */


/* 10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N. */

        /* alert("Come up with a number between 0 and 100");
        let check;
        let myVariant=50;
        let halfRange=50;
        do {
        check = +prompt(`Is your number 1) greater than ${myVariant}, 2) less than ${myVariant}, or 3) equal to ${myVariant}?`);
        halfRange = Math.round(halfRange/2);
        if (check == 1) { myVariant = myVariant + halfRange; }
        if (check == 2) { myVariant = myVariant - halfRange; }
        } while (check != 3);
        console.log(`Your number is ${myVariant}.`); */

