import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />, // Use the layout component for common header/footer
            errorElement: <ErrorPage />, // Handle 404 and other errors
            children: [
                { path: "/", element: <Home /> },
                { path: "/about", element: <About /> },
                { path: "/project", element: <Project /> },
                { path: "/contact", element: <Contact /> },

            ],
        },
    ],
    {
        future: { v7_startTransition: true }, // Opt-in to React Router v7 features
    }
);
