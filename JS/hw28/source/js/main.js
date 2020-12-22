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

//   let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//   let testArray = [1, 2, 3, -1, -2, 100];

//   function sumArr(array) {
//         let sumItem = array.reduce((sum, item) => sum += item, 0 );
//         return sumItem;
//   }

//   console.log(sumArr(myArray));
//   console.log(sumArr(testArray));

//  Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0. Показать решение.

// let myArray = [1, 2, 3, 4, 5, 0, 7, 8, 9, 0];
// let testArray = [1, 2, 3, -1, -2, 0];

// function sumArr(array) {
//     let newArr = [...array];
//     return newArr.reduce( function( sum, item ) {
//         if ( item != 0 ) { return sum += item; }
//         else { newArr.splice(0);  return sum; }
//     }, 0 );
// }

// console.log(sumArr(myArray));
// console.log(sumArr(testArray));

//  Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0. Показать решение.

// let myArray = [1, 2, 3, 4, 5, 0, 7, 8, 9];
// let testArray = [1, 2, 3, -1, -2, 0];

// function sumArrBack(array) {
//     let newArr = [...array];
//     return newArr.reduceRight( function( sum, item ) {
//         if ( item != 0 ) { return sum += item; }
//         else { newArr.splice(0);  return sum; }
//     }, 0 );
// }

// console.log(sumArrBack(myArray));
// console.log(sumArrBack(testArray));

//  Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. Показать решение.

// let myArray = [1, 2, 3, 4, 5, 0, 7, 8, 9, 0];
// let testArray = [1, 2, 3, -1, -2, 100];

// function sumForTen(array) {
//     let newArr = [...array];
//     let count = 0;
//     newArr.reduce( function( sum, item ) {
//         if ( sum <= 10 ) { count++; return sum += item; }
//         else { newArr.splice(0);  return sum; }
//     }, 0 );
//     return count;
// }

// console.log(sumForTen(myArray));
// console.log(sumForTen(testArray));

//  Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти. Показать решение.

// let myArray = [1, 2, 3, 4, 5, 0, 7, 8, 9, 0];
// let testArray = [1, 2, 3, -1, -2, 100];

// function sumForTenBack(array) {
//     let newArr = [...array];
//     let count = 0;
//     newArr.reduceRight( function( sum, item ) {
//         if ( sum <= 10 ) { count++; return sum += item; }
//         else { newArr.splice(0);  return sum; }
//     }, 0 );
//     return count;
// }

// console.log(sumForTenBack(myArray));
// console.log(sumForTenBack(testArray));

//  Закрепление
//  Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень и этих чисел. Показать решение.

// let myArray = [1, 25, 36, 144, -5, 0, -97, -8, 9, 0];
// let testArray = [1, -2, -3, -1, -2, 100];

// function sumForTenBack(array) {
//     let newArr = [...array];
//     return newArr.filter(item => item >= 0 ).map(item => Math.sqrt(item));
// }

// console.log(sumForTenBack(myArray));
// console.log(sumForTenBack(testArray));

/* 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный. */

    // let myList=[ {item: 'milk', quantity: 3, isPurchased: 1},
    //             {item: 'sugar', quantity: 2, isPurchased: 0},
    //             {item: 'tea', quantity: 1, isPurchased: 1},
    //             {item: 'salt', quantity: 1, isPurchased: 0},
    //             {item: 'pepper', quantity: 2, isPurchased: 1},
    //             {item: 'bread', quantity: 1, isPurchased: 1} ];

    // let myItem={item: 'milk', quantity: 3, isPurchased: 0};
    // let myNewItem={item: 'water', quantity: 6, isPurchased: 0};
                
    // function sortItem(list) {
    //     list.sort((a,b) => {
    //     return a.isPurchased - b.isPurchased
    //     });
    //     list.forEach((item,index) => console.log(list[index]));
    // }

    //sortItem(myList);


    // function addItem(list, newItem) {
    //     let inList = false;
    //     list.forEach((item, index) => { 
    //         if (list[index].item === newItem.item) {list[index].quantity += newItem.quantity; inList = true; 
    //         }
    //     })
    //     if (inList == false) {newItem.isPurchased = 1; list.push(newItem);
    //     };
    // } 

    // sortItem(myList);
    // addItem(myList, myItem);
    // sortItem(myList);
    // addItem(myList, myNewItem);
    // sortItem(myList);


    // function purchaseItem(list, someItem) {
    //     list.forEach((item, index) => { 
    //         if (list[index].item === someItem) {list[index].isPurchased = 1 }
    //     });
    // } 

    // sortItem(myList);
    // purchaseItem(myList, "salt");
    // sortItem(myList);



/* 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

Распечатка чека на экран;
Подсчет общей суммы покупки;
Получение самой дорогой покупки в чеке;
Подсчет средней стоимости одного товара в чеке. */

// let myPayCheck = [{'product-name': 'pen','quantity': 12, 'price': 3},
//                 {'product-name': 'paper','quantity': 3, 'price': 5},
//                 {'product-name': 'ruler','quantity': 2, 'price': 4},
//                 {'product-name': 'eraser','quantity': 4, 'price': 1},
//                 {'product-name': 'schoolbag','quantity': 1, 'price': 35}];

// function printPayCheck(somePayCheck) {
//     let newArr = [...somePayCheck];
//     newArr.forEach((item,index) => {console.log((newArr[index]))});

// }

// printPayCheck(myPayCheck);

// function purchaceAmount(somePayCheck) {
//     let newArr = [...somePayCheck];
//     let totalPrice = 0;
//     newArr.map((item,index) => {totalPrice += newArr[index]['price']*newArr[index]['quantity']});
//     return console.log(totalPrice);
// }

