'use client'
import React, { useState } from 'react'

const slides = [
    {
      img: 'https://avatars.mds.yandex.net/get-altay/9720991/2a0000018aefbac64c51e551c11597cbc8b0/XXXL',
      title: 'Первый корпус колледжа на улице Красный проспект',
    },
    {
      img: 'https://avatars.mds.yandex.net/get-altay/13212679/2a000001941672fdccd305de15951adc03ca/XXXL',
      title: 'Корпус колледжа раасположенный на ​Проспекте Дзержинского',
    },
    {
      img: 'http://ktovobrnauke.ru/img/images/andrey-brikman-direktor-novosibirskogo-aviacionnogo-tehnicheskogo-kolledzha.jpg',
      title: 'Андрей Брикман, директор Новосибирского авиационного технического колледжа',
    },
    {
      img: 'https://vn.ru/upload/uf/ea7/ea7aa4c5_11a7e71b9c781fc11d8b3153_thumb_729-486_ea44ecca0b594017-15619.jpg',
      title: 'Финалисты конкурса «Новосибирская марка»',
    },
  ]
  

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg mt-8">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
  <div key={index} className="relative w-full flex-shrink-0">
    <img
      src={slide.img}
      alt={`slide-${index}`}
      className="w-full h-[400px] object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30" />
    
    <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-lg max-w-sm">
      {slide.title}
    </div>
  </div>
))}

      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        &#10095;
      </button>

      <div className="absolute bottom-2 w-full flex justify-center space-x-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${current === i ? 'bg-white' : 'bg-gray-400'} cursor-pointer`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  )
}
