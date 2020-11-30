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
/*6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму. */

/*7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
 */
/*8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат. */

/*9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов. */

/*10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.  */