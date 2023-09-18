import { Box, useTheme, alpha, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { PATH_APP } from "../routes/paths";

const Logo = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate(PATH_APP.home)}
      sx={{
        width: 50,
        height: 50,
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.spacing(2),
        color: theme.palette.common.white,
        background: `linear-gradient(to bottom right, ${alpha(theme.palette.secondary.main, 0.72)}, ${alpha(theme.palette.secondary.light, 0.72)})`,
      }}
    >
      <Typography variant="subtitle2">
        Logo
      </Typography>
    </Box>
  )
}

export default Logo;
