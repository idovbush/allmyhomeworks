
// На forEach
// Для решения задач данного блока вам понадобятся следующие методы: forEach.
//  Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел. Показать решение.

    // let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    // function squareValue(array) {
    //   let newArray = [];
    //   array.forEach(function(item) {newArray.push(item**2); });
    //   return newArray;  
    // }
    
    // console.log(squareValue(myArray));
    // console.log(myArray);
    

//  Дан массив с числами. Найдите сумму этих чисел. Показать решение.

    // let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; 
    
    // function sumItem(array) {
    //   let sum = 0;
    //   array.forEach(item => sum += item)
    //   return sum; 
    // }

    // console.log(sumItem(myArray));






// На map
// Для решения задач данного блока вам понадобятся следующие методы: map.
//  Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел. Показать решение.

    // let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    // function squareValue(array) {
    //   return array.map(item => item**2);
    // }
    
    // console.log(squareValue(myArray));
    

//  На every, some
// Для решения задач данного блока вам понадобятся следующие методы: every, some.
//  Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля. Показать решение.

    // let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    // let testArray = [1, 2, 3];

    // function checkItem(array) {
    //   return array.every(item => item>0);
    // }
    
    // console.log(checkItem(myArray));
    // console.log(checkItem(testArray));

//  Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы. Показать решение.

      // let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
      // let testArray = [1, 2, 3, -1, -2, 100];

      // function checkItem(array) {
      //   return array.some(item => item<0);
      // }
      
      // console.log(checkItem(myArray));
      // console.log(checkItem(testArray));



//  На filter
// Для решения задач данного блока вам понадобятся следующие методы: filter.
//  Дан массив с числами. Оставьте в нем только отрицательные числа. Показать решение.

      // let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
      // let testArray = [1, 2, 3, -1, -2, 100];

      // function onlyNegative(array) {
      //   return array.filter(item => item<0);
      // }
      
      // console.log(onlyNegative(myArray));
      // console.log(onlyNegative(testArray));


//  Дан массив с числами. Оставьте в нем только четные числа. Показать решение.

      // let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
      // let testArray = [1, 2, 3, -1, -2, 100];

      // function onlyEven(array) {
      //   return array.filter(item => item % 2 == 0);
      // }
      
      // console.log(onlyEven(myArray));
      // console.log(onlyEven(testArray));


//  Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов. Показать решение.

      // let myArray = ['cat', 'pig', 'dog', 'elefant', 'tiger', 'squirrel'];
      
      // function longerFive(array) {
      //   return array.filter(item => item.length > 5);
      // }
      
      // console.log(longerFive(myArray));
      

//  Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы. Скрыть решение.

      // let myArray = [[1, 2, 3], 4, 5, [6, 7], 8, 9, 0];
      // let testArray = [1, 2, 3, -1, -2, 100];

      // function onlyArray(array) {
      //       return array.filter(item => Array.isArray(item)?item:0 );
      // }
      
      // console.log(onlyArray(myArray));
      // console.log(onlyArray(testArray));


//  Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве. Показать решение.

      // let myArray = [[1, 2, 3], 4, 5, [6, 7], 8, 9, 0];
      // let testArray = [1, 2, 3, -1, -2, 100];

      // function countNegative(array) {
      //       let count = 0;
      //       array.filter(item => item<0?count++:count );
      //       return count;
      // }
      
      // console.log(countNegative(myArray));
      // console.log(countNegative(testArray));



//  На reduce, reduceRight
// Для решения задач данного блока вам понадобятся следующие методы: reduce, reduceRight.
//  Дан массив с числами. Найдите сумму этих чисел. Показать решение.

      // let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
      // let testArray = [1, 2, 3, -1, -2, 100];

      // function sumArr(array) {
      //       let sumItem = array.reduce((sum = 0, item) => sum +=item );
      //       return sumItem;
      // }
      
      // console.log(sumArr(myArray));
      // console.log(sumArr(testArray));


//  Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0. Показать решение.




//  Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0. Показать решение.
//  Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. Показать решение.
//  Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти. Показать решение.


//  Закрепление
//  Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень и этих чисел. Показать решение.





/* 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный. */




/* 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

Распечатка чека на экран;
Подсчет общей суммы покупки;
Получение самой дорогой покупки в чеке;
Подсчет средней стоимости одного товара в чеке. */


/* 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве. */
  
   /*  let myText =  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nam natus non deserunt sint praesentium explicabo voluptates quam excepturi, placeat odio asperiores hic, enim ipsam et magnam nostrum omnis saepe.";

    let myArrayOfStyles = [ {"font-family": "Verdana"},
                          {"font-size": 24},
                          {"font-weight": 700},
                          {"text-transform": "uppercase"},
                          {"letter-spacing": 2},
                          {color: "darkblue"}
                          ];
        
    function stylesForText(arrayOfStyles, text) {
          let mystyle = "color: red;";
          //arrayOfStyles.join(';');
          document.write('<p style ="'+ mystyle +'">'+ text +'</p>');
          console.log(mystyle);
        }

     stylesForText(myArrayOfStyles, myText);  */  
    


/* 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

Вывод на экран всех аудиторий;
Вывод на экран аудиторий для указанного факультета;
Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
Функция сортировки аудиторий по количеству мест;
Функция сортировки аудиторий по названию (по алфавиту). */