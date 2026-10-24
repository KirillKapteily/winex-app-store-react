import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { reactDOM } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
const container = document.getElementById("root");

if (typeof createRoot === "function" && window.Proxy) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <BrowserRouter basename="/winex-app-store-react">
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  (ReactDOM.render(
    <StrictMode>
      <BrowserRouter basename="/winex-app-store-react">
        <App />
      </BrowserRouter>
    </StrictMode>,
  ),
    container);
}

// createRoot().render(
//   <StrictMode>
//     <BrowserRouter basename="/winex-app-store-react">
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// );

//backup
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter basename="/winex-app-store-react">
//     <App />
//     </BrowserRouter>
//   </StrictMode>,
// )
