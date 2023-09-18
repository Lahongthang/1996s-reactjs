import { ReactNode, memo } from 'react';
import { RootStyle } from './styles';
import ArrowButton from './ArrowButton';
import { useScroll } from './useScroll';

type Props = {
  children: ReactNode;
  step?: number;
}

const ScrollContainer = ({ children, step = 200 }: Props) => {
  const { scrollRef, scrollLeft, scrollWidth, availableWidth, onScrollLeft, onScrollRight } = useScroll(step);

  const scrollable = !!scrollRef.current && scrollWidth > availableWidth;

  return (
    <RootStyle ref={scrollRef} scrollable={scrollable}>
      {scrollable && scrollLeft > 0 && <ArrowButton
        direction='left'
        onClick={onScrollRight}
      />}
      {children}
      {scrollable && scrollLeft < scrollWidth - availableWidth && <ArrowButton
        direction='right'
        onClick={onScrollLeft}
      />}
    </RootStyle>
  )
}

export default memo(ScrollContainer);
