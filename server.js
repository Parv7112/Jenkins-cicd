const express = require('express')
const app = express()
const port = 3000
const courseRouter = require('./router/courseRouter')
const connectDB = require('./config/db')

connectDB();

app.use(express.json())
app.use(courseRouter)

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})