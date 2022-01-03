import { Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import NotFound from "./pages/not-found/NotFound";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Schedule from "./pages/schedule/Schedule";

// TODO: Revize edilecek ve route'lar buradan yönetilecek
const routes = (isLoggedIn) => [
  {
    path: "/app",
    element: isLoggedIn ? <Schedule /> : <Navigate to={"/login"} />,
    children: [
      { path: "profile", element: <Profile /> },
      { path: "weekly-schedule", element: <Schedule /> },
      { path: "*", element: <Navigate to={"/not-found"} /> },
    ],
  },
  {
    path: "/",
    element: <Navigate to={"/login"} />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "not-found", element: <NotFound /> },
      { path: "*", element: <Navigate to={"/not-found"} /> },
    ],
  },
];

export default routes;
