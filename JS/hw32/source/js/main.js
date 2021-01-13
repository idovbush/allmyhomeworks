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



    // let row, cell; 
    // let myArr = [];
    // let numCol = 0;
    // let resArr = [];

    // function myRandom(from, to) {
    //     from = Math.ceil(from);
    //     to = Math.floor(to);
    //     return Math.floor(Math.random() * (from - to)) + to; 
    // }
     
    // function myTable(numRow,numCell) {
    //     const table = document.createElement("table");  
    //     const th = table.insertRow(0);
    //     for (let h = 0; h<numCell; h++) {
    //         cell = th.insertCell();
    //                 cell.innerHTML = `Column №${h+1}`;
    //                 cell.id = `${h}`;
    //                 cell.classList.add('th');
    //                 cell.style.cssText = "width:40px;text-align:center;font-family:Verdana;font-size:16;font-weight:700;color:blue;border:solid 2px grey";
    //     }

    //     for (let i = 0; i<numRow; i++) {
    //             row = table.insertRow();
    //             myArr[i] = new Array();
    //             for (let j = 0; j<numCell; j++) {
    //                 cell = row.insertCell();
    //                 myArr[i][j] = myRandom(101,1);
    //                 cell.innerHTML = myArr[i][j];
    //                 cell.id = `${i}_${j}`;
    //                 cell.style.cssText = "width:40px;text-align:center;font-family:Verdana;font-size:16;border:solid 2px grey";
                    
    //             }    
    //     }  
    //     document.body.append(table);
    //     return resArr=[numRow,numCell];
    // }


    // function sortColumn(event) {
    //     numCol = event.currentTarget.id;
    //     myArr.sort((a,b) => a[numCol] - b[numCol]);
    //     for (let i = 0; i<resArr[0]; i++) {
    //         for (let j = 0; j<resArr[1]; j++) {
    //             document.getElementById(`${i}_${j}`).innerHTML = myArr[i][j];
    //         }    
    //     }  
    // }
    
    // myTable(3,5);
    // console.log(myArr);
    
    // let thList = document.getElementsByClassName('th');
    // for(var n = 0; n < thList.length; ++n) {
    //     thList[n].addEventListener('click', sortColumn, false);
    // };
    




// 3. Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.



// let myText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae iusto doloremque excepturi earum blanditiis adipisci molestiae accusamus pariatur amet expedita exercitationem, qui minus eos quis, necessitatibus, odio inventore aperiam enim.";

// let div = document.createElement("div");

// div.style.cssText = 'height:200px;width:50%;border: solid 3px black; background-color:coral;color:blue;font-size:20px;font-family:Verdana;padding:20px;overflow:hidden;';
// div.innerHTML = myText;
// document.body.append(div);

// let coords = div.getBoundingClientRect();

// let beginLeft = coords.left;
// let beginTop = coords.top;
// let beginRight = coords.right;
// let beginBottom = coords.bottom;

// let isTarget = false;
// let isMove = false;


// document.addEventListener('mousedown', function(event){

//     if (((beginRight - event.clientX)> -1) && ((beginBottom - event.clientY) > -1) && ((beginRight - event.clientX)<10) && ((beginBottom - event.clientY)<10)) {
//         isTarget = true;
//         console.log("isTarget", isTarget);
//     }
// })
// document.addEventListener('mousemove', function(event){
    
//     if ((Math.abs(beginRight - event.clientX)>3) && (Math.abs(beginBottom - event.clientY)>3) && (isTarget) ) {
//         isMove = true;
      
//     }
// })

// document.addEventListener('mouseup', function(event) {
   
//     if (isMove)  {
        
//         div.style.width = event.clientX + "px"; 
//         div.style.height =  event.clientY + "px"; 
//         isTarget = false;
//         isMove = false;
//         coords = div.getBoundingClientRect();
//         beginRight = coords.right;
//         beginBottom = coords.bottom;
        
//       }

// })
