import { useFormik } from 'formik';
import React, { useContext } from 'react'
import { CreateUser } from '../Manage/firebasemanager';
import { loadingContext } from '../Manage/Manage';

function Register({loginsts,setloginsts}) {
  const setloading = useContext(loadingContext);
  const {values,handleSubmit,handleBlur,handleChange,resetForm} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      const name = `${values.firstName} ${values.lastName}`;
      setloading(true)
      CreateUser(name,values.email,values.password)
      .then(res => {
        setloading(false)
      })
      .catch(err => {
        console.log(err)
      })
      resetForm()
    }
  })
  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2 p-4 rounded-xl'>
        <h1 className='text-3xl font-semibold'>Register</h1>
        <div className='flex gap-2 mt-4'>
          <input id="firstName" onChange={handleChange} onBlur={handleBlur} value={values.firstName} className='inpt_field' type="text" placeholder='First name...' />
          <input id="lastName" onChange={handleChange} onBlur={handleBlur} value={values.lastName} className='inpt_field' type="text" placeholder='Last name...' />
        </div>
        <input id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className='inpt_field' type="email" placeholder='Email...' />
        <input id="password" onChange={handleChange} onBlur={handleBlur} value={values.password} className='inpt_field' type="password" placeholder='Password...' />
        <input className='cursor-pointer bg-orange-500 hover:bg-orange-600 duration-200 py-2 focus:ring ring-orange-300 rounded-lg text-white font-semibold' type="submit" value='Register' />
        <p>Already have an account? <span onClick={() => setloginsts(!loginsts)} className="hover:underline cursor-pointer text-orange-500">Login</span></p>
    </form>
  )
}

export default Register