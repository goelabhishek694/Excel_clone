// let plusBtn=document.querySelector(".add_sheet_container");
// let sheetList=document.querySelector(".sheets_list");
// let firstSheet=document.querySelector(".sheet");
// let addressBox=document.querySelector(".address_box");
// let allCells=document.querySelectorAll(".grid>.row>.col");
// let fontFamily=document.querySelector("#font_family");
// let allFont=document.querySelectorAll("#font_family>*");
// let boldBtn=document.querySelector(".bold");
// let italicBtn=document.querySelector(".italic");
// let underlineBtn=document.querySelector(".underline");
// let fontSizeOption=document.querySelector(".font_size");
// let allFontSize=document.querySelectorAll(".font_size>*")
// let textColor=document.querySelector("#text_color");
// let bgColor=document.querySelector("#bg_color");
// let textAlignment=document.querySelectorAll(".alignment_container>*");
// let sheetDB=workSheetDB[0];
// let formulaBox=document.querySelector(".formula_box");
// // console.log(textAlignment[0]);

// // console.log(allCells.length);  ->2600
// firstSheet.addEventListener("click",handleActiveSheet);
// plusBtn.addEventListener("click",addSheet);

// function addSheet(e){
//     let sheetsArr=document.querySelectorAll(".sheet");
//     let lastSheet=sheetsArr[sheetsArr.length-1];
//     let newSheet=document.createElement("div");
//     newSheet.setAttribute("class" , "sheet");
//     let lastSheetidx=lastSheet.getAttribute("sheetIdx");
//     lastSheetidx=parseInt(lastSheetidx);
//     newSheet.innerText=`Sheet ${lastSheetidx+2}`;
//     newSheet.setAttribute("sheetIdx",lastSheetidx+1);
//     sheetList.appendChild(newSheet);
//     sheetsArr.forEach(function(sheet){
//         sheet.classList.remove("active_sheet");
//     })
//     sheetsArr=document.querySelectorAll(".sheet");
//     sheetsArr[sheetsArr.length-1].classList.add("active_sheet");

//     initCurrentSheetDb();
//     sheetDB=workSheetDB[lastSheetidx+1];
//     // as soon as new sheet is added we have to set it at default settings that is default bui font font size bdcolor tcolor value etc. 
//     // so we use initui function to initialise our cells UI when someone adds new sheet , this we do so that we do not see data from previous sheets and a fresh sheet is presented to us.
//     initUI();

//     newSheet.addEventListener("click",handleActiveSheet);
// }

// function handleActiveSheet(e){
//     let mySheet=e.currentTarget;
//     let ele=document.querySelector(".active_sheet");
//     ele.classList.remove("active_sheet");
//     mySheet.classList.add("active_sheet");
//     let idx=mySheet.getAttribute("sheetIdx");
//     idx=parseInt(idx);
//     sheetDB=workSheetDB[idx];
//     setUI(sheetDB);
// }

// for(let i=0;i<allCells.length;i++){
//     allCells[i].addEventListener("click",function(){
//         let rid=parseInt(allCells[i].getAttribute("rid"));
//         let cid=parseInt(allCells[i].getAttribute("cid"));
//         addressBox.value=`${String.fromCharCode(cid+65)}${rid+1}`;
//         let cellObject=sheetDB[rid][cid];
//         // console.log(cellObject);
        
//         if(cellObject.bold==true){
//             boldBtn.classList.add("active_btn");
//         }
//         else boldBtn.classList.remove("active_btn");

//         if(cellObject.italic=="italic"){
//             italicBtn.classList.add("active_btn");
//         }
//         else italicBtn.classList.remove("active_btn");

//         if(cellObject.underline=="underline"){
//             underlineBtn.classList.add("active_btn");
//         }
//         else underlineBtn.classList.remove("active_btn");

//         for(let i=0;i<allFont.length;i++){
//             if(cellObject.font_family==allFont[i].innerText){
//                 fontFamily.selectedIndex=i;
//             }
//         }

//         for(let i=0;i<allFontSize.length;i++){
//             if(cellObject.fontSize==allFontSize[i].innerText){
//                 fontSizeOption.selectedIndex=i;
//             }
//         }
//         textColor.value=cellObject.tcolor;
//         bgColor.value=cellObject.bgcolor;

//         if(cellObject.halign=="left"){
//             textAlignment[0].classList.add("active_btn");
//         }
//         else textAlignment[0].classList.remove("active_btn");

//         if(cellObject.halign=="center"){
//             textAlignment[1].classList.add("active_btn");
//         }
//         else textAlignment[1].classList.remove("active_btn");

//         if(cellObject.halign=="right"){
//             textAlignment[2].classList.add("active_btn");
//         }
//         else textAlignment[2].classList.remove("active_btn");
//         // console.log(cell.innerText);
//     })
// }
// // this selects first cell A1 and click on it by default.
// allCells[0].click(); 


