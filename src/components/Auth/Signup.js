import { Link } from "react-router-dom";
import "./Auth.css";

export const Signup = () => {
  return (
    <div>
      <div className="signup-container">
      <form action="" className="login-form">
        <div>
          <label for="firstname">Firstname <span className="asterick">*</span></label>
          
          <input type="text" name="firstname" id="firstname" className="firstname" autocomplete="off" required=""/>
        </div>
        
        <div>
          <label for="lastname">Lastname <span className="asterick">*</span></label>
          
          <input type="text" name="lastname" id="lastname" className="lastname" autocomplete="off" required=""/>
        </div>
        
        <div>
          <label for="email">Email <span className="asterick">*</span></label>
          
          <input type="text" name="email" id="email" className="email" autocomplete="off" required=""/>
        </div>
        
        <div>
          <label for="password">Password <span className="asterick">*</span></label>
          
          <input type="password" name="password" id="password" className="password" required=""/>
        </div>

        <button className="auth-btn">Signup</button>

        <div className="form-links">
          Already have an account?
          <Link to="/login" className="login-link">Login here</Link>
        </div>
      </form>
      </div>
    </div>
  );
};
