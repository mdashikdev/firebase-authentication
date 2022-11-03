import React, { createContext, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home/Home'
import { logOut } from './components/Manage/firebasemanager'
import Manage from './components/Manage/Manage'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

export const UerContext = createContext();
function App() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate()
  const logout = () => {
    logOut()
    setUser([]);
  }

  return (
    <UerContext.Provider value={{user, setUser}}>
      <div className='flex flex-col w-screen h-screen items-center justify-center'>
        <ul className='flex gap-2 text-white'>
          <li onClick={() => navigate('../')} className='navBtn'>Home</li>
          { user.displayName &&
            <li className='navBtn'>{user.displayName}</li>
          }
          { user.email ?
            <li onClick={logout} className='navBtn'>Logout</li>
            :
            <li onClick={() => navigate('../login')} className='navBtn'>login</li>
          }
        </ul>        
        <Routes>
          <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>} />
          <Route path='/login' element={<Manage/>} />
        </Routes>
      </div>
    </UerContext.Provider>
  )
}

export default App