/*1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...) */

        /* let status = "in the plans"
        let age = +prompt("How you old?");
        if (age < 2) status = "baby"
        else if ((age >= 2) && (age < 12)) status = "child"
        else if ((age >= 12) && (age < 18)) status = "teenager"
        else if ((age >= 18) && (age < 60)) status = "adult"
        else if (age >= 60 ) status = "pensioner";
        console.log(`You are a ${status}.`); */

/*2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д). */
        /* let symbol = "";
        let number = +prompt("Enter a number from 0 to 9");
        switch(number) {
                case 1: symbol = "!"; break; 
                case 2: symbol = "@"; break;
                case 3: symbol = "#"; break;
                case 4: symbol = "$"; break;
                case 5: symbol = "%"; break;
                case 6: symbol = "^"; break;
                case 7: symbol = "&"; break;
                case 8: symbol = "*"; break;
                case 9: symbol = "("; break;
                case 10: symbol = ")"; break;
        }  
        console.log(`Key ${number} corresponds to the symbol ${symbol}.`); */

/*3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
 */
        /* let number = +prompt("Please enter a three-digit number");
        let ones = number % 10;
        let tens = (number - ones) / 10 % 10;
        let hundreds = (number - tens * 10 - ones) / 100;
        if (ones == tens && tens == hundreds)
                { console.log(`All numbers ${ones}, ${tens}, ${hundreds} are the same`); }
        else if (ones == tens && tens != hundreds) 
                { console.log(`Ones ${ones} and tens ${tens} are the same`); }
        else if (ones != tens && tens == hundreds) 
                { console.log(`Tens ${tens} and hundreds ${hundreds} are the same`); }      
        else if (ones != tens && ones == hundreds) 
                { console.log(`Ones ${ones} and hundreds ${hundreds} are the same`); }       
        else console.log(`There are no identical numbers`); */
        

/*4. Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100. */

        /* let year = +prompt("Enter the year");
        if ( year % 400 == 0 || ( year % 4 == 0 && year % 100 != 0 ))
        { console.log(`This year ${year} is a leap year`); }
        else console.log("This is not a leap year"); */


/*5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
 */
        /* let number = +prompt("Enter a five-digit number");
        let firstDigit = number % 10;
        let secondDigit = (number - firstDigit) / 10 % 10;
        let thirdDigit = (number - secondDigit * 10 - firstDigit) / 100 % 10;
        let fourthDigit = (number - thirdDigit * 100 - secondDigit * 10 - firstDigit) / 1000 % 10;
        let fifthDigit = (number - fourthDigit * 1000 - thirdDigit * 100 - secondDigit * 10 - firstDigit) / 10000;
        if ( firstDigit == fifthDigit && secondDigit == fourthDigit ) { console.log(`This number ${number} is polyindrome`) }
        else console.log(`This number ${number} is not a polyindrome`); */

/*6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму. */

        /* let amount = +prompt("Enter the amount in dollars");
        let currency = +prompt("What currency should you convert dollars to? 1-EURO, 2-UAH, 3-AZN");
        const courseEUR = 0.83;
        const courseUAH = 28.57;
        const courseAZN = 1.7;
        switch (currency) {
                case 1 : { console.log(`You will receive ${amount * courseEUR} EURO.`); break;}
                case 2 : { console.log(`You will receive ${amount * courseUAH} UAH.`); break;}
                case 3 : { console.log(`You will receive ${amount * courseAZN} AZN.`); break;}
        }
 */

/*7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
 */

        /* let price = +prompt("Enter product price");
        let discount = 0;
        let amount = 0;
        if ( price >= 200 && price < 300 ) { discount = 0.03; }
        else if ( price >= 300 && price < 500 ) { discount = 0.05; }
        else if ( price >= 500 ) { discount = 0.07; }
        amount = Math.round(price * ( 1 - discount) * 100) / 100;
        console.log(`Product price ${price}. Discount purchase amount is ${amount}`); */


/*8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат. */

        /* let lenght = +prompt("Enter the circumference");
        let perimeter = +prompt("Enter the perimeter of the square");
        const PI = 3.1415;
        if (lenght / 2 / PI <= perimeter / 8 ) { console.log("This circle fits into this square") } //сравниваем радиус окружности и половину стороны квадрата
        else console.log("This circle does not fit into this square"); */


/*9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов. */
        
        /* let points = 0;
        let firstQuestion = +prompt("Who was the first cosmonaut? 1-Gagarin, 2-Leonov, 3-Armstrong.");
        let secondQuestion = +prompt("What is the deepest ocean? 1-Pacific, 2-Atlantic, 3-Indian.");
        let thirdQuestion = +prompt("When did World War II start? 1-1945, 2-1939, 3-1941.");
        if ( firstQuestion == 1 ) points += 2;
        if ( secondQuestion == 3 ) points += 2;
        if ( thirdQuestion == 2 ) points += 2;
        console.log(`Вы набрали ${points} балла(ов).`); */

/*10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.  */

        /* let leapYear = false;
        let day = +prompt("What's the date today?");
        let month = +prompt("What month is it?");
        let year = +prompt("What is the year now??");
        switch (month) {
                case 1: lastDay = 31; break;
                case 2: lastDay = 28; break;
                case 3: lastDay = 31; break;
                case 4: lastDay = 30; break;
                case 5: lastDay = 31; break;
                case 6: lastDay = 30; break;
                case 7: lastDay = 31; break;
                case 8: lastDay = 31; break;
                case 9: lastDay = 30; break;
                case 10: lastDay = 31; break;
                case 11: lastDay = 30; break;
                case 12: lastDay = 31; break;
        }
        if ( year % 400 == 0 || ( year % 4 == 0 && year % 100 != 0 )) { leapYear = true; };
        if (leapYear && month == 2) { lastDay = 29; }
        if ( day == 31 && month == 12 ) { console.log(`Today is ${day}/${month}/${year}. Tomorrow is 1/1/${++year}. Happy New Year! `);} 
        else if (day == lastDay ) { console.log(`Today is ${day}/${month}/${year}. Tomorrow is 01/${++month}/${year}. `);}
        else if (day != lastDay) { console.log(`Today is ${day}/${month}/${year}. Tomorrow is ${++day}/${month}/${year}. `);}  */