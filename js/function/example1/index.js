// function welcome(name) {
//    console.log("hi"+name+",welcome to my website"); 
// }
// welcome("roobini")
   
// const donations=[45,89,90,78,6754];
// donations.reduce(function(previousVal, currentVal){
// console.log("previousVal", previousVal);
// console.log("currentVal", currentVal);
// return previousVal+currentVal;
// });
// console.log("totalDonations",totalDonations);

const shoppingCart =[
    { id:1, item: "milk", cost:45},
    { id:2, item: "egg", cost:50},
    { id:3, item: "oil", cost:150},];

    let totalCost = shoppingCart.reduce(function(accumulator, currentVal){
        return accumulator+currentVal.cost;
    },0);

    console.log("total cost:",totalCost);


// const a1=[1,2,3,4,5];
// let double=[];
// for(let i=0;i<a1.length;i++){
//     double.push(a1[i]*2);
// }
// console.log(double);

// let out=result.map(function(array,logicFun){

// });

// function mymap(a1,logicfun){
//     const output=[];
//     for(let i=0;i<a1.length;i++){
//         output.push(logicfun(a1[i],i));
//     }
//     return output;
// }
// function double(e,i){
//     return e*2;
// }
// const d=mymap(a1, e =>e*2);
// console.log(d);
