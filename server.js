const express = require('express')
const app = express()

app.use(express.static('build'))

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Blog app is listening at ${port}`)
})
