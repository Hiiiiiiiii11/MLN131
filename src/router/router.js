import React from "react";
import { createBrowserRouter } from "react-router";
import HomePage from "../pages/Home/Homepage";
import MainLayout from "../components/MainLayout/MainLayout";
import BlogPage from "../components/Blog/Blogpage";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            // {
            //     path: "/side-bar1", // tương đương với /layout
            //     element: <HomePage />,
            // },
            // {
            //     path: "/blog", // Trang Blog
            //     element: <BlogPage />,
            // },
           
        ]
    }
]);
