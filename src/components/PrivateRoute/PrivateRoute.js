import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UerContext } from '../../App';

function PrivateRoute({children}) {
  const {user, setUser} = useContext(UerContext);
  return (
    user.emailVerified ? children : <Navigate to='../login' />
  )
}

export default PrivateRoute