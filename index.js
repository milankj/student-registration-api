const express = require('express')
const db = require('./db')
const studentRouter = require('./src/routes/student.router')
const dotenv = require('dotenv')
const sequelize = require('./db')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
dotenv.config({ path: './.env' })

const PORT = process.env.PORT || 3000

const initialSqlServer = () => {
    sequelize
        //.sync({ force: true }) //drops table and create new table
        .sync()
        .then(result => {
            console.log('DB created and connected!!')
        })
        .catch(err => {
            console.log(err)
        })
}

initialSqlServer()

app.use('/api/v1/student', studentRouter)

app.listen(PORT, () => {
    console.log(`Port started at http://localhost:${PORT}`)
})