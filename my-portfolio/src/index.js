import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./Index.css";
import App from "./App";
import reportWebVitals from "../src/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// Wenn Sie mit der Leistungsmessung in Ihrer Anwendung beginnen möchten, übergeben Sie eine Funktion
// zur Protokollierung der Ergebnisse (zum Beispiel: reportWebVitals(console.log))
// oder senden Sie sie an einen Analyse-Endpunkt. Erfahren Sie mehr: https://bit.ly/CRA-vitals
reportWebVitals();