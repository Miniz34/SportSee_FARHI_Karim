import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Profil from "./pages/profil/Profil";

function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:userId" element={<App />} />
          <Route path="/user/:userId" element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Router;