// fontFamily.addEventListener("change",function(){
//     let selectedFont=fontFamily.value;
//     let address=addressBox.value;
//     let {colId,rowId}=getRIdCIdfromAddress(address);
//     // console.log(typeof(colId));
//     // console.log(rowId);
//     let cell = document.querySelector(`.col[rid="${rowId}"][cid="${colId}"]`);
//     // console.log(cell);
//     let cellObject=sheetDB[rowId][colId];
//     cell.style.fontFamily=selectedFont;
//     console.log("selected font", selectedFont);
//     cellObject.font_family=selectedFont;

// })
// boldBtn.addEventListener("click",function(){
//     let isActive=boldBtn.classList.contains("active_btn");
//     let address=addressBox.value;
//     let {colId,rowId}=getRIdCIdfromAddress(address);
//     let cell=document.querySelector(`.col[rid="${rowId}"][cid="${colId}"]`);
//     let cellObject=sheetDB[rowId][colId];
//     if(isActive){
//         boldBtn.classList.remove("active_btn");
//         cell.style.fontWeight="normal";
//         cellObject.bold=false;
//     }
//     else{
//         boldBtn.classList.add("active_btn");
//         cell.style.fontWeight="bold";
//         cellObject.bold=true;
//     }
// })
// italicBtn.addEventListener("click",function(){
//     let isActive=italicBtn.classList.contains("active_btn");
//     let address=addressBox.value;
//     let {colId,rowId}=getRIdCIdfromAddress(address);
//     let cell=document.querySelector(`.col[rid="${rowId}"][cid="${colId}"]`);
//     let cellObject=sheetDB[rowId][colId];
//     if(isActive){
//         italicBtn.classList.remove("active_btn");
//         cell.style.fontStyle="normal";
//         cellObject.italic="normal";
//     }
//     else{
//         italicBtn.classList.add("active_btn");
//         cell.style.fontStyle="italic";
//         cellObject.italic="italic";
//     }
// })
// underlineBtn.addEventListener("click",function(){
//     let isActive=underlineBtn.classList.contains("active_btn");
//     let address=addressBox.value;
//     let {colId,rowId}=getRIdCIdfromAddress(address);
//     let cell=document.querySelector(`.col[rid="${rowId}"][cid="${colId}"]`);
//     let cellObject=sheetDB[rowId][colId];
//     if(isActive){
//         underlineBtn.classList.remove("active_btn");
//         cell.style.textDecoration="none";
//         cellObject.underline="none";
//     }
//     else{
//         underlineBtn.classList.add("active_btn");
//         cell.style.textDecoration="underline";
//         cellObject.underline="underline";
//     }
// })
// fontSizeOption.addEventListener("change",function(){
//     let selectedfontSize =fontSizeOption.value;
//     let address=addressBox.value;
//     let {colId,rowId}=getRIdCIdfromAddress(address);
//     let cell=document.querySelector(`.col[rid="${rowId}"][cid="${colId}"]`);
//     let cellObject=sheetDB[rowId][colId];
//     cell.style.fontSize= selectedfontSize+"px";
//     cellObject.fontSize=selectedfontSize;
// })
// textColor.addEventListener("change",function(){
//     let address=addressBox.value;
//     let {colId,rowId}=getRIdCIdfromAddress(address);
//     let cell=document.querySelector(`.col[rid="${rowId}"][cid="${colId}"]`);
//     let cellObject=sheetDB[rowId][colId];
//     // console.log(textColor.value);
//     cell.style.color=textColor.value;
//     cellObject.tcolor=textColor.value;
// })
// bgColor.addEventListener("change",function(){
    
//     let address=addressBox.value;
//     let {colId,rowId}=getRIdCIdfromAddress(address);
//     let cell=document.querySelector(`.col[rid="${rowId}"][cid="${colId}"]`);
//     let cellObject=sheetDB[rowId][colId];
//     cell.style.backgroundColor=bgColor.value;
//     cellObject.bgcolor=bgColor.value;
//     // console.log(bgColor.value);
// })
// //text-alignment event listener
// for(let i=0;i<textAlignment.length;i++){
//     textAlignment[i].addEventListener("click",function(){
//         let address=addressBox.value;
//         let {colId,rowId}=getRIdCIdfromAddress(address);
//         let cell=document.querySelector(`.col[rid="${rowId}"][cid="${colId}"]`);
//         let cellObject=sheetDB[rowId][colId];
//         if(textAlignment[i].classList.contains("left")){
            
