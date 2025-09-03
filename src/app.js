const express = require('express')
const router = require('./routes')
const server = express()

server.use(express.json())
server.use(router)

const PORT = 3000
server.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}`))