import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Inventory from './component/Inventory/Inventory';
import Main from './component/Layout/Main';
import Login from './component/Login/Login';
import Order from './component/Order/Order';
import OrderReview from './component/OrderReview/OrderReview';
import Shop from './component/Shop/Shop';
import { productsAndCartLoader } from './loaders/ProductAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
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
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/review',
          element: <OrderReview></OrderReview>
        },
        {
          path: '/login',
          element: <Login></Login>
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
