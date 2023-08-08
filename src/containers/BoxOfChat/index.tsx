import React from 'react'
import ChatBox from '../ChatBox'
import InputText from '@/components/InputText'
import { RxAvatar } from 'react-icons/rx'
import { useSelector } from 'react-redux'

const BoxOfChat = () => {
  const { selected } = useSelector((state: any) => state.selectChat)
  console.log('selectChat', selected)

  return (
    <div className='w-full h-screen  '>
      {selected ? (
        <>
          <div className='w-full border-b border-solid border-border border-opacity-50 h-20 flex px-3 items-center'>
            <div className='max-w-xs flex w-full gap-2'>
              <div>
                <RxAvatar size={45} />
              </div>
              <div>
                <span className='block '>Byrom Guittet {selected}</span>
                <span className='block text-xs'>Byrom Guittet</span>
              </div>
            </div>
          </div>
          <ChatBox />
          <InputText />
        </>
      ) : (
        <div className='flex justify-center items-center h-screen'>
          <h2>Select Chat</h2>
        </div>
      )}
    </div>
  )
}

export default BoxOfChat
