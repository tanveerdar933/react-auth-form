import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from "./router.jsx";
// import { AuthProvider } from "./contexts/AuthProvider";

import { myStore } from "./app/store.js";
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
