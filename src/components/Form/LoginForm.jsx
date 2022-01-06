// import { useRef, useState } from "react";
// import { Link } from "react-router-dom";
import LoginWith from "../LoginWith/LoginWith";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";

const platforms = ["google", "github", "twitter"];

const LoginForm = () => {
  // const [inputType, setInputType] = useState("password");
  // const changeInputType = () =>
  //   inputType === "password" ? setInputType("text") : setInputType("password");

  const {
    handleSubmit,
    register,
    setError,
    formState,
    formState: { errors },
  } = useForm();

  const { sendSignInLinkToEmail } = useAuth();

  const onSubmit = async (data) => {
    try {
      await sendSignInLinkToEmail(data.email);
    } catch (error) {
      setError("email", {
        type: "manual",
        message: error.message,
      });
    }
  };

  // const myRef = useRef(register());

  return (
    <div className="login-form">
      <h3 className="login-form-title">Login</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login-form-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            // name="email"
            id="email"
            {...register("email", { required: true })}
            // ref={myRef}
            placeholder="username@gmail.com"
          />
        </div>
        {/* <div className="login-form-input">
          <label htmlFor="password">Password</label>
          <input
            type={inputType}
            name="password"
            id="password"
            placeholder="Password"
          />
          <span className="login-form-eye" onClick={changeInputType}></span>
        </div> */}
        {/* <p className="login-form-forgot">Forgot Password?</p> */}

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

      {/* <div className="login-form-text">
        Don't have an account yet?{" "}
        <Link to={"/register"}>Register for free</Link>
      </div> */}
      {errors.email && (
        <div className="login-form-text error">
          {errors.email?.message
            ? errors.email.message
            : "Hangi mail adresi ile giriş yapmak istiyorsunuz 🤔"}
        </div>
      )}

      {formState.isSubmitSuccessful && (
        <div className="login-form-text success">
          Girişi tamamlamak için e-postanızı kontrol edin 🥳
        </div>
      )}
    </div>
  );
};

export default LoginForm;
