// let a=2;
// let b=a;
// b=5;
// console.log(a);
// console.log(b);

// const a=[1,2,3,4,5];
// const b=a;
// const c=a;
// c[0]=0;
// console.log(a);
// console.log(b);
// console.log(c);

// const a=[1,2,4,5];
// const b=[...a];
// b[0]=0;
// console.log(b);

const a={
    f:"xxx",
    l:"yyy",
    age:10,};
const b={...a};
a.age=20;
console.log(a);
console.log(b);