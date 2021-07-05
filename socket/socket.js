const IoConnection = (io) => {
    io.on("connection", (socket) => {
        console.log(socket.id, 'Connected')
        let room;
        socket.on("join_room", (data) => {
            const inRoom = [data.username]
            room = data.room;
            socket.join(data.room)
            socket.broadcast.in(room).emit('join_room_partitipants', inRoom)
        })

        socket.on("message", (data) => {
            socket.in(room).emit("recieve_message", { message: data.message, username: data.username })
        })

        socket.on("typing", (username) => {
            socket.to(room).emit("typing", username)
        })
        
        socket.on("disconnect", () => {
            console.log("User Disconnected...")
        })
    })

}

module.exports = IoConnection