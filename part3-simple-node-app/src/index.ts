import 'dotenv/config'

import express from "express";

const app = express()
const port = 3000
console.log(process.env.API_KEY);
app.get('/', (req, res) => {
  res.send('Hello World! 1' + process.env.API_KEY )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
