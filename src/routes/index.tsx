import { useRoutes, Navigate } from "react-router-dom";
import ApplicationLayout from "../layouts";
import { HomePage, Page404, ResetPasswordPage, SignInPage, SignUpPage } from './elements';
import { AuthGuard } from "../guards";
import GuestGuard from "../guards/GuestGuard";

export default function Router() {
  return useRoutes([
    {
      path: 'sign-up',
      element: <GuestGuard>
        <SignUpPage />
      </GuestGuard>
    },
    {
      path: 'sign-in',
      element: <GuestGuard>
        <SignInPage />
      </GuestGuard>,
    },
    {
      path: 'reset-password',
      element: <GuestGuard>
        <ResetPasswordPage />
      </GuestGuard>
    },
    {
      path: '',
      element: <AuthGuard>
        <ApplicationLayout />
      </AuthGuard>,
      children: [
        {
          path: '',
          element: <HomePage />,
        },
        {
          path: 'products',
          children: [
            { path: '', element: <Navigate to={'list'} /> },
            { path: 'all', element: <>All products</> },
            { path: 'best-selling', element: <>Best-selling products</> },
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
