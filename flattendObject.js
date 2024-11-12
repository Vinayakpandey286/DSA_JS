function flattenObject(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}_${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4
    }
  },
  g: 5
};

debugger
const flattenedObjectOutput = flattenObject(nestedObject);
console.log(flattenedObjectOutput);





// function sum(a, b) {
//     console.log('calculating sum')
    
//     return a+b
    
//   }
  
//   function memoizeSum(fn){
    
//     const value = {}
    
//   return fn(a,b){
//     if(value.hasOwnProperty('ab')){
//       return value['ab']
//     }else{
//       value['ab'] = a+b
//       return a+b
//     }
//   }
//   }
  
//   const memoizedSum = memoizeSum(sum);
  
//   console.log(memoizedSum(3, 4));  
//   console.log(memoizedSum(3, 4)); 
//   console.log(memoizedSum(5, 6));
  