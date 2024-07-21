import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import Image from 'next/image';

import { useDotButton } from './EmblaCarouselDotButton';
import {
  usePrevNextButtons,
  PrevButton,
  NextButton,
} from './EmlaCarouselArrowButton';
import { SliderDataType } from '@/utils/sliderData';

type PropType = {
  slides: SliderDataType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla drop-shadow-2xl flex flex-col w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container cursor-pointer ">
          {slides.map((sliderItem, index) => (
            <div
              className="embla__slide embla__class-names cursor-pointer"
              key={index}
            >
              <div className="flex flex-col items-center space-y-5 cursor-pointer">
                <div className="w-64 h-64 relative mt-10">
                  <Image
                    src={sliderItem.url}
                    alt={sliderItem.title}
                    className="object-cover shadow-xl rounded-2xl"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    quality={100}
                  />
                </div>
                <div
                  className="flex items-center justify-center"
                  style={{ height: '4rem' }}
                >
                  <h3
                    className={`text-center font-medium leading-tight tracking-tight p-2.5 grow`}
                  >
                    {sliderItem.title}
                  </h3>
                </div>
              </div>{' '}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls flex justify-center mt-10">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
