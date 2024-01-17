import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row justify-center justify-around'>
        <img src=".././public/footer.png" alt="" className='w-36 h-auto'/>
        <div className='flex flex-col justify-center'>
            <p>Made by Joan</p>
            <p>&copy; 2024 Kinoti. All rights rserved</p>
        </div>
        <img src=".././public/footer.png" alt="" className='w-36 h-auto'/>
    </div>
  )
}

export default Footer
