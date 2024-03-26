import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//import reportWebVitals from "./reportWebVitals";
import { registerLicense } from "@syncfusion/ej2-base";
// Registering Syncfusion license key
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekx3WmFZfVpgfV9HaFZSRmYuP1ZhSXxXdkZhXH9XcXxWRGZVUUM="
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
