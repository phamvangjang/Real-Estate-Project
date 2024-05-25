const express = require('express')
require('dotenv').config() //cau hinh de doc duoc file .env
const cors = require('cors')

const app = express()

app.use(
    cors({
        origin: process.env.CLIENT_URL //cho phep url truy cap duoc tai nguyen 
    })
)

app.use(express.json()) // dinh dang chuoi json khi gui uey cau

const PORT = process.env.PORT || 8888

app.use(express.urlencoded({extended: true})) //doc du lieu tu req.body

app.listen(PORT, () => console.log('SERVER RUNNING ON ' + PORT))