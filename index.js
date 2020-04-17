const express = require('express')
const uploadRouter = require("./routers/upload/upload-router")
const server = express()
var PORT = process.env.PORT || 5555

server.use("/upload",uploadRouter)
server.listen(PORT, () => {
    console.log(`=======Listening on ${PORT}=========`)
})