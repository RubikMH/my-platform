import React from 'react'

interface IProps {
  gust: boolean
}

const Massege: React.FC<IProps> = ({ gust }) => {
  return (
    <div className={`${gust ? ' justify-start' : 'justify-end'} w-full items-center flex h-10`}>
      <div
        className={`${gust ? 'bg-blue-500' : 'bg-red-500'} max-w-xs rounded-lg px-2 py-1 w-full `}
      >
        Massege
      </div>
    </div>
  )
}

export default Massege
