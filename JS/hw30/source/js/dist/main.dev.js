// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.
// class MyCircle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   get getRadius() {
//         console.log(`Radius = ${this.radius}`);
//         return this.radius;
//   }
//   set setRadius(newRadius) {
//         console.log(`Set new radius = ${newRadius}`);
//         this.radius = newRadius;
//   }
//   get getDiametr() {
//         console.log(`Diametr = ${this.radius * 2}`);      
//         return this.radius * 2;  
//   }
//   square() {
//         console.log(`Square = ${this.radius ** 2 * Math.PI}`);      
//         return this.radius ** 2 * Math.PI;  
//   }
// circumference() {
//         console.log(`Circumference = ${this.radius * 2 * Math.PI}`);      
//         return this.radius * 2 * Math.PI;  
//   }
// }
// let newCircle = new MyCircle(100);
// newCircle.getRadius;
// newCircle.getDiametr;
// newCircle.setRadius = 10;
// newCircle.getRadius;
// newCircle.square();
// newCircle.circumference();
// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
// Продемонстрировать работу написанных методов.
// class Marker {
//     constructor(color, fullness) {
//     this.color  = color;
//     this.fullness = fullness;
//     }
//     drawText(text) {
//         let printText = '';
//         let textArr = text.split();
//         console.log(textArr);
//         for (let i = 0; i <= 199; i++) {
//             printText += textArr[i];
//             this.fullness -= 0.5;
//         }
//         console.log(printText);  
//         return printText;  
//     }
// }
// let myMarker = new Marker('green', 75);
// let a = myMarker.drawText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quidem laborum aliquid fugit saepe architecto, unde itaque cumque distinctio eaque cupiditate, ea harum, voluptatum assumenda omnis quisquam debitis accusantium inventore.';
// console.log(a);
// myMarker;
// 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
// class Employee {
//     constructor(name,position,salary) {
//         this.name = name;
//         this.salary = salary;
//         this.position = position;
//     }
// }
// function makeArr(number) {
//     arrBank = [];
//     for (let i = 0; i < number; i++) {
//         arrBank.push(new Employee("asdds","jjjjjj",1233))
//     }
//     return arrBank;
// }
// console.log(makeArr(5));
"use strict";