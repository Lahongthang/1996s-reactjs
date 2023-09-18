import React, { Suspense, lazy } from "react";
import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component: React.ComponentType) => (props: any) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
)

// Home
export const HomePage = Loadable(lazy(() => import('../pages/home')));

// Errors
export const Page404 = Loadable(lazy(() => import('../pages/errors/Page404')));
