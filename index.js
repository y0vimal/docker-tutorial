const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([{
      "name" : "hello",
      "mail" : "abc@gmail.com"
  }])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})