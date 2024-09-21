import React, { useEffect } from "react";
import { setUsername, setPassword, setEmail, setMobile, resetForm, setIsUser } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../../firebase";

function SignUp() {
  const dispatch = useDispatch()
  const {username, email, password , mobile} = useSelector(state=>state.auth)
  const {isUser} = useSelector(state => state.auth)
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(setUsername(''))
    dispatch(setEmail(''))
    dispatch(setPassword(''))
    dispatch(setMobile(''))
  },[])
  useEffect(()=>{
    if(isUser){
      navigate(-1)
    }
  },[isUser])
  // Event handler for username input change
  const handleUsernameChange = (e) => {
    dispatch(setUsername(e.target.value));
  };

  // Event handler for email input change
  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  // Event handler for password input change
  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  // Event handler for password input change
  const handleMobileChange = (e) => {
    dispatch(setMobile(e.target.value));
  };
  

  const handleSubmit = async (e)=>{
    e.preventDefault();
    await signupUser(username,email,password, mobile)
    dispatch(setIsUser(true))
    dispatch(resetForm())
  }


  return (
    <div className="flex item-center justify-around p-8">
      <div className="">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>

      <div className="">
        <h1 className="text-xl font-medium">Create your Naukri profile</h1>
        <p>Search & apply to jobs from India's No.1 Job Site</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col m-2">
            <label className="font-medium" htmlFor="username">Username</label>
            <input
              className="text-black p-1 px-2 rounded-lg border border-black"
              type="text"
              required
              name="username"
              id="username"
              placeholder="what is your name"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="flex flex-col m-2">
            <label className="font-medium" htmlFor="username">Email</label>
            <input
              className="text-black p-1 px-2  rounded-lg border border-black"
              type="text"
              required
              placeholder="tell us your Email Id"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="flex flex-col m-2">
            <label className="font-medium" htmlFor="username">Password</label>
            <input
              className="text-black p-1 px-2  rounded-lg border border-black"
              type="password"
              required
              placeholder="minimum 6 character"
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex flex-col m-2">
            <label className="font-medium" htmlFor="username">Mobile</label>
            <input
              className="text-black p-1 px-2  rounded-lg border border-black"
              type="number"
              required
              placeholder="Enter your mobile number"
              name="mobile"
              id="mobile"
              value={mobile}
              onChange={handleMobileChange}
            />
          </div>
          <button  className="text-white font-semibold rounded-full px-4 py-2 bg-[#275df5]" type="submit">register</button>
        </form>
        <p>Already have an account? <Link className="text-blue-400" to='/login'>Login</Link></p>
      </div>
    </div>
  );
}

export default SignUp;
