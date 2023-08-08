import BoxOfChat from '@/containers/BoxOfChat'
import ListChats from '@/containers/ListChats'
import React from 'react'

const Home = () => {
  return (
    <main className='w-full flex  '>
      {/* <div className='w-1/12'></div> */}
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
