import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ConfirmForm from "./components/Form/ConfirmForm";
import LoginForm from "./components/Form/LoginForm";
import FormLayout from "./layout/FormLayout";
import NotFound from "./pages/not-found/NotFound";
import Register from "./pages/register/Register";
import Schedule from "./pages/schedule/Schedule";

const App = () => {
  const isLoggedIn = true;
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
          element={
            <FormLayout>
              <ConfirmForm />
            </FormLayout>
          }
        />
        <Route
          path="/weekly-schedule"
          element={isLoggedIn ? <Schedule /> : <Navigate to={"/login"} />}
        />
        <Route path="/not-found" element={<NotFound />} />
        {/* <Route path="*" element={<Navigate to={"/not-found"} />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
