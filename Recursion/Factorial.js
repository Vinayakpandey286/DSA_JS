let arr =[10,30,20,40]

function frogJump(n){
  if(n>arr.length-1) return
  
  let first_jump = frogJump(n+1)
  let second_jump = frogJump(n+2)
  
}

console.log(frogJump(0))