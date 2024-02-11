import { Link, LinkProps } from "@mui/material";

type Props = {
  title: string;
} & LinkProps

const LinkButton = ({ title, variant = 'body2', ...props }: Props) => {
  return (
    <Link
      component='button'
      type="button"
      variant={variant}
      {...props}
    >
      {title}
    </Link>
  )
}

export default LinkButton;
