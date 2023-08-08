import React from 'react'
import { RiSendPlane2Line } from 'react-icons/ri'

const InputText = () => {
  return (
    <div className='h-10  w-full '>
      <form className=' relative'>
        <input
          type='text'
          name=''
          id=''
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
