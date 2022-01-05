import { Link } from "react-router-dom";
import LoginWith from "../LoginWith/LoginWith";

const platforms = ["google", "github", "twitter"];

const LoginForm = () => {
  return (
    <div className="login-form">
      <h3 className="login-form-title">Login</h3>
      <form action="">
        <div className="login-form-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="username@gmail.com"
          />
        </div>
        <div className="login-form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <span className="login-form-eye"></span>
        </div>
        <p className="login-form-forgot">Forgot Password?</p>

        <button className="login-form-btn" type="submit">
          Sign in
        </button>
      </form>
      <p className="login-form-text">or continue with</p>
      <div className="login-form-withbtn">
        {platforms.map((platform, index) => (
          <LoginWith platform={platform} key={index} />
        ))}
      </div>

      <div className="login-form-text">
        Don't have an account yet? <Link to={"/register"}>Register for free</Link>
      </div>
    </div>
  );
};

export default LoginForm;
