import express from "express"
import { Server } from "socket.io"
import cors from "cors"
import IOConnection from './socket/socket.js'

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.port || 3002

const server = app.listen(PORT, () => {
  console.log("Server Running on Port 3002...")
})

const io = new Server(server, {cors: {origin: "*"}})

IOConnection(io) // socket.io 

app.get('/', (req, res) => {
  res.status(200).send('Server running ' +PORT)
})