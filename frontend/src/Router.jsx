import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./pages/app/App";
import Home from "./pages/Home/Home";
import Community from "./pages/Community/Community";
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
          <Route path="/user/:userId" element={<App type={[]} />} />
          <Route path="/user/:userId/community" element={<Community />} />
          <Route path="/user/:userId/settings" element={<Settings />} />

          <Route
            path="/user/:userId/activity"
            element={<App type={["activity"]} />}
          />
          <Route
            path="/user/:userId/average-session"
            element={<App type={["average-session"]} />}
          />
          <Route
            path="/user/:userId/performance"
            element={<App type={["performance"]} />}
          />

          <Route path="/user/:userId/goal" element={<App type={["goal"]} />} />

          <Route
            path="/user/:userId/nutrient"
            element={<App type={["nutrient"]} />}
          />

          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error />} />
          <Route path="/user/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Router;
