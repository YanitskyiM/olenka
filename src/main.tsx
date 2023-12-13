import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {APP_ROUTES} from "./App.routes.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              {APP_ROUTES.map((page, key) => (
                  <Route
                      key={key}
                      path={page.path}
                      element={<page.component/>}
                  />
              ))}
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
