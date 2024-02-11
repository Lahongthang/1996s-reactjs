import { ReactNode } from 'react';
import Card from '../../../components/Card';
import { IconButton, Tooltip } from '@mui/material';
import Iconify from '../../../components/Iconify';

type Props = {
  title: string;
  titleIcon?: string;
  canBack?: boolean;
  canNext?: boolean;
  onBack?: () => void;
  onNext?: () => void;
  actions?: () => ReactNode;
  children: ReactNode;
}

const StepCard = ({
  children,
  title,
  titleIcon,
  actions,
  onBack,
  onNext,
  canBack = false,
  canNext = false,
}: Props) => {
  return (
    <Card
      title={title}
      titleIcon={titleIcon}
      actions={actions}
      sx={{ position: 'relative' }}
    >
      {canBack && <CustomButton direction='back' onClick={onBack} />}
      {canNext && <CustomButton direction='next' onClick={onNext} />}
      {children}
    </Card>
  )
}

export default StepCard;

const CustomButton = ({
  direction,
  onClick,
}: {
  direction: 'back' | 'next';
  onClick?: () => void;
}) => {
  return (
    <Tooltip placement='top' title={direction === 'back' ? 'Back' : 'Next'}>
      <IconButton
        sx={{
          top: 10,
          ...(direction === 'back' && {
            left: 0,
            ml: 1,
          }),
          ...(direction === 'next' && {
            right: 0,
            mr: 1,
          }),
          position: 'absolute',
        }}
        onClick={onClick}
      >
        <Iconify
          icon='ion:return-up-back'
          sx={{
            ...(direction === 'next' && {
              transform: 'scale(-1, 1)',
            })
          }}
        />
      </IconButton>
    </Tooltip>
  )
}