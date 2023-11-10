// function maxno(x,y,z) {
//     if(x>y)
//     return x;
// elseif(y>z)
// return y;
// elseif(z>x)
// return z;
// }


// function number(num){
//     // console.log(num);
//     const newNumber=num+1;
// if(newNumber>=0){
//     return newNumber;
// number(newNumber);
// }
// }
// number(5);
// const n=1;
// const num=5;
// function number(){
//     for(let i=n;i>=10;i++){
//        num=+i;
//     }
// }
// number();
// console.log(num);
// function number() {
//     let text="";
//     for(let i=0;i>10;i++){
//         text=+i;
//     }

    
// }
// number();


// const number = 1000;

// let sum = 0;
// function numNum(){

// for(i = 1; i <= number; i++){
//   console.log(i);
//   sum = sum + i;
// }
// }
// numNum()
// console.log(`sum of first ${number} natural numbers is: `, sum);


// function twoArray(arr) {
//     for(var i=0;i<arr.length;i++){
//         for(var j=0;j<arr[0].length;j++){
//              console.log(arr[i][j]);
//         }
//     }
  
// }
// var arr=[[1,2],
//          [3,4],
//          [5,6]];
// twoArray(arr);
function twoArray(arr) {
        for(var i=0;i<arr.length;i++){
            for(var j=i;j<arr.length;j++){
                 console.log(arr[i][j]);
            }
        }
      
    }
    
    twoArray(5);