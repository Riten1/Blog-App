import { useEffect, useState } from "react";
import auth from "./appwrite/auth";
import {useDispatch} from '@reduxjs/toolkit'
import { login, logout } from "./store/authSlice";

function App() {
const [loading, setLoading] = useState(true)
const dispatch = useDispatch()

useEffect(() => {
  auth.getUser().then((userData) => {
    if (userData){
      dispatch(login({userData}))
    }else{
      dispatch(logout())
    }
  }).finally(setLoading(false))
})
  return (
    <>
      <h1>hi</h1>
    </>
  );
}

export default App;
