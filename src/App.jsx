import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Order, { loader as orderLoader } from './features/order/Order';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import CreateOrder, {
  action as CreateOrderAction,
} from './features/order/CreateOrder';
import Cart from './features/cart/Cart';
import AppLayout from './ui/AppLayout';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/Pizza-App',
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: '/Pizza-App/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/Pizza-App/cart',
        element: <Cart />,
      },
      {
        path: '/Pizza-App/order/new',
        element: <CreateOrder />,
        action: CreateOrderAction,
      },
      {
        path: '/Pizza-App/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