//             textAlignment.forEach(function(ele){
//                 ele.classList.remove("active_btn");
//             });
//             textAlignment[i].classList.add("active_btn");
//             cell.style.textAlign="left";
//             cellObject.halign="left";
//         }
//         else if(textAlignment[i].classList.contains("center")){
//             if(textAlignment[i].classList.contains("active_btn")){
//                 textAlignment[i].classList.remove("active_btn");
//                 cell.style.textAlign="left";
//                 cellObject.halign="left";
//             }
//             else{
//                 textAlignment.forEach(function(ele){
//                     ele.classList.remove("active_btn");
//                 });
//                 textAlignment[i].classList.add("active_btn");
//                 cell.style.textAlign="center";
//                 cellObject.halign="center";
//             }
//         }
//         else if(textAlignment[i].classList.contains("right")){
//             if(textAlignment[i].classList.contains("active_btn")){
//                 textAlignment[i].classList.remove("active_btn");
//                 cell.style.textAlign="left";
//                 cellObject.halign="left";
//             }
//             else{
//                 textAlignment.forEach(function(ele){
//                     ele.classList.remove("active_btn");
//                 });
//                 textAlignment[i].classList.add("active_btn");
//                 cell.style.textAlign="right";
//                 cellObject.halign="right";
//             }
//         }
//     })
// }



// function initUI(){
//     for(let i=0;i<allCells.length;i++){
//         allCells[i].style.fontWeight = "normal";
//         allCells[i].style.fontStyle = "normal";
//         allCells[i].style.textDecoration = "none";
//         allCells[i].style.fontFamily = "Arial";
//         allCells[i].style.fontSize = "10px";
//         allCells[i].style.textAlign = "left";
//         allCells[i].style.color = "#000000",
//         allCells[i].style.backgroundColor = "#ffffff";
//         allCells[i].innerText = "";
//     }
// }

// function setUI(sheetDB){
//     for(let i=0;i<allCells.length;i++){
//         let rid=parseInt(allCells[i].getAttribute("rid"));
//         let cid=parseInt(allCells[i].getAttribute("cid"));
//         // console.log(rid,cid);
//         let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);

//         let {bold,italic,underline,font_family,fontSize,halign,tcolor,bgcolor,value,children,formula}=sheetDB[rid][cid];

//         cell.style.fontWeight=(bold==true)?"bold":"normal";
//         cell.style.fontStyle=(italic=="normal")?"normal":"italic";
//         cell.style.textDecoration=(underline=="none")?"none":"underline";
//         cell.style.fontFamily=font_family;
//         cell.style.fontSize=fontSize+"px";
//         cell.style.color=tcolor;
//         cell.style.backgroundColor=bgcolor;
//         cell.innerText=value;
//     }
// }

// // function setUI(sheetDB) {
// //     for (let i = 0; i < sheetDB.length; i++) {
// //         for (let j = 0; j < sheetDB[i].length; j++) {
// //             let cell = document.querySelector(`.col[rid="${i}"][cid="${j}"]`);
// //             let {bold,italic,underline,font_family,fontSize,halign,tcolor,bgcolor,value,children,formula}=sheetDB[i][j];
// //             cell.style.fontWeight = bold == true ? "bold" : "normal";
// //             cell.style.fontStyle=(italic=="normal")?"normal":"italic";
// //             cell.style.textDecoration=(underline=="none")?"none":"underline";
// //             cell.style.fontFamily=font_family;
// //             cell.style.fontSize=fontSize+"px";
// //             cell.style.color=tcolor;
// //             cell.style.backgroundColor=bgcolor;
// //             cell.innerText=value;
// //             // cell.innerText = value;
// //         }
// //     }

// //} 




 

// // setting value of cell in db
// for(let i=0;i<allCells.length;i++){
//     allCells[i].addEventListener("blur",function(){
//         let rid=allCells[i].getAttribute("rid");
//         let cid=allCells[i].getAttribute("cid");
//         let value=allCells[i].innerText;
//         // console.log(value);
//         let cellObject=sheetDB[rid][cid];
//         if(cellObject.value==value) return;
//         cellObject.value=value;
//         if(cellObject.formula!=""){
//             removeFormula(cellObject);
//         }
        
//         changeChildren(cellObject);
//         // let add
//     })
// }



// // **************Formula Container code**************

// formulaBox.addEventListener("keydown",function(e){
//     if(e.key=="Enter" && formulaBox.value!=""){
//         let address=addressBox.value;
//         let {rowId,colId}=getRIdCIdfromAddress(address);
//         let cellObject=sheetDB[rowId][colId];
//         let prevFormula=cellObject.formula;
//         let formula=formulaBox.value;

//         if(prevFormula!="" && prevFormula!=formula){
//             removeFormula(cellObject);
//         }
//         else if(prevFormula==formula) return;
//         // get ans from formula
//         let evaluatedValue=evaluate(formula);

        
//         // set the ans on UI 
//         setUIByFormula(evaluatedValue,rowId,colId);

//         //set ans,formula in db and children to their parent
//         setContentInDB(evaluatedValue,formula,rowId,colId,address);
//         changeChildren(cellObject);
//     }
// })

