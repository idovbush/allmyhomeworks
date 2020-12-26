// 1. Создать страницу, которая выводит нумерованный список песен:
// var playList = [
// {
//  author: "LED ZEPPELIN",
//  song:"STAIRWAY TO HEAVEN"
// },
// {
//  author: "QUEEN",
//  song:"BOHEMIAN RHAPSODY"
// },
// {
//  author: "LYNYRD SKYNYRD",
//  song:"FREE BIRD"
// },
// {
//  author: "DEEP PURPLE",
//  song:"SMOKE ON THE WATER"
// },
// {
//  author: "JIMI HENDRIX",
//  song:"ALL ALONG THE WATCHTOWER"
// },
// {
//  author: "AC/DC",
//  song:"BACK IN BLACK"
// },
// {
//  author: "QUEEN",
//  song:"WE WILL ROCK YOU"
// },
// {
//  author: "METALLICA",
//  song:"ENTER SANDMAN"
// }
// ];

// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.


let div = document.createElement('div');
let btn = document.createElement('button');
div.style.height = '50px';
btn.className = 'alert';
btn.innerHTML = '<strong>Open</strong>';
btn.style.color = 'red';
div.style.background = 'green';
document.body.append(div);


// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.


