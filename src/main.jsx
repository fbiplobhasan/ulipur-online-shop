import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/router.jsx";
import { RouterProvider } from "react-router/dom";
import { QueryClient } from "https://esm.sh/@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Aos from "aos";

Aos.init();


const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="poppins-font max-w-7xl mx-auto bg-slate-400-50">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  </StrictMode>
);
