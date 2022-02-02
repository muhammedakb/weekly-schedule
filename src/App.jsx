import { useRoutes } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import Dashboard from "./layout/Dashboard";
import routes from "./routes";

const App = () => {
  const { user } = useAuth();
  const routing = useRoutes(routes(user));

  return (
    <>
      {user && <Dashboard />}
      {routing}
    </>
  );
};

export default App;
