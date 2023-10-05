const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({message: 'delayed success'})  
        }, 500)
    })
}

const rejectedPromise = () => {
    return new Promise((reject) => {
        setTimeout(() => {
            reject({error: 'delayed exception!'})
        }, 500)
    })
}

resolvedPromise().then(result =>{
    console.log(result)
}).catch(err => {
    console.log(err)
})

rejectedPromise().then(result =>{
    console.log(result)
}).catch(err => {
    console.log(err)
})