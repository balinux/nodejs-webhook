const express = require('express')
// const bodyParser = require('body-parser')

const app = express()

// router

app.use(
    express.urlencoded({
      extended: true
    })
  )
    
app.use(express.json())

app.use(require("./routes"));


app.listen(9999, () => {
    console.log('app running on Port 9999');
})