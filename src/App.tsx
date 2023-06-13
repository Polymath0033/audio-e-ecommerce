//import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Speakers from "./pages/Speakers";
import Headphone from "./pages/Headphone";
import Earphones from "./pages/Earphones";
function App() {
  const router = createBrowserRouter([
    {
      path: "",

      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "/head-phones", element: <Headphone /> },
        { path: "/speakers", element: <Speakers /> },
        {
          path: "/earphones",
          element: <Earphones />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
