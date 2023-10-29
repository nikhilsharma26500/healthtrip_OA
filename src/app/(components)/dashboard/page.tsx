"use client"

import React, { useState } from 'react'

const Page = () => {

  const [telegramToken, setTelegramToken] = useState('')
  const [weatherApiKey, setWeatherApi] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch('/tokens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ telegramToken, weatherApiKey })
    });
    const data = await response.json();
    console.log(data);
  }


  return (
    <>
      <div className='h-screen w-screen flex items-center'>
        <div className='container h-[50%] w-[50%] mx-auto'>
          <h1 className='text-center'>Dashboard</h1>
          <form onSubmit={handleSubmit}>
            <div className='flex items-center justify-center flex-col h-[100%]'>
              <div className='flex flex-col'>
                Telegram Token
                <input type="text" placeholder='Enter your Telegraph Bot API key' className='rounded-sm border border-black required' value={telegramToken} onChange={(event) => setTelegramToken(event.target.value)} />
              </div>
              <div className='flex flex-col'>
                Weather API
                <input type="text" placeholder='Enter your Weather API key' className='rounded-sm border border-black required' value={weatherApiKey} onChange={(event) => setWeatherApi(event.target.value)} />
              </div>

              <button className='bg-blue-600 text-white my-10 p-2 rounded-xl'>Next</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Page