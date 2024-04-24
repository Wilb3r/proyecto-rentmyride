import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import "./css/App.css";
import { BrowserRouter } from "react-router-dom";
import { FiltersProvider } from "./context/filters.jsx";
import { Footer } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <FiltersProvider>
        <div className="container">
        <App />
        </div>
        <Footer />
      </FiltersProvider>
      
    </BrowserRouter>
    
    ,

  
);
