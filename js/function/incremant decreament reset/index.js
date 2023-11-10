// let count=0;
// const valueText = document.getElementsByTagName("valueText");


// function Increment() {
//   count++;
//   console.log("increment");
//   valueText.InnerText=count;
// }
// function Decrement() {
//   count--;
//   console.log("decrement");
//   valueText.InnerText=count;

// }
// const doc = document;

// function inc() {
//   const h1 = doc.getElementsByTagName("h1")[0];
//   h1.textContent = Number(h1.textContent) + 1;
// }
const doc = document;

function increment() {
  const span = doc.getElementsByTagName("span")[0];
  span.textContent = Number(span.textContent) + 1;
}
const doc1 = document;

function decrement() {
  const span = doc1.getElementsByTagName("span")[0];
  span.textContent = Number(span.textContent) - 1;
}

function reset() {
  const res=document.getElementById();
  res.reset();  
}