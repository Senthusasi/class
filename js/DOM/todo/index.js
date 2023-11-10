const doc = document;
const div = doc.getElementById("result");
function addfun() {
  var listItem = doc.createElement("h1");
  var value = doc.querySelector("input").value;
  listItem.textContent = value;
  div.appendChild(listItem);
}
function deletefun() {
  div.removeChild(listItem);
}
// const doc=document;
// const div=document.getElementById("result");
// function addfun(){
//   for(let i=0;i<div.length;i++){
//     var listItem=doc.createElement("path");
//       var value =doc.querySelector("input").value;
//       listItem.textContent=value;
//       div.appendChild(listItem);
//     }
//   }
