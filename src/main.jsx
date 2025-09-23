import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/router.jsx";
import { RouterProvider } from "react-router/dom";
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="poppins-font max-w-7xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
