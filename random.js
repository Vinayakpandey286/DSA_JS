
let str = '102041'
let bracket = []
function putParanthesis(character, index) {
    let iterate = Number(character)

    let openBracket = 0

    for (let i = 0; i < iterate; i++) {
        bracket.push('(')
        openBracket++

    }


    bracket.push(character)

    if (str[index+1] === '0') {           // 402

        for (let i = 0; i < iterate; i++) {
            bracket.push(')')
            openBracket--


        }
    }else{
        let nextnumber  = Number(str[index+1])
        for(let i =0; i <iterate-nextnumber; i++){
            bracket.push(')')

        }
    }

}

function updateStringwithParanthesis(str) {


    for (let i = 0; i < str.length; i++) {
        putParanthesis(str[i], i)
    }

    let updatedString = ''
    for (let i = 0; i < bracket.length; i++) {
        updatedString+= bracket[i]
    }

    return updatedString

}



//(1)0((2))0((((4)))1)
//(1((3))1)

console.log(updateStringwithParanthesis(str))