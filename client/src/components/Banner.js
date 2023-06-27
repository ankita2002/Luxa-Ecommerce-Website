import React, { useState, useEffect } from 'react';
import {AiOutlineDoubleRight, AiOutlineDoubleLeft} from 'react-icons/ai';
// import {rare, fashion, RealEstate, art2, automobile, collectables} from "../asserts/index.js"


const Banner = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        //<video loop autoPlay > <source src={require('../asserts/rare.mp4')} type="video/mp4" /> </video>,
        //<video loop autoPlay > <source src={require('../asserts/art2.mp4')} type="video/mp4" /> </video>,
        //<video loop autoPlay > <source src={require('../asserts/fashion.mp4')} type="video/mp4" /> </video>,
        //<video loop autoPlay > <source src={require('../asserts/automobile.mp4')} type="video/mp4" /> </video>,
        //<video loop autoPlay > <source src={require('../asserts/RealEstate.mp4')} type="video/mp4" /> </video>,
        //<video loop autoPlay > <source src={require('../asserts/collectables.mp4')} type="video/mp4" /> </video>,

        //"https://cdn.luxepolis.com/media/custom/banners/resize/Main_banner/File-1680619722.jpeg"
        "https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1685335849.jpg",
        "https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1685083980.jpg",
        "https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1683890382.jpg",
        "https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1684647101.jpg",
        "https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1684819665.jpg",
        "https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1684821033.jpg",    
        "https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1683731195.jpg",  
          
    ];

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
      };
    
      const nextSlide = () => {
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
      };
    
      useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 3000);
        return () => clearInterval(interval);
      }, []);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          nextSlide();
        }, 5000);
        return () => clearTimeout(timer);
      }, [currentSlide]);

      
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[700vw] h-full flex transition-transform duration-1000"
        >
          {data.map((img, index) => (
            <img
              key={index}
              className="w-screen h-full object-cover"
              src={img}
              alt={`Img ${index + 1}`}
              loading="priority"
            />
          ))}
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700
             hover:text-white active:bg-gray-900 duration-300"
          >
            <AiOutlineDoubleLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700
             hover:text-white active:bg-gray-900 duration-300"
          >
            <AiOutlineDoubleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
