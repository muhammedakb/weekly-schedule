import LoginForm from "../../components/Form/LoginForm";
import blue from "../../images/blue-1.svg";
import blue2 from "../../images/blue-2.svg";
import blue3 from "../../images/blue-3.svg";
import blue4 from "../../images/blue-4.svg";
import blue5 from "../../images/blue-5.svg";
import blue6 from "../../images/blue-6.svg";
import green from "../../images/green-1.svg";
import green2 from "../../images/green-2.svg";
import red from "../../images/red-1.svg";
import red2 from "../../images/red-2.svg";

const Login = () => {
  return (
    <div className="login">
      <LoginForm />
      <img src={blue} alt="-" className="login-blue" />
      <img src={blue2} alt="-" className="login-blue2" />
      <img src={blue3} alt="-" className="login-blue3" />
      <img src={blue4} alt="-" className="login-blue4" />
      <img src={blue5} alt="-" className="login-blue5" />
      <img src={blue6} alt="-" className="login-blue6" />
      <img src={green} alt="-" className="login-green" />
      <img src={green2} alt="-" className="login-green2" />
      <img src={red} alt="-" className="login-red" />
      <img src={red2} alt="-" className="login-red2" />
    </div>
  );
};

export default Login;
