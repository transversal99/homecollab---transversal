require('./models-relation')
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
    next()
})
const port = 9000

// To use controller
app.use(require('./controllers/users'))
app.use(require('./controllers/objectives'))
app.use(require('./controllers/messages'))

app.listen(port)