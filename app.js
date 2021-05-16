const express = require('express')
const cors = require('cors')

const userRouter = require('./src/routers/user-router')
const stockRouter = require('./src/routers/stock-router')

require('./src/db/mongoose')

const app = express();
const port = 4000;

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(stockRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})