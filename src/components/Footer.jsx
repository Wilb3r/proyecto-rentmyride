import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-1 bg-black text-white">
        © {new Date().getFullYear()} Frontend-Genius. All rights reserved.
      </div>
    </footer>
  );
};

