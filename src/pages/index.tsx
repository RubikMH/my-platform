import BoxOfChat from '@/containers/BoxOfChat'
import ListChats from '@/containers/ListChats'
import React, { useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

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
