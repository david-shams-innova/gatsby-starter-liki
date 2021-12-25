let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!")
    }, 1000)
})

myPromise.then( message => console.log(message));