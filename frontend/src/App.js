import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { useAlert } from "react-alert";

import Home from "./Components/Home/Home";
import Login from "./Components/Auth/Login";
// import Navbar from './Components/Navbar/Navbar'
import Loader from "./Components/Loader/Loader";

import { loadUser } from "./Actions/User";

function App() {
  // const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {

    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={isAuthenticated ? <Home /> : <Login />}
        />
        <Route exact path="/loader" element={<Loader />} />
      </Routes>
    </>
  );
}

export default App;
