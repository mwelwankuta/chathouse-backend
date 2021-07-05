import express from "express"
import { Server } from "socket.io"
import cors from "cors"
import IOConnection from './socket/socket.js'

const app = express()

app.use(cors())
app.use(express.json())

const server = app.listen("3002", () => {
  console.log("Server Running on Port 3002...")
})

const io = new Server(server, {cors: {origin: "*"}})

IOConnection(io) // socket.io 