let plusBtn=document.querySelector(".add_sheet_container");
let sheetList=document.querySelector(".sheets_list");
let firstSheet=document.querySelector(".sheet");
let addressBox=document.querySelector(".address_box");
let allCells=document.querySelectorAll(".grid>.row>.col");
let fontFamily=document.querySelector("#font_family");
let formulaBox=document.querySelector(".formula_box");
let boldBtn=document.querySelector(".bold");
let italicBtn=document.querySelector(".italic");
let underlineBtn=document.querySelector(".underline");
let fontSizeOption=document.querySelector(".font_size");
let textColor=document.querySelector("#text_color");
let bgColor=document.querySelector("#bg_color");

// console.log(allCells.length);  ->2600
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

for(let i=0;i<allCells.length;i++){
    allCells[i].addEventListener("click",function(){
        let rid=parseInt(allCells[i].getAttribute("rid"));
        let cid=parseInt(allCells[i].getAttribute("cid"));
        // console.log(rid);
        // console.log(cid);
        addressBox.value=`${String.fromCharCode(cid+65)}${rid+1}`;
    })
}
// this selects first cell A1 and click on it by default.
allCells[0].click(); 


fontFamily.addEventListener("change",function(){
    let selectedFont=fontFamily.value;
    let address=addressBox.value;
    let {colId,rowId}=getRIdCIdfromAddress(address);
    // console.log(typeof(colId));
    // console.log(rowId);
    let cell = document.querySelector(`.col[rid="${rowId}"][cid="${colId}"]`);
    console.log(cell);
    cell.style.fontFamily=selectedFont;

})

boldBtn.addEventListener("click",function(){
    let isActive=boldBtn.classList.contains("active_btn");
    let address=addressBox.value;
    let {colId,rowId}=getRIdCIdfromAddress(address);
    let cell=document.querySelector(`.col[rid="${rowId}"][cid="${colId}"]`);
    if(isActive){
        boldBtn.classList.remove("active_btn");
        cell.style.fontWeight="normal";
    }
    else{
        boldBtn.classList.add("active_btn");
        cell.style.fontWeight="bold";
    }
})
italicBtn.addEventListener("click",function(){
    let isActive=italicBtn.classList.contains("active_btn");
    let address=addressBox.value;
    let {colId,rowId}=getRIdCIdfromAddress(address);
    let cell=document.querySelector(`.col[rid="${rowId}"][cid="${colId}"]`);
    if(isActive){
        italicBtn.classList.remove("active_btn");
        cell.style.fontStyle="normal";
    }
    else{
        italicBtn.classList.add("active_btn");
        cell.style.fontStyle="italic";
    }
})
underlineBtn.addEventListener("click",function(){
    let isActive=underlineBtn.classList.contains("active_btn");
    let address=addressBox.value;
    let {colId,rowId}=getRIdCIdfromAddress(address);
    let cell=document.querySelector(`.col[rid="${rowId}"][cid="${colId}"]`);
    if(isActive){
        underlineBtn.classList.remove("active_btn");
        cell.style.textDecoration="none";
    }
    else{
        underlineBtn.classList.add("active_btn");
        cell.style.textDecoration="underline";
    }
})
fontSizeOption.addEventListener("change",function(){
    let selectedfontSize =fontSizeOption.value;
    let address=addressBox.value;
    let {colId,rowId}=getRIdCIdfromAddress(address);
    let cell=document.querySelector(`.col[rid="${rowId}"][cid="${colId}"]`);
    cell.style.fontSize= selectedfontSize+"px";
})
textColor.addEventListener("change",function(){
    
})




function getRIdCIdfromAddress(address){
    let add=address.split("");
    let colId=parseInt(add[0].charCodeAt()-65);
    let rowId=parseInt(add[1])-1;
    // console.log(typeof(colId));
    // console.log(colId,rowId);
    return {colId,rowId};
}








// **************Formula Container code**************

// formulaBox.addEventListener("keydown",function(e){
//     if(e.key=="Enter" && formulaBox.value!=""){
//         let formula=formulaBox.value;

//     }
// })