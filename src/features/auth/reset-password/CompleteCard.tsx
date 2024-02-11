import { Link } from "@mui/material"
import BaseCompleteCard from "../../../components/CompleteCard"
import { useNavigate } from "react-router"

export default function CompleteCard() {
  const navigate = useNavigate();
  return (
    <BaseCompleteCard
      cardTitle="Successfully"
      title={'Reset password successfully!'}
      sx={{ width: 1 }}
      action={<Link
        component='button'
        variant="subtitle2"
        onClick={() => navigate('/sign-in')}
      >
        Sign In
      </Link>}
    />
  )
}
