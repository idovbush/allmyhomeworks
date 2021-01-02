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
// div.style.cssText = 'height:30%;width:90%;background:black;padding:10%;';
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
// let screen = document.createElement('div');
// screen.classList.add("screen", "noActive");
// screen.style.cssText = "position: fixed;top: 0;left: 0;width: 100%;height: 100%;background-color: rgba(33, 33, 33, 0.5);z-index: 2;"
// document.body.append(screen);
// let modal = document.createElement('div');
// modal.classList.add("modal", "noActive");
// modal.style.cssText = "width: 50%;max-width: 500px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 100;box-shadow: 0 3px 10px -.5px rgba(0, 0, 0, .2);text-align: center;padding: 30px;border-radius: 5px;background-color: #fff;";
// modal.innerHTML = '<p><strong>This is my modal window!</strong></p>';
// document.body.append(modal);
// let btnOpen = document.createElement('button');
// btnOpen.style.cssText = "background-color: red; color: #fff;";
// btnOpen.innerHTML = '<strong>Open</strong>';
// document.body.append(btnOpen);
// let btnClose = document.createElement('button');
// btnClose.innerHTML = '<strong>Close</strong>';
// btnClose.style.cssText = "background-color: #fff; color: red;";
// modal.append(btnClose);
// btnOpen.onclick = openModal; 
// function openModal() {
//     modal.classList.remove('noActive');
//     screen.classList.remove('noActive');
//     modal.classList.add('active');
//     screen.classList.add('active');
// }
// btnClose.onclick = closeModal; 
// function closeModal() {
//     modal.classList.remove('active');
//     screen.classList.remove('active');
//     modal.classList.add('noActive');
//     screen.classList.add('noActive');
// }
// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
// let trafficLights = document.createElement("div");
// trafficLights.style.cssText =
//   "height:260px;width:80px;background:grey;padding:10px;margin-bottom:25px;";
// document.body.append(trafficLights);
// let colorR = document.createElement("div");
// colorR.style.cssText =
//   "height:80px;width:80px;border-radius:40px;margin: 0 auto;margin-bottom:10px";
// colorR.classList.add("lights", "red");
// trafficLights.append(colorR);
// let colorY = document.createElement("div");
// colorY.style.cssText =
//   "height:80px;width:80px;border-radius:40px;margin: 0 auto;margin-bottom:10px";
// colorY.classList.add("lights");
// trafficLights.append(colorY);
// let colorG = document.createElement("div");
// colorG.style.cssText =
//   "height:80px;width:80px;border-radius:40px;margin: 0 auto;";
// colorG.classList.add("lights");
// trafficLights.append(colorG);
// let btn = document.createElement("button");
// btn.innerHTML = "Change";
// btn.style.cssText = "height: 25px; width: 100px;"
// document.body.append(btn);
// btn.onclick = changeColors;
// function changeColors() {
//   if (colorR.classList.contains("red")) {
//     colorR.classList.remove("red");
//     colorR.classList.add("previous");
//     colorY.classList.add("yellow");
//   }
//   else if (colorY.classList.contains("yellow")) {
//     colorY.classList.remove("yellow");
//     if (colorR.classList.contains("previous")) {
//         colorR.classList.remove("previous");
//         colorG.classList.add("green");
//     }
//     else if (colorG.classList.contains("previous")) {
//         colorG.classList.remove("previous");
//         colorR.classList.add("red");
//     }
//   }
//   else if (colorG.classList.contains("green")) {
//     colorG.classList.remove("green");
//     colorG.classList.add("previous");
//     colorY.classList.add("yellow");
//   }
// }
"use strict";