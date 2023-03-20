import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./pages/app/App";
import Home from "./pages/Home/Home";
import Community from "./pages/Community/Community";
import WrongCaptcha from "./pages/WrongCaptcha/WrongCaptcha";
import Settings from "./pages/Settings/Settings";
import Error from "./pages/Error/Error";

/**
 * Router to render the 4 pages of the application
 *
 * @category Router
 * @component
 * @returns { React.Component } A React component
 */
function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter basename="/SportSee_FARHI_Karim">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:userId" element={<App />} />
          <Route path="/community" element={<Community />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/user/:userId" element={<App />} />
          <Route path="/wrongcaptcha" element={<WrongCaptcha />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error />} />
          <Route path="/user/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Router;
