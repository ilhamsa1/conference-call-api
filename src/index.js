const express = require('express')
const cors = require('cors')
const port = 4300;
const app = express()

app.use(cors())

app.use((err, req, res, next) => {
    if (err) {
        console.log('error')
      return
    }
    next()
})

app.listen(port, () => {
    console.log('app listen port ' + port)
})
