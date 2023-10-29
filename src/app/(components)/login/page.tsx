import Image from 'next/image'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const page = () => {
    return (
        <>
            <div className='container mx-auto h-screen w-screen flex justify-center items-center'>
                <div className='h-[50%] w-[50%] flex flex-col'>
                    <div className='flex-1/2 flex flex-col justify-center items-center'>
                        <h1 className='text-4xl m-10'>Login</h1>
                    </div>
                    <div className='flex justify-center'>
                        <button className='flex justify-center items-center bg-gray-800 p-6 text-white rounded-full hover:px-10 hover:shadow-lg hover:shadow-black transform duration-200 active:bg-red-900'>Sign in with <FcGoogle className="ml-2" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page