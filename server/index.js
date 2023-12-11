const express = require("express")
const bcrypt = require("bcrypt")
const bodyparser = require("body-parser")

const app = express();

const PORT = 3000

app.get("/",async (req, res) => {
    res.json({
        text:"OKAY",
    })
})

app.listen(PORT, () => {
    console.log(`Port is running on port ${PORT}`)
})