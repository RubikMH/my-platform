import Massege from '@/components/Massege'
import React from 'react'

const ChatBox = ({ masseages }: any) => {
  return (
    <div className='w-full flex flex-col  overflow-auto h-5/6  px-3'>
      {masseages.map((elm: any) => (
        <Massege msg={elm.msg} gust={elm.source === 'Amir'} key={elm._id} />
      ))}
    </div>
  )
}

export default ChatBox
