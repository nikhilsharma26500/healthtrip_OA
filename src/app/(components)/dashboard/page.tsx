import React from 'react'

const page = () => {
  return (
    <>
      <div className='h-screen w-screen flex items-center'>
        <div className='container h-[50%] w-[50%] mx-auto'>
            <h1>Dashboard</h1>
          <div className='flex items-center justify-center flex-col h-[100%]'>
              <div className='flex flex-col'>
                  Telegram Token
                  <input type="text" className='border border-black' />
              </div>
              <div className='flex flex-col'>
                  Weather API key
                  <input type="text" className='border border-black' />
              </div>
            
              <button className='bg-blue-600 text-white my-10 p-2 rounded-xl'>Next</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default page