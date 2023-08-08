import React, { useEffect, useState } from 'react'
import ChatBox from '../ChatBox'
import InputText from '@/components/InputText'
import { RxAvatar } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import { DefaultEventsMap } from '@socket.io/component-emitter'
import Space from '@/components/Space'
import { Transition } from '@headlessui/react'
import { Socket, io } from 'socket.io-client'

let socket: Socket<DefaultEventsMap, DefaultEventsMap>

const BoxOfChat: React.FC = () => {
  const [isShowing, setIsShowing] = useState(false)
  const [chats, setChats] = useState([])
  const { selected } = useSelector((state: any) => state.selectChat)

  const [time, setTime] = React.useState('fetching')
  useEffect(() => {
    socket = io('http://localhost:8000')
    socket.on('connect', () => console.log(socket.id))
    socket.on('connect_error', () => {
      setTimeout(() => socket.connect(), 5000)
    })

    socket.emit('select-chat-user')

    socket.on('update-chats', (chat) => {
      if (chat) {
        console.log(chat)
        setChats(chat)
        setIsShowing(true)
      }
    })

    // socket.on('disconnect', () => setTime('server disconnected'))
  }, [selected])

  return (
    <div>
      <Transition
        className='w-full h-screen  '
        show={isShowing}
        enter='transition-opacity duration-75'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-150'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        {selected ? (
          <>
            <div className='w-full border-b border-solid border-border border-opacity-50 h-20 flex px-3 items-center'>
              <div className='max-w-xs flex w-full gap-2'>
                <div>
                  <RxAvatar size={45} />
                </div>
                <div>
                  <span className='block '>{selected}</span>
                  <span className='block text-xs'>Online</span>
                </div>
              </div>
            </div>
            <ChatBox masseages={chats} />
            <Space />
            <InputText socket={socket} />
          </>
        ) : (
          <div className='flex justify-center items-center h-screen'>
            <h2>Select Chat</h2>
          </div>
        )}
      </Transition>
    </div>
  )
}

export default BoxOfChat
