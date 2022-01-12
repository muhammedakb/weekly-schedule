import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ConfirmForm from "./components/Form/ConfirmForm";
import LoginForm from "./components/Form/LoginForm";
import { useAuth } from "./hooks/useAuth";
import FormLayout from "./layout/FormLayout";
import NotFound from "./pages/not-found/NotFound";
import Register from "./pages/register/Register";
import Schedule from "./pages/schedule/Schedule";
import Profile from "./pages/profile/Profile";
const App = () => {
  const { user } = useAuth();

  const privateConfirmRoute = (link) => {
    if (link.includes("?apiKey=") && link.length > 90 && !user) {
      return (
        <FormLayout>
          <ConfirmForm />
        </FormLayout>
      );
    } else if (user) {
      return <Navigate to={"/weekly-schedule"} />;
    }
    return <Navigate to={"/login"} />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route
          path="/login"
          element={
            <FormLayout>
              <LoginForm />
            </FormLayout>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/confirm"
          element={privateConfirmRoute(window.location.search)}
        />
        <Route
          path="/weekly-schedule"
          element={user ? <Schedule /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to={"/login"} />}
        />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to={"/not-found"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
