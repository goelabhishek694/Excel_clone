// Giving letters to Columns and numbering to rows
let topRow=document.querySelector(".top_row");
let str="";
for(let i=0;i<26;i++){
    str+=`<div class="col">${String.fromCharCode(65+i)}</div>`
}
topRow.innerHTML=str;

let leftCol=document.querySelector(".left_col");
str="";

for(let i=0;i<100;i++){
    str+=`<div class="left_col_box">${i+1}</div>`;
}
leftCol.innerHTML=str;

//Creatio of 2d grid of cells for excel, here we have to place 26 col in each row, this will go on for all 100row , this will form the grid
let grid=document.querySelector(".grid");
str="";
for(let i=0;i<100;i++){

    for(let j=0;j<26;j++){

    }

}

