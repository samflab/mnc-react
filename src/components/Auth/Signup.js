import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./Auth.css";
import { useAuth } from "../../context";
import { userSignup } from "../../util/auth-methods";

export const Signup = () => {
  const firstname = useRef("");
  const lastname = useRef("");
  const email = useRef("");
  const password = useRef("");
  const navigate = useNavigate();
  const { authDispatch } = useAuth();

  const signupHandler = async (e) => {
    e.preventDefault();
    try{
    const response = await userSignup(authDispatch, {
      firstName: firstname.current.value,
      lastName: lastname.current.value,
      email: email.current.value,
      password: password.current.value,
    });
    console.log(response)
    if(response.status === 201){
      alert("user created successfully");
        navigate("/");
    }
    else if(response.status === 422){
      alert("email already exists");      
    }
    else{
      alert("unforseen error occured")
    }
  }
  catch(err){
    console.error("error", err);
  }
  };

  return (
    <div>
      <div className="signup-container">
        <form action="" className="login-form">
          <div>
            <label for="firstname">
              Firstname <span className="asterick">*</span>
            </label>

            <input
              type="text"
              ref={firstname}
              name="firstname"
              id="firstname"
              className="firstname"
              autocomplete="off"
              required=""
            />
          </div>

          <div>
            <label for="lastname">
              Lastname <span className="asterick">*</span>
            </label>

            <input
              type="text"
              ref={lastname}
              name="lastname"
              id="lastname"
              className="lastname"
              autocomplete="off"
              required=""
            />
          </div>

          <div>
            <label for="email">
              Email <span className="asterick">*</span>
            </label>

            <input
              type="text"
              ref={email}
              name="email"
              id="email"
              className="email"
              autocomplete="off"
              required=""
            />
          </div>

          <div>
            <label for="password">
              Password <span className="asterick">*</span>
            </label>

            <input
              type="password"
              ref={password}
              name="password"
              id="password"
              className="password"
              required=""
            />
          </div>

          <button className="auth-btn" onClick={signupHandler}>Signup</button>

          <div className="form-links">
            Already have an account?
            <Link to="/login" className="login-link">
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
