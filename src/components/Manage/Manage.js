import React, { useState } from 'react'
import Login from '../Login/Login'
import Register from '../Register/Register'
import facebook from './facebook.png'
import Google from './google.png'
import {BounceLoader} from 'react-spinners'
import { createContext } from 'react'

export const loadingContext = createContext();

function Manage() {
  const [loginsts, setloginsts] = useState(true)
  const [loading, setloading] = useState(false)
  return (
    <div className='w-full md:w-8/12 lg:w-3/12 flex flex-col items-center gap-2 shadow-lg p-4 rounded-xl'>
    <loadingContext.Provider value={setloading}>
      {
        loading ? 
        <BounceLoader color="#ffa500" />
        :
        loginsts ? <Login loginsts={loginsts} setloginsts={setloginsts} /> : <Register loginsts={loginsts} setloginsts={setloginsts} />
      }
    </loadingContext.Provider>

        <hr/>
        <div className='mt-3 flex flex-col gap-2'>
          <div className='shadow py-1 hover:bg-slate-100 duration-150 flex gap-2 justify-center items-center w-full cursor-pointer px-2 font-semibold text-md rounded-full'>
            Login with Google
            <img src={Google} className='w-10' alt=""/>
          </div>
          <div className='shadow py-1 hover:bg-slate-100 duration-150 flex gap-2 justify-center items-center w-full cursor-pointer px-2 font-semibold text-md rounded-full'>
            Login with Facebook
            <img src={facebook} className='w-10' alt=""/>
          </div>
        </div>
    </div>
  )
}

export default Manage