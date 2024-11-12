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

// 	const flattenedObjectOutput = {
// 	  a: 1,
// 	  'b_c': 2,
// 	  'b_d_e': 3,
// 	  'b_d_f': 4,
// 	  g: 5
// 	};

const newObj = {}
function giveKeysAndvalue(key,obj){
if(typeof obj !== "object"){
  newObj[key]=obj
  return
}

for(const [key,value] of Object.entries(obj)){
if(typeof value === "object"){
  giveKeysAndvalue(value)
  
}
}
}


for(const [key,value] of Object.entries(nestedObject)){
  const flattednedObject = giveKeysAndvalue(key,value)
}




// function sum(a, b) {
//     console.log('calculating sum')
    
//     return a+b
    
//   }
  
//   function memoizeSum(fn){
    
//     const obj = {}
    
//   return fn(a,b){
//     if(obj.hasOwnProperty('ab')){
//       return obj['ab']
//     }else{
//       obj['ab'] = a+b
//       return a+b
//     }
//   }
//   }
  
//   const memoizedSum = memoizeSum(sum);
  
//   console.log(memoizedSum(3, 4));  
//   console.log(memoizedSum(3, 4)); 
//   console.log(memoizedSum(5, 6));
  