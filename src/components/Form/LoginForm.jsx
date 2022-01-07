import LoginWith from "../LoginWith/LoginWith";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";

const platforms = ["google", "github", "twitter"];

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState,
    formState: { errors },
  } = useForm();

  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      await login(data.email);
    } catch (error) {
      setError("email", {
        type: "manual",
        message: error.message,
      });
    }
  };

  return (
    <div className="login-form">
      <h3 className="login-form-title">Giriş</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login-form-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            placeholder="username@gmail.com"
          />
        </div>

        <button className="login-form-btn" type="submit">
          Giriş yap
        </button>
      </form>
      <p className="login-form-text">veya devam et</p>
      <div className="login-form-withbtn">
        {platforms.map((platform, index) => (
          <LoginWith platform={platform} key={index} />
        ))}
      </div>

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
