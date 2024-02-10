import { ReactNode } from "react";
import { Card, CardHeader, CardContent, CardActions, Stack, Typography, CardProps } from "@mui/material";
import LottieIcon from "./LottieIcon";
import success from './json/success.json';
import { isString } from "lodash";

type Props = {
  cardTitle: string;
  title: string | ReactNode;
  description?: string | ReactNode;
  action?: ReactNode;
} & CardProps

const CompleteCard = ({ cardTitle, title, description, action, ...props }: Props) => {
  return (
    <Card {...props}>
      <CardHeader title={cardTitle} />
      <CardContent sx={{
        p: 2,
        borderRadius: 2,
        border: theme => `1px dashed ${theme.palette.divider}`,
      }}>
        <Stack>
          <LottieIcon animationData={success} />
          <Stack spacing={1} alignItems='center'>
            {!isString(title) ? title : <Typography variant="subtitle1">
              {title}
            </Typography>}
            {!isString(description) ? description : <Typography variant="body2">
              {description}
            </Typography>}
          </Stack>
        </Stack>
      </CardContent>
      {action && <CardActions>
        {action}
      </CardActions>}
    </Card>
  )
}

export default CompleteCard;
