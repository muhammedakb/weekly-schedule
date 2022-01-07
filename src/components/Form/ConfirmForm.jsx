import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ConfirmForm = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  const { signInWithEmailLink } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  console.log("LOCATION", location);
  console.log("LOCATION SEARCH", location.search);
  const onSubmit = async (data) => {
    try {
      await signInWithEmailLink(data.email, location.search);
      navigate("/weekly-schedule");
    } catch (error) {
      setError("email", {
        type: "manual",
        message: error.message,
      });
      console.error(error);
    } finally {
      console.log("DATA", data);
      console.log("DATA EMAIL", data.email);
    }
  };

  return (
    <div className="login-form" style={{ height: "400px" }}>
      <h3 className="login-form-title">Email Doğrulama</h3>
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

      {errors.email && (
        <div className="login-form-text error">
          {errors.email?.message
            ? errors.email.message
            : "Hangi mail adresi ile giriş yapmak istiyorsunuz 🤔"}
        </div>
      )}
    </div>
  );
};

export default ConfirmForm;
