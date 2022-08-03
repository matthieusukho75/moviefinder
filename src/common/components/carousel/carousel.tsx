import React, { FC, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.css";
import { NextButton, PrevButton } from "./carouselButtons";
import { CardMovie } from "../card-movie/card-movie";
import { useMediaQuery } from "@mui/material";
import {config} from "../../../../config/config"

interface CarouselProps {
  data?: any;
}
export const Carousel: FC<CarouselProps> = ({ data }) => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const smallScreen = useMediaQuery("(max-width: 1024px)");

  const topRated = data.slice(0, 10);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <div className={styles.container}>
      {!smallScreen && (
        <div className={styles.button_container}>
          <PrevButton enabled={true} onClick={scrollPrev} />
        </div>
      )}

      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {topRated.map((movie, index) => {
            const yearDate = movie.release_date.split('-')[0]
            return (
              <div key={index} className={styles.embla__slide}>
                <CardMovie
                  img={config.url_image + movie.poster_path}
                  title={movie.title}
                  date={yearDate}
                  className={styles.img}
                />
              </div>
            );
          })}
        </div>
      </div>
      {!smallScreen && (
        <div className={styles.button_container}>
          <NextButton enabled={true} onClick={scrollNext} />
        </div>
      )}
    </div>
  );
};

export default Carousel;
