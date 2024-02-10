import { ReactNode } from "react";
import { useSelector } from "../app/store";
import { selectIsAuthenticated } from "../app/redux/auth/authSlice";
import { Navigate } from "react-router-dom";
import { PATH_APP } from "../routes/paths";

type Props = {
  children: ReactNode;
  redirectTo?: string;
}

export default function GuestGuard({ children, redirectTo = `/${PATH_APP.root}` }: Props) {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated) return <Navigate to={redirectTo} />
  return <>{children}</>
}
