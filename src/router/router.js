import React from "react";
import { createBrowserRouter } from "react-router";
import HomePage from "../pages/Home/Homepage";
import MainLayout from "../components/MainLayout/MainLayout";
import Infographic from "../pages/Infographic/Infographic";
import Introduction from "../components/Introduct/Introductionpage";
import Newspage from "../components/News/Newspage";
import Blogpage from "../components/Blog/Blogpage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,              // 👈 khi vào "/" sẽ tự load HomePage
                element: <HomePage />,
            },
            {
                path: "/home", // tương đương với /layout
                element: <HomePage />,
            },
            {
                path: "/infographic", // tương đương với /layout
                element: <Infographic />,
            },
            {
                path: "/introduction", // tương đương với /layout
                element: <Introduction />,
            },
             {
                path: "/news", // tương đương với /layout
                element: <Newspage />,
            },

             {
                path: "/blog", // tương đương với /layout
                element: <Blogpage />,
            },
        ]
    }
]);
