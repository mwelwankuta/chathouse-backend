const express = require ("express")
const socket = require ("socket.io")
const cors = require ("cors")
const IOConnection = require ('./socket/socket.js')

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3002

const server = app.listen(PORT, () => {
  console.log("Server Running on Port...", PORT)
})

const io = socket(server, {cors: {origin: "*"}})

IOConnection(io) // socket.io 

app.get('/', (req, res) => {
  res.status(200).send('Server running ')
})