import { Link } from "react-router-dom";
import LoginWith from "../LoginWith/LoginWith";

const platforms = ["google", "github", "twitter"];

const LoginForm = () => {
  return (
    <div className="login-form">
      <h3 className="login-form-title">Login</h3>
      <label htmlFor="email" />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="username@gmail.com"
      />
      <label htmlFor="password" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />

      <p className="login-form-forgot">Forgot Password?</p>

      <button>Sign in</button>

      <p className="login-form-text">or continue with</p>
      {platforms.map((platform, index) => (
        <LoginWith platform={platform} key={index} />
      ))}
      <div className="login-form-text">
        Don't have an account yet? <Link to={""}>Register for free</Link>
      </div>
    </div>
  );
};

export default LoginForm;
