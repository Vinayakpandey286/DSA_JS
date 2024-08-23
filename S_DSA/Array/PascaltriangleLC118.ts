
// my brute force solution
function generate(numRows: number): number[][] {
    const pascal =  [[1]]
    for(let i =1; i< numRows; i++){
        let temp = new Array(pascal[i-1].length +1).fill(0) //[[1],[1,1],[1,2,1], [1,3,3,1]]
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


function generatepascal(numRows: number): number[][] {
    function generateRow(row: number): number[] {
        let ans = 1;
        let ansRow = [1]; // inserting the 1st element

        // calculate the rest of the elements:
        for (let col = 1; col < row; col++) {
            ans = ans * (row - col);
            ans = ans / col;
            ansRow.push(ans);
        }
        return ansRow;
    }

    let ans:number[][] = [];

    // store the entire pascal's triangle:
    for (let row = 1; row <= numRows; row++) {
        ans.push(generateRow(row));
    }
    return ans;
};