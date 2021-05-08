let plusBtn=document.querySelector(".add_sheet_container");
let sheetList=document.querySelector(".sheets_list");
let firstSheet=document.querySelector(".sheet");
firstSheet.addEventListener("click",handleActiveSheet);
plusBtn.addEventListener("click",addSheet);

function addSheet(e){
    let sheetsArr=document.querySelectorAll(".sheet");
    let lastSheet=sheetsArr[sheetsArr.length-1];
    let newSheet=document.createElement("div");
    newSheet.setAttribute("class" , "sheet");
    let idx=lastSheet.getAttribute("sheetIdx");
    idx=parseInt(idx);
    newSheet.innerText=`Sheet ${idx+2}`;
    newSheet.setAttribute("sheetIdx",idx+1);
    sheetList.appendChild(newSheet);

    newSheet.addEventListener("click",handleActiveSheet);
}

function handleActiveSheet(e){
    let mySheet=e.currentTarget;
    let ele=document.querySelector(".active_sheet");
    ele.classList.remove("active_sheet");
    mySheet.classList.add("active_sheet");

}

