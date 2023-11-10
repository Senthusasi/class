const l1=[1,3,4,5];
const l2=[1,6,7,9];

function sum(...rest) {
      let output = 0;
      for (const i of rest) {
        output += i;
      }
      return output;
    }





