import { Navigate } from "react-router-dom";
import ConfirmForm from "./components/Form/ConfirmForm";
import LoginForm from "./components/Form/LoginForm";
import FormLayout from "./layout/FormLayout";
import NotFound from "./pages/not-found/NotFound";
import Profile from "./pages/profile/Profile";
import Schedule from "./pages/schedule/Schedule";

const privateConfirmRoute = (link, user) => {
  if (link.includes("?apiKey=") && link.length > 90 && !user) {
    return (
      <FormLayout background={true}>
        <ConfirmForm />
      </FormLayout>
    );
  } else if (user) {
    return <Navigate to={"/weekly-schedule"} />;
  }
  return <Navigate to={"/login"} />;
};

const checkUser = (user, protectedView, redirect) =>
  user ? protectedView : redirect;

const routes = (user) => [
  {
    path: "/",
    element: <Navigate to={"/login"} />,
  },
  {
    path: "/login",
    element: checkUser(
      user,
      <Navigate to={"/weekly-schedule"} />,
      <FormLayout background={true}>
        <LoginForm />
      </FormLayout>
    ),
  },
  {
    path: "/confirm",
    element: privateConfirmRoute(window.location.search, user),
  },
  {
    path: "/weekly-schedule",
    element: checkUser(user, <Schedule />, <Navigate to={"/login"} />),
  },
  {
    path: "/profile",
    element: checkUser(user, <Profile />, <Navigate to={"/login"} />),
  },
  {
    path: "/not-found",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to={"/not-found"} />,
  },
];

export default routes;
