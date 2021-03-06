const express = require('express')
const cors = require('cors')

const userRouter = require('./src/routers/user-router')
const stockRouter = require('./src/routers/stock-router')

require('./src/db/mongoose')

const app = express();
const port = process.env.PORT||8080;

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(stockRouter)

app.get('/', (req, res) => {
    res.send('Welcome!')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})