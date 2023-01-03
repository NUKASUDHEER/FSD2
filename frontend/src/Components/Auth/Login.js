import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useAlert} from 'react-alert'
import {AccountCircle} from '@mui/icons-material';
import Alert from '@mui/material/Alert';


import "./Login.css";

import { loginUser } from "../../Actions/User";

const Login = () => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const {error, message} = useSelector(state => state.user)

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if(error){
      // <Alert severity="error">{error}</Alert>
      alert.error(error)
      dispatch({
        type:'clearErrors'
      })
    }
    if(message){
      alert.success(message)
      dispatch(
        {type:"clearErrors"}
      )
    }
  }, [error, dispatch, alert, message])
  

  return (
    <div>
      <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>

      <form onSubmit={onSubmitHandler}>
        <AccountCircle style={{color:'red'}}/>
        Email :{" "}
        <input type="email" name="email" onChange={onChangeHandler} required />
        Password:{" "}
        <input
          type="password"
          name="password"
          onChange={onChangeHandler}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
