import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ConfirmForm from "./components/Form/ConfirmForm";
import LoginForm from "./components/Form/LoginForm";
import { useAuth } from "./hooks/useAuth";
import FormLayout from "./layout/FormLayout";
import NotFound from "./pages/not-found/NotFound";
import Schedule from "./pages/schedule/Schedule";
import Profile from "./pages/profile/Profile";
import Dashboard from "./layout/Dashboard";
const App = () => {
  const { user } = useAuth();

  const privateConfirmRoute = (link) => {
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

  return (
    <BrowserRouter>
      {user && <Dashboard />}
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route
          path="/login"
          element={
            user ? (
              <Navigate to={"/weekly-schedule"} />
            ) : (
              <FormLayout background={true}>
                <LoginForm />
              </FormLayout>
            )
          }
        />
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
