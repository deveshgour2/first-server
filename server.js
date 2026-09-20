const express = require("express")

const app = express()

app.get('/', (req, res) => {
    res.send("Hello, World!")
})


app.get('/', (req, res) => {
    res.send("This is my first server")
})
app.listen(3000)