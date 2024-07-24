"use client";

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import Link from 'next/link';
import Image from 'next/image';

const animation = { duration: 60000, easing: (t) => t };

export default function HorizontalScroll({ slidesData, rtl }) {
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: true,
        breakpoints: {
            '(min-width: 640px)': {
                slides: { perView: 1, spacing: 10 },
            },
            '(min-width: 1024px)': {
                slides: { perView: 3, spacing: 50 },
            },
        },
        rtl: rtl,
        slideChanged(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        created(s) {
            s.moveToIdx(5, true, animation);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
    });

    return (
        <div ref={sliderRef} className="keen-slider">
            {slidesData.map(slide => (
                <div key={slide.id} className={`keen-slider__slide number-slide${slide.id} `}>
                  <Link className='h-full w-[400px] bg-gradient-to-b from-DarkBlue to-Primary via-Primary border-2 border-black rounded-3xl flex flex-col items-center justify-center' href={`/shop/products/${slide.id}`}>
                    <div className=' bg-white rounded p-10 mt-10 w-[150px] '> 
                        <Image className="object-contain" src={slide.image} alt={slide.name} width={150} height={100} />
                    </div>
                    <div className='mt-10 '>
                    <p className='text-xs text-black font-merriweather space-x-10 '>
                    {typeof slide.title === 'string' ? slide.title.slice(0, 20) : ''}
                    </p>
                    </div>
                  </Link>
                </div>
            ))}
        </div>
    );
}