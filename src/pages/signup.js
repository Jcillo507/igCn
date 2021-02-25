import React, {useState , useEffect , useContext}from 'react'
import logo from '../images/logo.png'


const SignUp = () => {
  return (
    <div className="container flex mx-auto max-w-xs items-center h-screen">
      <div className="flex flex-col">
        <div className="flex flex-col items-center bg-white p-4 border mb-4">
          <h1 className="flex justify-center w-full">
            <img src={logo} alt="instagram" className='mt-2 w-6/12 mb-4'/>
          </h1>
          <form method="POST">
            <input type="text"
            aria-label='Enter your username'
            className='text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-4'
            />

          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp