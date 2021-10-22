const express = require('express')
// const bodyParser = require('body-parser')

const app = express()

// router
app.use(require("./routes"));


app.use(express.urlencoded());
app.use(express.json)

app.listen(9999, () => {
    console.log('app running on Port 9999');
})