import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import About from "./pages/About";
import FFH from "./pages/subpages/FFH";
import Unlucciest from "./pages/subpages/Unlucciest";
import Personal from "./pages/subpages/personal";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "portfolio",
    element: <Portfolio />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "portfolio/ffh",
    element: <FFH />,
  },
  {
    path: "portfolio/unlucciest",
    element: <Unlucciest />,
  },
  {
    path: "portfolio/personal",
    element: <Personal />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

