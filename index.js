const express = require('express')

const server = express()
var PORT = process.env.PORT || 5555


server.listen(PORT, () => {
    console.log(`=======Listening on ${PORT}=========`)
})