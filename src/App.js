import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './component/ErrorPage';
import Inventory from './component/Inventory/Inventory';
import Main from './component/Layout/Main';
import Login from './component/Login/Login';
import Order from './component/Order/Order';
import OrderReview from './component/OrderReview/OrderReview';
import PrivateRouter from './component/PrivateRouter/PrivateRouter';
import Shipping from './component/Shipping/Shipping';
import Shop from './component/Shop/Shop';
import SignUp from './component/SignUp/SignUp';
import { productsAndCartLoader } from './loaders/ProductAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/order',
          loader: productsAndCartLoader,
          element: <Order></Order>
        },
        {
          path: '/shipping',
          element: <PrivateRouter><Shipping></Shipping></PrivateRouter>
        },
        {
          path: '/inventory',
          element: <PrivateRouter><Inventory></Inventory></PrivateRouter>
        },
        {
          path: '/review',
          element: <OrderReview></OrderReview>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
