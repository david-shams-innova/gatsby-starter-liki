let cancelInterval = setInterval(() => console.log(new Date()), 1000)

setTimeout(() => clearInterval(cancelInterval), 5000)