function lowerCaseWords(mixedArr){
    return new Promise((resolve, rejected) => {
        if(mixedArr.length == 0){
            rejected("Array input is empty")
        }else{
            const filteredArr = mixedArr.filter(item => typeof item == "string");
            const newArr = filteredArr.map(item => item.toLowerCase())
            resolve(newArr)
        }
    })
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

lowerCaseWords(mixedArray).then(result =>{
    console.log(result)
}).catch(err => {
    console.log(err)
})