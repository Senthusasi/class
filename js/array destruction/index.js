// const array=[1, 2, 3];
// const[a, , b]=array;
// console.log(a);
// console.log(b);

// const array = [1,2,3,4,5];
// const [a,b , ,...rest] = array;
// console.log(a);
// console.log(b);
// console.log(rest);


// const array =[{ pop:"remove", push:"add" },2,3];
// const [a, b, { pop, push }]=array;
// console.log(a);
// console.log(b);
// console.log(pop);
// console.log(push);

// const array = [{ pop: "remove", push: "add" }, 2, 3];
// const [a, b, { pop, push }] = array;
// console.log(a);   
// console.log(b);   
// console.log(pop); 
// console.log(push);

// const array =[1, 2, [3, 4]]
// const [a, b, [c, d]]=array;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// variable destraction

// let a,b;
// [a, b]=[1,2];
// console.log(a);
// console.log(b);

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };
//   const { a:a1=0, b:b1=6 } = obj;
//   console.log(a1); 
//   console.log(b1);  

  const { a:a1, b:b1, ...rest } = obj;
console.log(a1);    
console.log(b1);    
console.log(rest);