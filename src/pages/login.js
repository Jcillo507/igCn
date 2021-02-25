import React, { useState, useEffect, useContext } from 'react'
import * as ROUTES from '../constants/routes'
import { Link } from 'react-router-dom'
import FirebaseContext from '../context/firebase'

import iphoneImage from '../images/iphone-with-profile.jpg'
import logo from '../images/logo.png'

const Login = () => {
const { firebase} = useContext(FirebaseContext)

  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  const isInvalid = password === "" || emailAddress === ""

  const handleLogin = async (e)=>{
    e.preventDefault()
    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password)
    } catch (error) {
      setEmailAddress('')
      setPassword('')
      setError(error.message)
    }
  }

  useEffect(() => {
    document.title = ' Login - Instagram'
  }, [])

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src={iphoneImage} alt="iphone instagram" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border mb-4">
          <h1 className="flex justify-center w-full">
            <img src={logo} alt="instagram" className='mt-2 w-6/12 mb-4' />
          </h1>
          {error && <p className='mb-4 text-xs text-red-500'>{error}</p>}
          <form onSubmit={handleLogin} method='POST'>
            <input type="text"
              aria-label='Enter your email address'
              className='text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2'
              placeholder='Email address'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <input type="text"
              aria-label='Enter your password'
              className='text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2'
              placeholder='password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <button type='submit'
              disabled={isInvalid}
              className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${isInvalid && 'cursor-not-allowed opacity-50'
                }`}>
              Login
          </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
          <p className="text-sm">
            Dont' have an account?{' '}
            <Link to={ROUTES.SIGN_UP} className='font-bold'>
              Sign Up
          </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login

