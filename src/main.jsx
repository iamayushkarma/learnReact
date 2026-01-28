import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PracticeContextProvider } from "./modules/m06-context-api/context/practiceContext.jsx";

createRoot(document.getElementById("root")).render(
  <PracticeContextProvider>
    <App />
  </PracticeContextProvider>,
);