// purchaceAmount(myPayCheck);

// function mostExpensive(somePayCheck) {
//     let newArr = [...somePayCheck];
//     let max = 0;
//     newArr.map((item,index) => {
//         if (max < newArr[index]['price']*newArr[index]['quantity'])
//         max = newArr[index]['price']*newArr[index]['quantity']
// });
//     return console.log(max);
// }

// mostExpensive(myPayCheck);

// function averagePrice(somePayCheck) {
//     let newArr = [...somePayCheck];
//     let totalPrice = 0;
//     let totalQuantity = 0;
//     newArr.map((item,index) => {
//         totalQuantity += newArr[index]['quantity'];
//         totalPrice += newArr[index]['price']*newArr[index]['quantity']
// });
//     return console.log(Math.trunc(totalPrice/totalQuantity*100)/100);
// }

// averagePrice(myPayCheck);

/* 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве. */

// let myText =  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nam natus non deserunt sint praesentium explicabo voluptates quam excepturi, placeat odio asperiores hic, enim ipsam et magnam nostrum omnis saepe.";

// let myArrayOfStyles = [ {"font-family": "Verdana"},
//                         {"font-size": 24},
//                         {"font-weight": 700},
//                         {"text-transform": "uppercase"},
//                         {"letter-spacing": 2},
//                         {color: "#090"}
//                         ];

// function stylesForText(arrayOfStyles, text) {
//     let mystyle = "";
//     arrayOfStyles.forEach((item, index) => {
//         Object.keys(arrayOfStyles[index]).forEach((key) => {
//             mystyle = mystyle + key + ": "  + arrayOfStyles[index][key]+";";
//         });
//     });
//     document.write('<p style ="'+ mystyle +'">'+ text +'</p>');
//     return console.log(mystyle);
// }

// stylesForText(myArrayOfStyles, myText);

/* 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

Вывод на экран всех аудиторий;
Вывод на экран аудиторий для указанного факультета;
Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
Функция сортировки аудиторий по количеству мест;
Функция сортировки аудиторий по названию (по алфавиту). */

// let myClassRooms = [
//   { className: "English", capasity: 15, faculty: "Philology" },
//   { className: "Russian", capasity: 14, faculty: "Philology" },
//   { className: "Chemistry", capasity: 10, faculty: "Technological" },
//   { className: "Phisics", capasity: 16, faculty: "Mechanical" },
//   { className: "High-Math", capasity: 12, faculty: "Mechanical" },
//   { className: "History", capasity: 18, faculty: "Philosofical" },
// ];

// let myGroup = {name: "ingeneers", capasity: 15, faculty: "Mechanical"}

    // function printClassRooms(anyClassRooms) {
    //     anyClassRooms.forEach((item,index) => {
    //         console.log(anyClassRooms[index])
    //     });
    // }

    // printClassRooms(myClassRooms);


    // function checkClassRooms(anyClassRooms, faculty) {
    //     anyClassRooms.forEach((item,index) => {
    //         if (anyClassRooms[index]["faculty"] == faculty )
    //         console.log(anyClassRooms[index])
    //     });
    // }

    // checkClassRooms(myClassRooms, "Philology");


    // function checkCapasity(anyClassRooms, anyGroup) {
    //     anyClassRooms.forEach((item,index) => {
    //         if (anyClassRooms[index]["capasity"] >= anyGroup["capasity"] &&  anyClassRooms[index]["faculty"] == anyGroup["faculty"])
    //         console.log(anyClassRooms[index])
    //     });
    // }

    // checkCapasity(myClassRooms, myGroup);


    // function sortByCapasity(anyClassRooms) {
    //     anyClassRooms.sort((a,b) => a.capasity - b.capasity);
    //     anyClassRooms.forEach((item,index) => {
    //         console.log(anyClassRooms[index]);
    //     });
    // }

    // sortByCapasity(myClassRooms);


        // function sortByABC(anyClassRooms) {
        //     anyClassRooms.sort((a,b) => {
        //         let nameA = a.className.toLowerCase();
        //         let nameB = b.className.toLowerCase();
        //         if (nameA < nameB) return -1;
        //         if (nameA > nameB) return 1;
        //         if (nameA == nameB) return 0;
        //     });
        //     anyClassRooms.forEach((item,index) => {
        //     console.log(anyClassRooms[index]);
        //     });
        // }

        // sortByABC(myClassRooms);




    // Задача из урока.
    // Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.    

        // let myRectangle = {
        //     topleft: { x: 0, y: 0 },
        //     bottomright: { x: 100, y: 50 }
        // };

        // function recInfo(rec) {
        //     console.log(`myRectangle:`)
        //     console.log(`top-left: x = ${rec.topleft.x}, y = ${rec.topleft.y};`);
        //     console.log(`bottom-right: x = ${rec.bottomright.x}, y = ${rec.bottomright.y};`);
        // };

        // recInfo(myRectangle);


        // function heightRec(rec) {
        //     console.log(`height = ${rec.bottomright.y - rec.topleft.y}`);
        // }

        // heightRec(myRectangle);    


        // function widthRec(rec) {
        //     console.log(`width = ${rec.bottomright.x - rec.topleft.x}`);
        // }

        // widthRec(myRectangle);


        // function squareRec(rec) {
        //     console.log(`square = ${(rec.bottomright.y - rec.topleft.y)*(rec.bottomright.x - rec.topleft.x)}`);
        // }

        // squareRec(myRectangle);