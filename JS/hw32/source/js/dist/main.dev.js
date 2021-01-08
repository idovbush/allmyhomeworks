"use strict";

// 1. Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При нажатии Ctrl + R, вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.
// let myText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae iusto doloremque excepturi earum blanditiis adipisci molestiae accusamus pariatur amet expedita exercitationem, qui minus eos quis, necessitatibus, odio inventore aperiam enim.";
// let div = document.createElement("div");
// div.style.cssText = 'height:200px;width:80%;background-color:grey;color:blue;font-size:20px;font-family:Verdana;padding:20px;';
// div.innerHTML = myText;
// document.body.append(div);
// let textarea = document.createElement("textarea");
// textarea.style.cssText = 'height:200px;width:80%;border:solid 1px black;font-size:20px;font-family:Verdana;padding:20px;';
// textarea.innerHTML = myText;
// document.addEventListener("keydown", function(event) {
//   if (event.code == "KeyE" && event.ctrlKey) {
//     event.preventDefault();
//     div.innerHTML = myText;
//     div.remove();
//     document.body.append(textarea);
//   }
//   if (event.code == "KeyR" && event.ctrlKey) {
//     event.preventDefault();
//     myText = textarea.value;
//     div.innerHTML = myText;
//     document.body.append(div);
//     textarea.remove();
//   }
// })
// 2. Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать данные по этой колонке. Учтите, что числовые значения должны сортироваться как числа, а не как строки.
// 3. Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.
var myText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae iusto doloremque excepturi earum blanditiis adipisci molestiae accusamus pariatur amet expedita exercitationem, qui minus eos quis, necessitatibus, odio inventore aperiam enim.";
var div = document.createElement("div");
div.style.cssText = 'height:200px;width:50%;border: solid 3px black; background-color:grey;color:blue;font-size:20px;font-family:Verdana;padding:20px;';
div.innerHTML = myText;
document.body.append(div);
var coords = div.getBoundingClientRect();
var beginRight = coords.right;
var beginBottom = coords.bottom;
document.addEventListener('mousedown', function (event) {
  var x = event.clientX;
  var y = event.clientY;
  var isTarget = false;
  console.log(beginRight - x, beginBottom - y); //div.innerHTML = myText + x;

  if (0 < beginRight - x && 0 < beginBottom - y && beginRight - x < 10 && beginBottom - y < 10) {
    isTarget = true;
    console.log(isTarget);
  }
});