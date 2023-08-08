import { Server } from 'Socket.IO'
import type { NextApiRequest, NextApiResponse } from 'next'

const SocketHandler = (req: any, res: any) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on('connection', (socket) => {
      socket.on('chat-update', (ID) => {
        console.log(ID)

        socket.broadcast.emit('chat-change', ID)
      })
    })
  }
  res.end()
}

export default SocketHandler
