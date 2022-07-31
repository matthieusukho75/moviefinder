import React, { FC, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.css";
import { NextButton, PrevButton } from "./carouselButtons";
import { CardMovie } from "../card-movie/card-movie";

interface CarouselProps {
  data?: any;
}
export const Carousel: FC<CarouselProps> = ({ data }) => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <div className={styles.container}>
      <PrevButton enabled={null} onClick={null} />
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <CardMovie
              img={"/images/film1.jpg"}
              title={"Title"}
              date={"2019"}
            />
          </div>
          <div className={styles.embla__slide}>
            <CardMovie
              img={"/images/film2.jpg"}
              title={"Title"}
              date={"2019"}
            />
          </div>
          <div className={styles.embla__slide}>
            <CardMovie
              img={"/images/film3.jpg"}
              title={"Title"}
              date={"2019"}
            />
          </div>
          <div className={styles.embla__slide}>
            <CardMovie
              img={"/images/film5.jpg"}
              title={"Title"}
              date={"2019"}
            />
          </div>
          <div className={styles.embla__slide}>
            <CardMovie
              img={"/images/film6.jpg"}
              title={"Title"}
              date={"2019"}
            />
          </div>
        </div>
      </div>
      <NextButton enabled={null} onClick={null} />
    </div>
  );
};

export default Carousel;
