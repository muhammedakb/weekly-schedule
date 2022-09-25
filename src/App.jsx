import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./hooks/useAuth";
import Dashboard from "./layout/Dashboard";
import routes from "./routes";

const App = () => {
  const { user } = useAuth();
  const routing = useRoutes(routes(user));

  console.log("lsakdflskadfdsakafsd")

  return (
    <>
      {user && <Dashboard />}
      {routing}
      <ToastContainer theme="dark" />
    </>
  );
};

export default App;
