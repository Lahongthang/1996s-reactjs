import React, { Suspense, lazy } from "react";
import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component: React.ComponentType) => (props: any) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
)

// Home
export const HomePage = Loadable(lazy(() => import('../pages/home')));

// Sign up
export const SignUpPage = Loadable(lazy(() => import('../pages/sign-up')));

// Sign in
export const SignInPage = Loadable(lazy(() => import('../pages/sign-in')));

// Reset password
export const ResetPasswordPage = Loadable(lazy(() => import('../pages/reset-password')));

// Errors
export const Page404 = Loadable(lazy(() => import('../pages/errors/Page404')));
