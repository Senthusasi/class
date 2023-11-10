// const inputE1 = document.querySelector(".input");
// const parentE1 = document.querySelector(".parent");
// const btnAdd = document.querySelector(".btn");
// console.log(parentE1.textContent);
    
//     btnE1.addEventListener("click", function () {
//       console.log(inputE1.value);
//     });
// const paraE1=document.querySelector(".para");
// paraE1.classList.add("para");
// paraE1.style.backgroundColor="red";
// paraE1.style.color="#fff";
// paraE1.style.padding="10px 20px"

// const parentE1=document.querySelector(".parent");
// const childE1=document.createElement("div");
// childE1.classList.add("child");
// parentE1.appendChild(childE1);
  
const parentE1=document.querySelector(".parent");
const HTML='<div class="parent">hello</div>';
parentE1.insertAdjacentHTML("afterend",HTML);