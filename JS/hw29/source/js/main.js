/* 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

Функция для вывода на экран информации об автомобиле;

Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
 */

/*   let myCar = { company: "Toyota", 
              model: "Camry", 
              yearOfManufacture: 2016, 
              averageSpeed: 120 };

  function printInfoCar (car) {
    for (let key in car) {
    document.write('<p>',key,': ',car[key],'</p>');
    }
    //console.log(car);
  }           

  printInfoCar(myCar);

  function travelTime(car, distance) {
    let hours=0;
    let minutes=0;
    hours = Math.trunc(distance /  car.averageSpeed)  + Math.trunc((distance /  car.averageSpeed)/4) ;
    minutes = Math.trunc((Math.round(distance / car.averageSpeed*100)/100)%1*60);
    document.write('<p>','Distance ',distance,' the car will travel in ',hours,' h ',minutes,' m.','</p>');
  }

  travelTime(myCar, 180);
  travelTime(myCar, 1000);
            
 */

/* 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

Функция сложения 2-х объектов-дробей;
Функция вычитания 2-х объектов-дробей;
Функция умножения 2-х объектов-дробей;
Функция деления 2-х объектов-дробей;
Функция сокращения объекта-дроби.
 */


  /*   let fraction1 = {numerator: 9 ,
                    denominator: 25};
    let fraction2 = {numerator: 4 ,
                    denominator: 9};
    let fraction3 = {numerator: 9 ,
                    denominator: 81};
    let fraction4 = {numerator: 2 ,
                    denominator: 2};
    let fraction5 = {numerator: 36 ,
                    denominator: 120};
                      

    function printFruction(fraction) {
          return  fraction.numerator + "/" + fraction.denominator;
    }                  

    //printFruction(fraction1);
    //printFruction(fraction2);


    //Функция сложения 2-х объектов-дробей;
    function sumFractions(firstFraction, secondFraction) {
      let result = {};
      result.denominator = firstFraction.denominator * secondFraction.denominator;
      result.numerator = firstFraction.numerator * secondFraction.denominator + secondFraction.numerator * firstFraction.denominator;
      console.log(result);
      document.write('<p>' + printFruction(firstFraction) + ' + ' + printFruction(secondFraction) + ' = ' + printFruction(result) + '</p>');
    }

    sumFractions(fraction1, fraction2);

    //Функция вычитания 2-х объектов-дробей;
    function subFractions(firstFraction, secondFraction) {
      let result = {};
      result.denominator = firstFraction.denominator * secondFraction.denominator;
      result.numerator = firstFraction.numerator * secondFraction.denominator - secondFraction.numerator * firstFraction.denominator;
      console.log(result);
      document.write('<p>' + printFruction(firstFraction) + ' - ' + printFruction(secondFraction) + ' = ' + printFruction(result) + '</p>');
    }

    subFractions(fraction1, fraction2);

    //Функция умножения 2-х объектов-дробей;
    function multFractions(firstFraction, secondFraction) {
      let result = {};
      result.denominator = firstFraction.denominator * secondFraction.denominator;
      result.numerator = firstFraction.numerator * secondFraction.numerator;
      console.log(result);
      document.write('<p>' + printFruction(firstFraction) + ' * ' + printFruction(secondFraction) + ' = ' + printFruction(result) + '</p>');
    }

    multFractions(fraction1, fraction2);

    //Функция деления 2-х объектов-дробей;
    function divFractions(firstFraction, secondFraction) {
      let result = {};
      result.denominator = firstFraction.denominator * secondFraction.numerator;
      result.numerator = firstFraction.numerator * secondFraction.denominator;
      console.log(result);
      document.write('<p>' + printFruction(firstFraction) + ' / ' + printFruction(secondFraction) + ' = ' + printFruction(result) + '</p>');
    }

    divFractions(fraction1, fraction2);

    //Функция сокращения объекта-дроби.
    function reducFraction(fraction) {
      let result = {};
      let min = 1;
      if (fraction.denominator == fraction.numerator) result = {numerator: 1 ,
        denominator: 1};
      else { if (fraction.denominator < fraction.numerator) min = fraction.denominator
      else if (fraction.denominator > fraction.numerator) min = fraction.numerator
      do
      if (fraction.denominator % min == 0 && fraction.numerator % min == 0)
      { result.numerator = fraction.numerator / min;
        result.denominator = fraction.denominator / min; 
        break;
      }
      else min--; 
      while (min > 0);
      }
      document.write('<p>'+ printFruction(fraction) + ' = ' + printFruction(result) + '</p>');
    }

    reducFraction(fraction3);
    reducFraction(fraction4);
    reducFraction(fraction5);

 */


/* 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

Функция вывода времени на экран;
Функция изменения времени на переданное количество секунд;
Функция изменения времени на переданное количество минут;
Функция изменения времени на переданное количество часов. 

Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
 */

    
