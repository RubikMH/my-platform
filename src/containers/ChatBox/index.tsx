import Massege from '@/components/Massege'
import React from 'react'

const ChatBox = () => {
  return (
    <div className='w-full flex flex-col overflow-auto items-center h-5/6 justify-end px-3'>
      {[1, 2, 3, 4, 5, 6].map((elm) => (
        <Massege gust={elm % 3 === 0} key={elm} />
      ))}
    </div>
  )
}

export default ChatBox
