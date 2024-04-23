import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink as NL } from "react-router-dom";

export const NvLink = ({ to, children, ...props }) => {
  return (
    <div>
      <div className="container">
        <NL
          {...props}
          className={({ isActive }) => {
            return isActive ? "is-active" : undefined;
          }}
          to={to}
        >
          {""}
          {children}
        </NL>
      </div>
    </div>
  );
};


