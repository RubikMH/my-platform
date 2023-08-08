import BoxOfChat from '@/containers/BoxOfChat'
import ListChats from '@/containers/ListChats'
import { DefaultEventsMap } from '@socket.io/component-emitter'
import React, { useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

let socket: Socket<DefaultEventsMap, DefaultEventsMap>

const Home = () => {
  const [input, setInput] = useState('')
  // const socketInitializer = async () => {
  //   await fetch('http://localhost:8000/socket')
  //   socket = io()

  //   socket.on('connect', () => {
  //     console.log('connected')
  //   })

  //   socket.on('update-input', (msg) => {
  //     setInput(msg)
  //   })
  // }
  // useEffect(() => {
  //   socketInitializer()
  // }, [])

  const [time, setTime] = React.useState('fetching')
  React.useEffect(() => {
    socket = io('http://localhost:8000')
    socket.on('connect', () => console.log(socket.id))
    socket.on('connect_error', () => {
      setTimeout(() => socket.connect(), 5000)
    })

    socket.on('disconnect', () => setTime('server disconnected'))
  }, [])

  return (
    <main className='w-full flex  '>
      <div className='w-1/12'></div>

      <div className='w-3/12'>
        <ListChats />
      </div>

      <div className='w-9/12'>
        <BoxOfChat />
      </div>
    </main>
  )
}

export default Home
