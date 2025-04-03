import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './home/Home.jsx'
import Send from "./send/Send.jsx";
import Recieve from "./Recieve/Recieve.jsx";
const router=createBrowserRouter(
  [
    {
      path:'/',
      element: <App />,
      children:[
        {
          path:"/",
          element:<Home/> 
        },
        {
          path:"/send",
          element:<Send/>
        }
,
{
  path:"/receive",
  element:<Recieve/>
}
      ]
    }
  ]
)



ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router}  />

)
