const express = require('express')

//Middlewares
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const cors = require('cors')
const corsMiddleware = cors()


//Routers
const userRouter = require('./user/router')
const moneyGotchiRouter = require('./moneygotchi/router')

//Models & DB
const db = require('./db')


//Init
const app = express()
const port = process.env.PORT || 4000

app.use(corsMiddleware)
app.use(jsonParser)
app.use(userRouter)
app.use(moneyGotchiRouter)

app.listen(port, () => console.log(`Listening on ${port}`))



