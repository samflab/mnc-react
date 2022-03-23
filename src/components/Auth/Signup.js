import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./Auth.css";
import { useAuth } from "../../context";
import { userSignup } from "../../util/auth-methods";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../Loader";
import { ACTION_TYPE } from "../../util";

export const Signup = () => {
  const firstname = useRef("");
  const lastname = useRef("");
  const email = useRef("");
  const password = useRef("");
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await userSignup(
        authDispatch,
        {
          firstName: firstname.current.value,
          lastName: lastname.current.value,
          email: email.current.value,
          password: password.current.value,
        },
        toast
      );

      if (response.status === 201 || 200) {
        toast.success("Successfully created a new account.");
        navigate("/");
      }

      if (!response?.data.createdUser) {
        throw Error("Can't create account");
      }
    } catch (err) {
      authDispatch({
        type: ACTION_TYPE.FAILURE,
        payload: {
          loading: false,
        },
      });
      toast.error("Unable to create a new user.");
      navigate("/signup");
    }
  };

  return (
    <div>
      {authState.loading && <Loader />}
      <div className="signup-container">
        <form action="" className="login-form">
          <div>
            <label htmlFor="firstname">
              Firstname <span className="asterick">*</span>
            </label>

            <input
              type="text"
              ref={firstname}
              name="firstname"
              id="firstname"
              className="firstname"
              autoComplete="off"
              required=""
            />
          </div>

          <div>
            <label htmlFor="lastname">
              Lastname <span className="asterick">*</span>
            </label>

            <input
              type="text"
              ref={lastname}
              name="lastname"
              id="lastname"
              className="lastname"
              autoComplete="off"
              required=""
            />
          </div>

          <div>
            <label htmlFor="email">
              Email <span className="asterick">*</span>
            </label>

            <input
              type="text"
              ref={email}
              name="email"
              id="email"
              className="email"
              autoComplete="off"
              required=""
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
              id="password"
              className="password"
              required=""
            />
          </div>

          <button className="auth-btn" onClick={signupHandler}>
            Signup
          </button>

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
