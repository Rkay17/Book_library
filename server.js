const express = require('express')

const dbConnect = require("../app");

const app = express();

const router = require('./routes')

app.use('/tasks',router)

app.use(express.json());

dbConnect();

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})