import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import MessageBox from "../Message-box/MessageBox";

const ConfirmForm = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  const { loginLink } = useAuth();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await loginLink(data.email, window.location.href);
      navigate("/weekly-schedule");
    } catch (error) {
      setError("email", {
        type: "manual",
        message: error.message,
      });
      console.error(error);
    } finally {
      // console.log("DATA", data);
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
        <MessageBox
          type={"error"}
          message={errors.email?.message ? errors.email.message : null}
        />
      )}
    </div>
  );
};

export default ConfirmForm;
