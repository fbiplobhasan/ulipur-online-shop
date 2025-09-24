import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/router.jsx";
import { RouterProvider } from "react-router/dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { QueryClient } from "https://esm.sh/@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

AOS.init();
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="poppins-font max-w-7xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  </StrictMode>
);
