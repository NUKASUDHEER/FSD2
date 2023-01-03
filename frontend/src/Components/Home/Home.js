import React from 'react'
import "./Home.css"
import { useDispatch } from 'react-redux'

import { Button } from '@mui/material'
import { logOut } from '../../Actions/User'




const Home = () => {
  const dispatch = useDispatch();
  
  const logOutHandler = (e) => {
    e.preventDefault();
    dispatch(logOut())
  }
  return (
    <>
      Home
      <Button variant='primary' style={{color:'white', backgroundColor:'red'}} onClick = {logOutHandler}>Log out</Button>
    </>
    )
}

export default Home