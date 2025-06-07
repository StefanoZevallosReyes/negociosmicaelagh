"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import styles from "@/app/styles/slider.module.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Slider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <>
      <div className='flex flex-col'>
        <div className="flex flex-col items-center justify-evenly">
          <BsArrowLeftCircleFill onClick={() => nextSlide()} className={`${styles.arrow} ${styles.arrow_left}`} />
          <div className={`${styles.carrusel}`}>
            {data.map((element, idx) => (
              <Image key={idx} alt={element.alt} width={"1000"} height={"1000"} src={element.image}  className={`${slide === idx ? styles.slide : `${styles.slide} ${styles.slide_hidden}`}`}>
              </Image>
            ))}
          </div>
          <BsArrowRightCircleFill onClick={() => prevSlide()} className={`${styles.arrow} ${styles.arrow_right}`} />
        </div>
        <div>
          {data.map((element, idx) => (
            <p key={idx} className={`${slide === idx ? styles.slide : `${styles.slide} ${styles.slide_hidden}`}`}>{element.descripcion} </p>
        ))}
        </div>
      </div>


      {/* <span className={styles.indicators}>
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={slide === idx ? `${styles.indicator}` : `${styles.indicator} ${styles.indicator_inactive}`}
              onClick={() => setSlide(idx)}>
            </button>
          );
        })}
      </span>
     */}

    </>
  )
}

export default Slider