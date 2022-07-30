import React, { FC, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from './carousel.module.css'
import { NextButton, PrevButton } from "./carouselButtons";

interface CarouselProps {
  data?: any;
}
export const Carousel: FC<CarouselProps> = ({ data }) => {
  const [emblaRef, embla] = useEmblaCarousel();

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <div className={styles.embla} ref={emblaRef}>
        <PrevButton enabled={null} onClick={null}/>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>Slide 1</div>
        <div className={styles.embla__slide}>Slide 2</div>
        <div className={styles.embla__slide}>Slide 3</div>
      </div>
      <NextButton enabled={null} onClick={null}/>
    </div>
  );
};

export default Carousel;
