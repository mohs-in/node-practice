const express = require('express')

const app = express()

// app.use((req, res, next) => {
//     console.log(`In the middleware`)
//     next()
// })

// app.use((req, res, next) => {
//     console.log(`in another middleware`)
//     res.end(`hi`)
// })

app.use('/users', (req, res, next) => {
    res.send(`<h1>hi from the users page</h1>`)
})

app.use('/', (req, res, next) => {
    res.send(`<h1>hi from the root page</h1>`)
})

app.listen(3000, () => {
    console.log(`server listening on port: 3000`)
})