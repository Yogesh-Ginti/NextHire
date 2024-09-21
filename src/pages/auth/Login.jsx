import React, { useEffect } from "react";
import {
  setPassword,
  setEmail,
  resetForm,
  setIsUser,
  setDisplayName,
} from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../firebase";


function Login() {
  
  const { isUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  

  useEffect(() => {
    if (isUser) {
      navigate(-1);
    }
  }, [isUser]);
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(setEmail(""));
    dispatch(setPassword(""));
  }, []);
  // Event handler for email input change
  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  // Event handler for password input change
  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {displayName} = await loginUser(email, password);
    console.log(displayName)
    dispatch(setDisplayName(displayName))
    dispatch(setIsUser(true));
    dispatch(resetForm());
  };

  return (
    <div className="flex item-center justify-around p-8">
      <div className="">
        <img
          src="./images/login.jpeg"
          alt="login banner"
        />
      </div>

      <div className="">
        <h1 className="text-xl font-medium">Create your Naukri profile</h1>
        <p>Search & apply to jobs from India's No.1 Job Site</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col m-2">
            <label className="font-medium" htmlFor="username">
              Email
            </label>
            <input
              className="text-black p-1 px-2  rounded-lg border border-black"
              type="text"
              placeholder="tell us your Email Id"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="flex flex-col m-2">
            <label className="font-medium" htmlFor="username">
              Password
            </label>
            <input
              className="text-black p-1 px-2  rounded-lg border border-black"
              type="password"
              placeholder="minimum 6 character"
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            className="text-white font-semibold rounded-full px-4 py-2 bg-[#275df5]"
            type="submit"
          >
            login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="text-blue-400" to="/signup">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
