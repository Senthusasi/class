const input = document.querySelector("input");
const divEl = document.querySelector("result");
const btnAdd = document.querySelector(".btn");
const btnEdit=document.querySelector(".btnedit");
const btnDelete=document.querySelector(".btndelete");
btnAdd.addEventListener("click", function () {
    if (input.value === "") {
      return;
    }
    result.textContent = input.value;
    input.value = "";
  });
    btnEdit.addEventListener("click", function () {
      input.value = result.textContent;

    });
    
    btnDelete.addEventListener("click", function () {
      result.textContent = "";
    });

  