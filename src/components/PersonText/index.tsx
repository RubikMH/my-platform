import React from 'react'
import { RxAvatar } from 'react-icons/rx'

interface IProps {
  onClick: () => void
}
const PersonText: React.FC<IProps> = ({ onClick }) => {
  return (
    <div
      className=' border border-solid rounded-md border-[#627e93] my-2 cursor-pointer hover:border-text transition-all duration-300 p-2'
      onClick={onClick}
    >
      <div className='w-full flex items-center'>
        <div className='mr-2'>
          <RxAvatar size={40} />
        </div>
        <div>
          <span className='block'>Byrom Guittet</span>
          <span className='text-[#627e93] truncate '>I sent you all the files. Got</span>
        </div>
      </div>
    </div>
  )
}

export default PersonText
