import axios from "axios";
import "./App.css";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Scheduale from "./pages/Scheduale";
import Home from "./pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:'/scheduale',
    element:<Scheduale/>,
    loader: async()=>{
      try{

      return axios.get(process.env.REACT_APP_BASE_URL+'scheduale').then(result=>result.data);
      
    }catch(e){

      throw new Response("error",{stats:e.status})
    }
    }
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
]);

function App() {

  document.body.style.zoom=0.80;
  return <RouterProvider router={router}/>;
}

export default App;
