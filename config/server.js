const port = 4000

//body parse of requisition

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({extended : true}))
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`server listening on port: ${port}`)
})

module.exports = server