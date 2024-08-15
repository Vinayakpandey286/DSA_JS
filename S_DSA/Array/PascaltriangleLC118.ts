
// my brute force solution
function generate(numRows: number): number[][] {
    const pascal =  [[1]]
    for(let i =1; i< numRows; i++){
        let temp = new Array(pascal[i-1].length +1).fill(0)
        for(let j = 0; j< temp.length; j++){
            if(j===0 || j === temp.length-1){
                temp[j] =1
            }else{
                temp[j]=pascal[i-1][j]+ pascal[i-1][j-1] //[1 2 1]
            }
        }
        pascal.push(temp)
    }

    return pascal
};