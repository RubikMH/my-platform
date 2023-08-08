import React from 'react'

const ChatBox = () => {
  return (
    <div className='w-full flex flex-col overflow-auto items-center h-5/6 justify-end'>
      {[1, 2, 3, 4, 5, 6].map((elm) => (
        <div key={elm}>ChatBox</div>
      ))}
    </div>
  )
}

export default ChatBox