// function evaluate(formula){
//     let formulaTokens=formula.split(" ");
//     for(let i=0;i<formulaTokens.length;i++){
//         let char=formulaTokens[i].charCodeAt(0);
//         if(char>=65 && char<=90){
//             // console.log("inside if");
//             let{colId,rowId}=getRIdCIdfromAddress(formulaTokens[i]);
//             // console.log(formulaTokens[i],colId,rowId);
//             let cellObject=sheetDB[rowId][colId];
//             let {value}=cellObject;
//             // console.log(value);
//             formula=formula.replace(formulaTokens[i],value);
//         }
//     }
//     // console.log(formula);
//     let ans=eval(formula);
//     return ans;
// }

// function setUIByFormula(evaluatedValue,rid,cid){
//     let cell=document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
//     cell.innerText=evaluatedValue;
// }

// function setContentInDB(evaluatedValue,formula,rid,cid,address){
//     let cellObject=sheetDB[rid][cid];
//     cellObject.value=evaluatedValue;
//     cellObject.formula=formula;

//     let formulaTokens=formula.split(" ");
//     //[(, A1, +, A2,)]
//     for(let i=0;i<formulaTokens.length;i++){
//         let char=formulaTokens[i].charCodeAt(0);
//         if(char>=65 && char<=90){
//             let parentAddress=getRIdCIdfromAddress(formulaTokens[i]);
//             let cellObject=sheetDB[parentAddress.rowId][parentAddress.colId];
//             cellObject.children.push(address);
//         }
//     }
// }

// function changeChildren(cellObject){
//     let children=cellObject.children;
//     for(let i=0;i<children.length;i++){
//         let childRidCid=getRIdCIdfromAddress(children[i]);
//         let childObj=sheetDB[childRidCid.rowId][childRidCid.colId];
//         let formula=childObj.formula;
//         let evaluatedValue=evaluate(formula);
//         setUIByFormula(evaluatedValue,childRidCid.rowId,childRidCid.colId);
//         childObj.value=evaluatedValue;
//         // setContentInDB(evaluatedValue,formula,childRidCid.rowId,childRidCid.colId,children[i]);
//         changeChildren(childObj);
//     }
// }

// function removeFormula(cellObject){
//     let address=addressBox.value;
//     let formula=cellObject.formula;
//     let formulaTokens=formula.split(" ");
//     for(let i=0;i<formulaTokens.length;i++){
//         let char=formulaTokens[i].charCodeAt(0);
//         if(char>=65 && char<=90){
//             // console.log("inside if");
//             let parentRidCid=getRIdCIdfromAddress(formulaTokens[i]);
//             // console.log(formulaTokens[i],colId,rowId);
//             let parentObject=sheetDB[parentRidCid.rowId][parentRidCid.colId];
//             let children=parentObject.children;
//             let idx=children.indexOf(address);
//             children.splice(idx,1);
//         }
//     }
//     let{rowId,colId}=getRIdCIdfromAddress(address);
//     let cell=document.querySelector(`.col[rid="${rowId}"][cid="${colId}"]`);
//     cell.formula="";
//     cellObject.formula="";
//     console.log(cellObject);



// }

// //*********************helper function*********************

// function getRIdCIdfromAddress(address){
//     let colId=parseInt(address.charCodeAt(0)-65);
//     let rowId=address.slice(1);
//     rowId=(Number(rowId))-1;
//     // console.log(typeof(colId));
//     // console.log("from func",colId,rowId);
//     return {colId,rowId};
// }

let rows = 100;
let cols = 26;

let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");
let cellsCont = document.querySelector(".cells-cont");
let addressBar = document.querySelector(".address-bar");

for (let i = 0; i < rows; i++) {
  let addressCol = document.createElement("div");
  addressCol.setAttribute("class", "address-col");
  addressCol.innerText = i + 1;
  addressColCont.appendChild(addressCol);
}

for (let i = 0; i < cols; i++) {
  let addressRow = document.createElement("div");
  addressRow.setAttribute("class", "address-row");
  addressRow.innerText = String.fromCharCode(65 + i);
  addressRowCont.appendChild(addressRow);
}

for (let i = 0; i < rows; i++) {
  let rowCont = document.createElement("div");
  rowCont.setAttribute("class", "row-cont");
  for (let j = 0; j < cols; j++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    cell.setAttribute("contenteditable", "true");
    rowCont.appendChild(cell);
    addListenerForAddressBarDisplay(cell, i, j);
  }
  cellsCont.appendChild(rowCont);
}

function addListenerForAddressBarDisplay(cell, i, j) {
  cell.addEventListener("click", (e) => {
    let rowID = i + 1;
    let colID = String.fromCharCode(65 + j);
    addressBar.value = `${colID}${rowID}`;
  });
}