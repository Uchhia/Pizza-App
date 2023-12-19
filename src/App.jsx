import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
const router = createBrowserRouter([
  {
    path: "/Pizza-App",
    element: <Home />,
  },
  {
    path: "/Pizza-App/menu",
    element: <Menu />,
  },
  {
    path: "/Pizza-App/cart",
    element: <Cart />,
  },
  {
    path: "/Pizza-App/order/new",
    element: <CreateOrder />,
  },
  {
    path: "/Pizza-App/order/:orderId",
    element: <Order />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
