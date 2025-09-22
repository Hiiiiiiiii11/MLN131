import React from "react";
import { createBrowserRouter } from "react-router";
import HomePage from "../pages/Home/Homepage";
import MainLayout from "../components/MainLayout/MainLayout";
import Infographic from "../pages/Infographic/Infographic";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/home", // tương đương với /layout
                element: <HomePage />,
            },
            {
                path: "/infographic", // tương đương với /layout
                element: <Infographic />,
            },
            // {
            //     path: "/side-bar3", // tương đương với /layout
            //     element: <Develop />,
            // },
            // {
            //     path: "/side-bar4", // tương đương với /layout
            //     element: <Refference />,
            // },
        ]
    }
]);
