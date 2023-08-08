import { DefaultEventsMap } from '@socket.io/component-emitter'
import React, { useEffect, useState } from 'react'
import { RiSendPlane2Line } from 'react-icons/ri'
import { Socket, io } from 'socket.io-client'

let socket: Socket<DefaultEventsMap, DefaultEventsMap>

const InputText: React.FC = () => {
  const [message, setMessage] = useState('')

  const sendMsg = async () => {
    socket = io()
  }
  useEffect(() => {
    sendMsg()
  }, [])

  return (
    <div className='h-10  w-full '>
      <form
        className=' relative'
        onSubmit={(e) => {
          e.preventDefault()
          socket.emit('send-message', {
            username: 'me',
            message: message,
          })
        }}
      >
        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          type='text'
          placeholder='Enter Your Massege ...'
          className='w-full rounded-xl focus-visible:outline-none border-2
           border-border bg-[#193748]  border-solid h-10 px-2'
        />
        <button type='submit' className='absolute bg-blue-700 p-2 rounded-md top-1 right-1.5'>
          <RiSendPlane2Line size={15} />
        </button>
      </form>
    </div>
  )
}

export default InputText
