import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { useAuth } from "../../context";
import { userLogin } from "../../util/auth-methods";
import { ACTION_TYPE } from "../../util";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../Loader";

export const Login = () => {
  const navigate = useNavigate();
  const email = useRef("");
  const password = useRef("");
  const { authState, authDispatch } = useAuth();

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await userLogin(authDispatch, {
        email: email.current.value,
        password: password.current.value,
      });

      if (response.status === 200) {
        navigate("/");
      }

      if (!response?.data.foundUser) {
        throw Error("No user found");
      }
    } catch (err) {
      toast.error("Login failed! Incorrect email or password.");
      authDispatch({
        type: ACTION_TYPE.FAILURE,
        payload: {
          loading: false,
        },
      });
      navigate("/login");
    }
  };
  return (
    <div>
      {authState.loading && <Loader />}
      <div className="login-container">
        <form action="" className="login-form">
          <div>
            <label htmlFor="email" className="form-label">
              Email <span className="asterick">*</span>
            </label>

            <input
              type="email"
              ref={email}
              name="email"
              className="email"
              autoComplete="off"
              required
            />
          </div>

          <div>
            <label htmlFor="password">
              Password <span className="asterick">*</span>
            </label>

            <input
              type="password"
              ref={password}
              name="password"
              className="password"
              required
            />
          </div>

          <button className="auth-btn" onClick={(e) => loginSubmitHandler(e)}>
            Login
          </button>

          <div className="form-links">
            <div className="auth-form-links">
              Don't have an account?
              <Link to="/signup" className="signup-link-login">
                Create an account
              </Link>
            </div>
            <div className="auth-form-links">
              Lost Password?
              <Link
                to="/forget-password"
                className="forgot-password password-link"
              >
                Reset your Password
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
