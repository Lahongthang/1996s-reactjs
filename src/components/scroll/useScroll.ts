import { useRef, useState, useCallback, useEffect, RefObject } from "react";

export const useScroll = (step: number): {
  scrollRef: RefObject<HTMLDivElement>;
  availableWidth: number;
  scrollWidth: number;
  scrollLeft: number;
  onScrollLeft: () => void;
  onScrollRight: () => void;
} => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [availableWidth, setAvailableWidth] = useState<number>(0);
  const [scrollWidth, setScrollWidth] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const onScrollLeft = useCallback(() => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const newValue = (availableWidth + scrollLeft + step) < scrollWidth ? scrollLeft + step : scrollWidth - availableWidth;
      setScrollLeft(newValue);
      scrollRef.current.scrollLeft = newValue;
    };
  }, [availableWidth, scrollWidth, step])

  const onScrollRight = useCallback(() => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const newValue = scrollLeft - step > 0 ? scrollLeft - step : 0;
      setScrollLeft(newValue);
      scrollRef.current.scrollLeft = newValue;
    };
  }, [step])

  useEffect(() => {
    const setScrollElement = () => {
      if (scrollRef.current) {
        setAvailableWidth(scrollRef.current?.clientWidth);
        setScrollWidth(scrollRef.current?.scrollWidth);
      };
    };
    setScrollElement();
    window.addEventListener('resize', setScrollElement);
    return () => window.removeEventListener('resize', setScrollElement);
  }, [scrollRef.current])

  return {
    scrollRef,
    availableWidth,
    scrollWidth,
    scrollLeft,
    onScrollLeft,
    onScrollRight,
  }
}
