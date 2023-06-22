import { RouterProvider } from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute';
import { createBrowserRouter } from 'react-router-dom';

import { AuthenticationPage, HomePage, authAction } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: 'dashboard',
        element: <PrivateRoute />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
