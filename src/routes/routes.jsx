import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import BlogsView from "../Pages/Home/BlogsView/BlogsView";
import Technology from "../Pages/Technology/Technology";
import Lifestyle from "../Pages/Lifestyle/Lifestyle";
import Pages from "../Pages/pages/Pages";
import Root from "../Layout/Root";
import BookMarks from "../Pages/BookMarks/BookMarks";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "/", element: <Home /> },
            { path: '/blogsView/:id', element: <BlogsView /> },
            { path: '/technology', element: <Technology /> },
            { path: '/lifeStyle', element: <Lifestyle /> },
            { path: '/bookmarks', element: <BookMarks /> },
            { path: '/pages', element: <Pages /> }
        ]
    }
])
export default routers;