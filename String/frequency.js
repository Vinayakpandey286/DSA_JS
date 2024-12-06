function frequency(str) {

    let splitarray = str.split('').sort((a,b)=> a.localeCompare(b))

    let  count  = 0
    let newStr = ''

    for(let i =0; i <splitarray.length; i++){
        if(splitarray[i]===splitarray[i+1]){
            count++
        }else{
            count++
            newStr+= splitarray[i]+String(count)
            count = 0
        }      
    }


    
    console.log(newStr, splitarray)    

}

frequency("ggggoolaaanng")

