import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PorfolioSlider from './images/PorfolioSlider.jpg';

const SliderCarousel = () => {
  const slider = [
    {

      title: '"My Work"',
      des: "Explore a collection of projects that define my skills and passion.",
      contact: '03488320805',

    },
    {
     
      title: '"My Work"',
      des: "Explore a collection of projects that define my skills and passion.",
       contact: '03488320805',

    },
    {

      title: '"My Work"',
      des: "Explore a collection of projects that define my skills and passion.",
      contact: '03488320805',

    },
  
  ];

  return (
    <div className='slider-bg mt-5'>
      <Carousel>
        {slider.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100" 
              src={PorfolioSlider}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption>
              <div className='slider-manege'>
              <div className='slide-title'>{slide.title}</div>
              <div className='slide-des'>{slide.des}</div>
              <div className='slide-content'>{slide.contact}</div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderCarousel;

