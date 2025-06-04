import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import BlogsView from './Pages/Home/BlogsView/BlogsView.jsx';
import Technology from './Pages/Technology/Technology.jsx';
import Lifestyle from './Pages/Lifestyle/Lifestyle.jsx';
import BookMarks from './Pages/BookMarks/BookMarks.jsx';
import Pages from './Pages/pages/Pages.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/blogsView/:id', element: <BlogsView /> },
      {path:'/technology', element:<Technology/>},
      {path:'/lifeStyle', element:<Lifestyle/>},
      {path:'/bookmarks', element:<BookMarks/>},
      {path:'/pages', element:<Pages/>}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
