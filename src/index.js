import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import { AuthProvider } from "./hooks/useAuth";
import "./style/main.scss";

render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
  document.getElementById("root")
);
