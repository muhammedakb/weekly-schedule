const LoginWith = ({ platform }) => {
  return (
    <>
      {platform === "google" && (
        <button className="login-with-btn" type="button">
          <img src="" alt="google" />
        </button>
      )}
      {platform === "github" && (
        <button className="login-with-btn" type="button">
          <img src="" alt="github" />
        </button>
      )}
      {platform === "twitter" && (
        <button className="login-with-btn" type="button">
          <img src="" alt="twitter" />
        </button>
      )}
    </>
  );
};

export default LoginWith;
