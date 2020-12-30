"use strict";

// 1. Создать страницу, которая выводит нумерованный список песен:
// var playList = [
// {
//  author: "LED ZEPPELIN",
//  song:"STAIRWAY TO HEAVEN",
//  link:"https://www.youtube.com/watch?v=QkF3oxziUI4&ab_channel=LedZeppelin"
// },
// {
//  author: "QUEEN",
//  song:"BOHEMIAN RHAPSODY",
//  link:"https://www.youtube.com/watch?v=fJ9rUzIMcZQ&ab_channel=QueenOfficial"
// },
// {
//  author: "LYNYRD SKYNYRD",
//  song:"FREE BIRD",
//  link:"https://www.youtube.com/watch?v=D0W1v0kOELA&ab_channel=TheBestOf-HomeOfClassicMusic"
// },
// {
//  author: "DEEP PURPLE",
//  song:"SMOKE ON THE WATER",
//  link:"https://www.youtube.com/watch?v=ikGyZh0VbPQ&ab_channel=NoMadU55555"
// },
// {
//  author: "JIMI HENDRIX",
//  song:"ALL ALONG THE WATCHTOWER",
//  link:"https://www.youtube.com/watch?v=tvVz88IHK4o&ab_channel=idunopicksomething"
// },
// {
//  author: "AC/DC",
//  song:"BACK IN BLACK",
//  link:"https://www.youtube.com/watch?v=pAgnJDJN4VA&ab_channel=acdcVEVO"
// },
// {
//  author: "QUEEN",
//  song:"WE WILL ROCK YOU",
//  link:"https://www.youtube.com/watch?v=-tJYN-eG1zk&ab_channel=QueenOfficiall"
// },
// {
//  author: "METALLICA",
//  song:"ENTER SANDMAN",
//  link:"https://www.youtube.com/watch?v=CD-E-LDc384&ab_channel=Metallica"
// }
// ];
// const div = document.createElement('div');
// div.style.cssText = 'height:30%;width:30%;background:black;padding:10%;';
// document.body.append(div);
// const h3 = document.createElement('h3');
// h3.style.cssText = 'color:white;text-align:left';
// h3.innerText = 'Rock Playlist';
// div.append(h3);
// const ol = document.createElement('ol');
// div.append(ol);
// for ( let item of playList) {
//   let li = document.createElement('li');
//       li.innerHTML = `<a href=${item['link']} target=_blank>${item['author']} - ${item['song']}</a>`;
//       li.style.cssText = 'color:white;text-align:left';
//       ol.append(li);
// }
// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.
// let div = document.createElement('div');
// let btn = document.createElement('button');
// div.style.height = '50px';
// btn.innerHTML = '<strong>Open</strong>';
// btn.style.color = 'red';
// div.style.background = 'green';
// btn.style.cssText = "background: red; color: #fff; padding: 10px;";
// document.body.append(div);
// div.innerHTML = '<button class = "btn">Close</button>';
// div.prepend(btn);
// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
var trafficLights = document.createElement('div');
trafficLights.style.cssText = 'height:20%;width:10%;background:black;padding:10%;';
document.body.append(trafficLights);
var colorRed;
var btn = document.createElement('button');