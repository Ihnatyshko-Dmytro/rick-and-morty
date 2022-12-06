import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./Pages/NotFoundPage";
import { Characters } from "./Componets/Characters";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="characters" element={<Characters />}>
            <Route index element={<Characters />} />
            <Route path=":charactersId" element={<Characters />} />
          </Route>
          <Route path="locations" element={<h1>Locations</h1>} />
          <Route path="episodes" element={<h1>Episodes</h1>} />
          <Route index element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
