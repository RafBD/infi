import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-obinb706lll8exre.us.auth0.com"
      clientId="sFYv4ZNECXObneWy4Tiy1pBF5MXGUK48"
      authorizationParams={{
        redirect_uri: "https://rafbd.github.io/infi/",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
reportWebVitals();
