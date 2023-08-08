import React from 'react'

interface IProps {
  gust: boolean
  msg: string
}

const Massege: React.FC<IProps> = ({ gust, msg }) => {
  return (
    <div className={`${gust ? ' justify-start' : 'justify-end'} w-full  flex  items-center my-4`}>
      <div
        className={`${gust ? 'bg-blue-500' : 'bg-red-500'} max-w-xs rounded-lg px-2 py-1 w-full `}
      >
        {msg}
      </div>
    </div>
  )
}

export default Massege
