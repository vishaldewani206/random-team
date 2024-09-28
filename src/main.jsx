import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StepTwo from "./pages/StepTwo.jsx";
import StepOne from "./components/StepOne.jsx";
import StepThree from "./pages/StepThree.jsx";
import StepFinal from "./pages/StepFinal.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [
            {
                path: "/",
                element: <StepOne />,
            },
            {
                path: "/step-two",
                element: <StepTwo />,
            },
            {
                path: "/step-three",
                element: <StepThree />,
            },
            {
                path: "/step-final",
                element: <StepFinal />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
