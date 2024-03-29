import { useRoutes, Navigate } from "react-router-dom";
import ApplicationLayout from "../layouts";
import { Page404 } from './elements';

export default function Router() {
  return useRoutes([
    {
      path: '',
      element: <ApplicationLayout />,
      children: [
        {
          path: '',
          element: <Navigate to={'home'} />,
        },
        {
          path: 'home',
          element: <>Home Page</>
        },
        {
          path: 'products',
          children: [
            { path: '', element: <Navigate to={'list'} /> },
            { path: 'list', element: <>List</> },
            { path: 'create', element: <>Create</> },
            { path: 'edit', element: <>Edit</> },
          ],
        },
        {
          path: 'personal-settings',
          element: <>Settings</>
        }
      ],
    },
    {
      path: '*',
      children: [
        { path: '403', element: <>403 PAGE</> },
        { path: '404', element: <Page404 /> },
        { path: 'app-not-found', element: <>APP NOT FOUND</> },
        { path: '500', element: <>500 PAGE</> },
        { path: '*', element: <Navigate to={'/404'} replace /> }
      ],
    },
  ])
}
