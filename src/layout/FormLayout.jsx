// import LoginForm from "../components/Form/LoginForm";
import { useLocation } from "react-router-dom";
import blue from "../images/blue-1.svg";
import blue2 from "../images/blue-2.svg";
import blue3 from "../images/blue-3.svg";
import blue4 from "../images/blue-4.svg";
import blue5 from "../images/blue-5.svg";
import blue6 from "../images/blue-6.svg";
import green from "../images/green-1.svg";
import green2 from "../images/green-2.svg";
import red from "../images/red-1.svg";
import red2 from "../images/red-2.svg";

const images = [
  {
    src: blue,
    alt: "-",
    className: "login-blue",
  },
  {
    src: blue2,
    alt: "-",
    className: "login-blue2",
  },
  {
    src: blue3,
    alt: "-",
    className: "login-blue3",
  },
  {
    src: blue4,
    alt: "-",
    className: "login-blue4",
  },
  {
    src: blue5,
    alt: "-",
    className: "login-blue5",
  },
  {
    src: blue6,
    alt: "-",
    className: "login-blue6",
  },
  {
    src: green,
    alt: "-",
    className: "login-green",
  },
  {
    src: green2,
    alt: "-",
    className: "login-green2",
  },
  {
    src: red,
    alt: "-",
    className: "login-red",
  },
  {
    src: red2,
    alt: "-",
    className: "login-red2",
  },
];

const FormLayout = ({ children, background }) => {
  // location handle
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  // canım böyle yapmak istedi, fazla sorgulamayın :d
  const handleHeight = () =>
    splitLocation[1] === "login" || splitLocation[1] === "confirm"
      ? "100vh"
      : "calc(100vh - 48px)";

  const style = {
    height: handleHeight(),
  };

  return (
    <div className="login" style={style}>
      {/* HOC */}
      {children}
      {background && (
        <>
          {images.map(({ src, alt, className }, index) => (
            <img src={src} alt={alt} className={className} key={index} />
          ))}
        </>
      )}
    </div>
  );
};

export default FormLayout;
