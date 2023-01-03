import axios from "axios";

export const loginUser = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });

    const url = "http://localhost:4000/api/v1/login";
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000"
      },
      withCredentials: true
    });
    console.log(response);
    dispatch({
      type: "LoginSuccess",
      payload: response.data.user,
    });
    localStorage.setItem("token",response.data.token);

  } catch (error) {
    // console.log(error);
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};

export const registerUser = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "signUpReqest" });
    const url = "http://localhost:4000/api/v1/register";
    const { data } = axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({ type: "signUpSuccess", payload: data.user });
    localStorage.setItem("user",data.token);
  } catch (error) {
    dispatch({ type: "signUpFailure", payload: error.data.response.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({type:"loadUserRequest"});

    const {data} = await axios.get("http://localhost:4000/api/v1/me",{withCredentials: true});
    console.log(data);
    dispatch({
      type:"loadUserSuccess",
      payload: data.user
    })
        
  } catch (error) {
    dispatch({
      type:"loadUserFailure",
    })
  }
};

export const logOut = () => async(dispatch)=>{
  try {
    dispatch({
      type:"logOutRequest"
    })

    const res = await axios.get("http://localhost:4000/api/v1/logout", {withCredentials: true})
    console.log(res);
    dispatch({
      type:"logOutSuccess",
    })
  } catch (error) {
    dispatch({type:"logOutFailure", payload: error.response.data.message})
  }
}