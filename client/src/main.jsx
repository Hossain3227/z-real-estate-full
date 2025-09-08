import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Auth0Provider} from '@auth0/auth0-react'
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <Auth0Provider 
    domain="dev-8l8hvg6xsjvn1bj2.us.auth0.com" 
    clientId="9r5icGwEYmZjJPpTIV0VQEyFC5Xb0zkm" 
    authorizationParams={{
      redirect_uri: "http://localhost:5173"
    }}
    audience="http://localhost:8000"
    scope="openid profile email"
    // cacheLocation="localstorage"       
    //     useRefreshTokens={true}     
    >    
    
    <App />
    
         
    </Auth0Provider>
    </MantineProvider>
    
  </React.StrictMode>
  
);
