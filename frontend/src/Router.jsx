import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./pages/app/App";
import Home from "./pages/Home/Home";
import Profil from "./pages/profil/Profil";

function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter basename="/SportSee_FARHI_Karim">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:userId" element={<App />} />
          <Route path="/user/:userId" element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Router;
