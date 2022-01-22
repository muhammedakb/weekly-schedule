import google from "../../images/google.svg";
import github from "../../images/github.svg";
import twitter from "../../images/twitter.svg";
import { useAuth } from "../../hooks/useAuth";

const LoginWith = ({ platform }) => {
  const { loginWithGoogle, loginWithGithub } = useAuth();
  return (
    <>
      {platform === "google" && (
        <button
          className="login-with-btn"
          type="button"
          onClick={loginWithGoogle}
        >
          <img src={google} alt="google" />
        </button>
      )}
      {platform === "github" && (
        <button
          className="login-with-btn"
          type="button"
          onClick={loginWithGithub}
        >
          <img src={github} alt="github" />
        </button>
      )}
      {platform === "twitter" && (
        <button className="login-with-btn" type="button">
          <img src={twitter} alt="twitter" width={24} height={24} />
        </button>
      )}
    </>
  );
};

export default LoginWith;
