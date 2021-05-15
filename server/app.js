require('./models-relation')
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true, limit: 60000 }))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept",
      );
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next()
})
const port = 9000

// To use controller
app.use(require('./controllers/users'))
app.use(require('./controllers/tasks'))
app.use(require('./controllers/messages'))

app.listen(port)