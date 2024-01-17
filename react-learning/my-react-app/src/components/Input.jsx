import React from 'react'

const Input = () => {
  return (
    <div className='flex items-center justify-center m-4'>
      <input type="text" placeholder='Add Task ...' className='border-solid border-2 border-black rounded-tl-lg rounded-bl-lg p-1 outline-none'/>
      <button className='border-solid border-2 border-black rounded-bl-none rounded-tl-none p-1 outline-none'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    </button>
    </div>
  )
}

export default Input
