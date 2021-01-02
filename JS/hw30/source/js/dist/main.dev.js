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
//         let currentFullness = this.fullness * 2;
//         let textArr = text.split("");
//         for (let i = 0; i < currentFullness; i++) {
//             printText += textArr[i];
//             this.fullness -= 0.5;
//         }
//         console.log('This text can be printed with this filling: ',printText); 
//         document.body.style.color = this.color;
//         document.write(printText); 
//         return printText;  
//     }
// }
// let myText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quidem laborum aliquid fugit saepe architecto, unde itaque cumque distinctio eaque cupiditate, ea harum, voluptatum assumenda omnis quisquam debitis accusantium inventore.';
// let myMarker = new Marker('green', 5);
// console.log('Amount of ink before print: ',myMarker.fullness,'%');
// myMarker.drawText(myText);
// console.log('Amount of ink after print: ', myMarker.fullness,'%');
// class reMarker extends Marker {
//     refueling() {
//         this.fullness = 100;
//     }
// }
// let myReMarker = new reMarker('pink', 29);
// console.log('Amount of ink before refueling: ',myReMarker.fullness,'%');
// myReMarker.refueling();
// console.log('Amount of ink after refueling: ',myReMarker.fullness,'%');
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
//         arrBank.push(new Employee("IVANOV","manager",12345))
//     }
//     return arrBank;
// }
// let myArr = makeArr(5);
// class EmpTable {
//     constructor(somearray) {
//         this.somearray = somearray;
//     }
//     getHTML() {
//         let table = document.createElement('table');
//         table.innerHTML = '<caption>Bank employees</caption>';
//         document.body.append(table);
//         for (let i = 0; i < this.somearray.length; i++) {
//             let tr = document.createElement('tr');
//             tr.innerHTML = `<td>${this.somearray[i].name}</td><td>${this.somearray[i].position}</td><td>${this.somearray[i].salary}</td>`;
//             table.append(tr);
//         }
//     }    
// }
// myEmpTable = new EmpTable(myArr);
// myEmpTable.getHTML();
"use strict";