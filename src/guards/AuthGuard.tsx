import { ReactNode, useState } from "react";
import { useSelector } from "../app/store";
import { selectIsAuthenticated } from "../app/redux/auth/authSlice";
import { Navigate, useLocation } from "react-router-dom";
import { StringNullable } from "../configs/types";
import SignInPage from "../pages/sign-in";
import GuestGuard from "./GuestGuard";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { pathname } = useLocation();

  const [requestedLocation, setRequestedLocation] = useState<StringNullable>(null);

  if (!isAuthenticated) {
    // save the current location
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <GuestGuard>
      <SignInPage />
    </GuestGuard>
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }
  return <>{children}</>
}
