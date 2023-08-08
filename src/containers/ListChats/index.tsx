import PersonText from '@/components/PersonText'
import React from 'react'
import { BsPersonSquare } from 'react-icons/bs'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Space from '@/components/Space'
import { useDispatch } from 'react-redux'
import { select } from '@/reducers/selectReducers'

const ListChats = () => {
  const dispatch = useDispatch()

  return (
    <div className='w-full min-h-screen border-l border-r border-solid border-[#627e93]  border-opacity-30 shadow-lg'>
      <Space />
      <Space />
      <div className='w-full flex   px-3'>
        <h4 className='w-1/2 mt-5 font-bold'>Chats</h4>
        <div className=' flex justify-evenly mt-5 w-1/2'>
          <BsPersonSquare
            size={30}
            className=' border border-solid px-1 text-text opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer  border-text rounded-md'
          />
          <AiOutlinePlusCircle
            size={30}
            className=' border border-solid px-1 text-text opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer border-text  rounded-md'
          />
        </div>
      </div>
      <Space />

      <div className='p-2'>
        {['Amir', 'Jadi', 'Alireza'].map((elm) => (
          <PersonText onClick={() => dispatch(select(elm))} key={elm} name={elm} />
        ))}
      </div>
    </div>
  )
}

export default ListChats
