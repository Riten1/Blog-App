import React from 'react'
import auth from '../../appwrite/auth'
import  { logout } from '../../store/authSlice'
import useDispatch from 'react-redux'

const LogoutBtn = () => {
  const dispatch = useDispatch()

  function handleLogout (){
    auth.logout().then(() => {
      dispatch(logout())
    })
  }

  return (
   <button className='inline-block px-6 py-2 duration-200 hover: bg-blue-100 rounded-full' onClick={handleLogout}>Logout</button>
  )
}

export default LogoutBtn