import axios from "axios";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Scheduale from "./pages/Scheduale";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { getUserFromLocalStorage } from "./helper/helper";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
    loader:async()=>{

      try{
        
          return await axios.get(`${process.env.REACT_APP_BASE_URL}scheduale/${getUserFromLocalStorage().student_id}`).then(result=>result.data.scheduale)
      }catch(e){
          console.log(e)
      }
  }
  },
  {
    path: "/scheduale",
    element: <Scheduale />,
    loader: async () => {
      try {
        return axios
          .get(process.env.REACT_APP_BASE_URL + "scheduale")
          .then((result) => result.data);
      } catch (e) {
        throw new Response("error", { stats: e.status });
      }
    },
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
]);

function App() {
  document.body.style.zoom = 0.8;
  return <RouterProvider router={router} />;
}

export default App;
