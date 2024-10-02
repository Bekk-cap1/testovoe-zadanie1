import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import './App.scss';
import data from './assets/data';
import { A11y, Controller, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';


function App() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const swiperr = useSwiper();

  const dotStyle = {
    position: 'absolute',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#42567A',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className='history__dates'>Исторические даты</h1>
        <div className="circle__background">
          <div className="line horizontal"></div>
          <div className="line vertical"></div>
          <div className="line diagonal left"></div>
          <div className="line diagonal right"></div>
          <div className="circle">
            <div className='dot dot-1'>6</div>
            <div className='dot dot-2' style={{ ...dotStyle, top: '50%', left: '100%' }}></div>
            <div className='dot dot-3' style={{ ...dotStyle, top: '90%', left: '80%' }}></div>
            <div className='dot dot-4' style={{ ...dotStyle, top: '10%', left: '20%' }}></div>
            <div className='dot dot-5' style={{ ...dotStyle, top: '50%', left: '0%' }}></div>
            <div className='dot dot-6' style={{ ...dotStyle, top: '90%', left: '20%' }}></div>
          </div>
        </div>
        <div className="dates">
          <div className="year__2015">2015</div>
          <div className="year__2022">2022</div>
        </div>
        <div className="events">
          <div className="swiper-container"> {/* Изменил класс, чтобы избежать конфликтов */}
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}  // Установил все необходимые модули
              spaceBetween={60}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
            >
              {
                data?.map((e) => (
                  <SwiperSlide className='swipers' key={e.id}>
                    <h4>{e.year}</h4>
                    <p>{e.text}</p>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
