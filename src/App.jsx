import Home from "./pages/home/Home";
import "./Styles/global.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  const layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="sideBarContainer">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  };

  return <RouterProvider router={router} />;
}

export default App;
