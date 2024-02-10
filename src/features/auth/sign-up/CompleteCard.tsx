import { Box, Link, Stack, Typography } from "@mui/material"
import BaseCompleteCard from "../../../components/CompleteCard"
import { useNavigate } from "react-router"

type Props = {
  userName: string;
  email: string;
}

export default function CompleteCard({ userName, email }: Props) {
  const navigate = useNavigate();
  return (
    <BaseCompleteCard
      cardTitle="Successfully"
      title={'Sign up successfully!'}
      sx={{ width: 1 }}
      description={<Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2">
          You have successfully sign up an account with:
        </Typography>
        <Stack direction={'row'} sx={{ justifyContent: 'center' }}>
          <Typography variant="body2" sx={{ textDecoration: 'underline' }}>User name:</Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>&nbsp;{userName}</Typography>
        </Stack>
        <Stack direction={'row'} sx={{ justifyContent: 'center' }}>
          <Typography variant="body2" sx={{ textDecoration: 'underline' }}>Email:</Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>&nbsp;{email}</Typography>
        </Stack>
      </Box>}
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
