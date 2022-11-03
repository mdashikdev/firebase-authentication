import { useFormik } from 'formik';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UerContext } from '../../App';
import { loginUser } from '../Manage/firebasemanager';
import { loadingContext } from '../Manage/Manage';

function Login({loginsts,setloginsts}) {
  const {user, setUser} = useContext(UerContext);
  const navigate = useNavigate()
  const setloading = useContext(loadingContext);

  const {values,handleSubmit,handleBlur,handleChange,resetForm} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      setloading(true)
      loginUser(values.email, values.password)
      .then(res => {
        console.log(res)
        setloading(false)
        if (res.displayName) {
          setUser(res);
          navigate('../')
        }else{
          alert(res)
        }
      })
      .catch(err => {
        setUser(err)
      })
      resetForm()
    }
  })

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2 p-4 rounded-xl'>
        <h1 className='text-3xl font-semibold'>Login</h1>
        <input id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className='inpt_field' type="email" placeholder='Email...' />
        <input id="password" onChange={handleChange} onBlur={handleBlur} value={values.password} className='inpt_field' type="password" placeholder='Password...' />
        <span className="hover:underline cursor-pointer text-orange-500">Forgot password</span>
        <input className='cursor-pointer bg-orange-500 hover:bg-orange-600 duration-200 py-2 focus:ring ring-orange-300 rounded-lg text-white font-semibold' type="submit" value='Login' />
        <p>Not have an account? <span onClick={() => setloginsts(!loginsts)} className="hover:underline cursor-pointer text-orange-500">Register</span></p>
    </form>
  )
}

export default Login