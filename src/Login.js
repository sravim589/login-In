import React, { useState } from "react";
import loginImage from "./login.jpg";

const Login = () => {
  // to track each input value
  const [userLogin, setUserLogin] = useState({
    // here to assign the value
    username: "",
    password: "",
  });

  // here handle change function set the value for its input  fiels first
  const handleInput = (e) => {
    // here this property gets the element on which the event originally occurred
    const name = e.target.name;
    const value = e.target.value;

    //  then it will take intial value of each input field
    //  and then assign the value type by the user to each input field based on its name
    setUserLogin({ ...userLogin, [name]: value });
  };

  return (
    <>
      <section className="loginsection section ">
        <div className="container grid grid-two-column">
          <div className="login-image"></div>
          {/* right side div  */}
          <div className="login-data">
            {/* form start  */}
            <form action="#" className="login-form">
              <div className="form">
                <input
                  type="text"
                  id="email"
                  className="form__input"
                  placeholder=" "
                  name="username"
                  // give value property to each input tag
                  value={userLogin.username}
                  //  when an user cahnge the value ancahnge event will pass & assign its value to handlecahnge function
                  onChange={handleInput}
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
              </div>

              <div className="form">
                <input
                  type="text"
                  id="password"
                  className="form__input"
                  placeholder=" "
                  name="password"
                  value={userLogin.password}
                  onChange={handleInput}
                />
                <label htmlFor="password" className="form__label">
                  Password
                </label>
              </div>

              <div className="forgotPassword">
                <a href="#">Forgot Password</a>
              </div>

              <div className="row">
                <input type="submit" value="Log In" className="btn" />
                <input type="submit" value="Create Account" className="btn" />
              </div>
            </form>

            <p className="common-para">Or You Can Join With</p>
            <div className="social-btn login-btn">
              <a className="fa-solid fa-m" href="#"></a>
              <a className="fa-brands fa-facebook-f" href="#"></a>
              <a className="fa-brands fa-linkedin-in" href="#"></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
