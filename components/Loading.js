import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-[500px] relative flex items-center justify-center mb-4'>
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading