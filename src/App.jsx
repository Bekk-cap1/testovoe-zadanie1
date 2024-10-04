import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import './App.scss';
import data from './assets/data';
import { A11y, Controller, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import Vector from './image/Vector.svg'
import Tochka from './image/ellipse.png'


function App() {

  const sliderWrap = useRef()
  const [change, setChange] = useState(0)
  useEffect(() => {
    sliderWrap.current.style.transform = `translate(${change}%)`
    sliderWrap.current.style.transition = `0.4s ease-in-out`

  }, [change])

  const sliderWrap1 = useRef()
  const [lion, setLion] = useState(0)
  useEffect(() => {
    sliderWrap1.current.style.transform = `translate(${lion}%)`
    sliderWrap1.current.style.transition = `0.4s ease-in-out`

  }, [lion])

  const sliderNumber = useRef()
  const [number, setNumber] = useState(0)
  useEffect(() => {
    sliderNumber.current.style.transform = `rotate(${number}deg)`
    sliderNumber.current.style.transition = `0.4s ease-in-out`
    sliderNumber.current.children.dot.style.transform = `rotate(60deg)`
    console.log(sliderNumber.current.children.dot);

  }, [number])

  const [count, setCount] = useState(1)

  const changeNumbersIncrease = (e) => {
    e.preventDefault()
    if (number < -240) {
      setNumber(0)
    }
    else {
      setNumber(number - 60)
    }
    setCount(count + 1)
    console.log(count);
  }
  const changeNumbersDecrease = (e) => {
    e.preventDefault()
    if (number > -60) {
      setNumber(-360)
    }
    else {
      setNumber(number + 60)
    }
    setCount(count - 1)
  }

  const changeTextIncrease = (e) => {
    e.preventDefault()
    if (lion < -193.2) {
      setLion(0)
    }
    else {
      setLion(lion - 48.3)
    }
    setCount(count + 1)
  }
  const changeTextDecrease = (e) => {
    e.preventDefault()
    if (lion > -47.3) {
      setLion(-241.5)
    }
    else {
      setLion(lion + 48.3)
    }
    setCount(count - 1)
  }


  return (
    <div className="App">
      <div className="container">
        <h1 className='history__dates'>Исторические даты</h1>
        <div className="circle__background">
          <div className="line horizontal"></div>
          <div className="line vertical"></div>
          <div className="line diagonal left"></div>
          <div className="line diagonal right"></div>
          <div className="line circle" ref={sliderNumber}>
            <div name='dott' className={count == 1 ? 'dot__style dot-1 dots' : 'dot__style dot-1'}>{count == 1 ? count : ''} <p style={count == 1 ? { display: 'block' } : { display: 'none' }}>Наука</p></div>
            <div name='dot' style={count == 2 ? { left: '96%' } : {}} className={count == 2 ? 'dot__style dot-2 dots' : 'dot__style dot-2'}>{count == 2 ? count : ''} <p style={count == 2 ? { display: 'block', paddingLeft: '80px', position: 'absolute' } : { display: 'none' }}>Искусство</p></div>
            <div name='dot' style={count == 3 ? { left: '71%' } : {}} className={count == 3 ? 'dot__style dot-3 dots' : 'dot__style dot-3'}>{count == 3 ? count : ''} <p style={count == 3 ? { display: 'block', paddingLeft: '80px', position: 'absolute' } : { display: 'none' }}>Творчество</p></div>
            <div name='dot' style={count == 6 ? { left: '24%', top: '0' } : {}} className={count == 6 ? 'dot__style dot-4 dots' : 'dot__style dot-4'}>{count == 6 ? count : ''} <p style={count == 6 ? { display: 'block', paddingLeft: '80px', position: 'absolute' } : { display: 'none' }}>Литература</p></div>
            <div name='dot' style={count == 5 ? { left: '-4%' } : {}} className={count == 5 ? 'dot__style dot-5 dots' : 'dot__style dot-5'}>{count == 5 ? count : ''} <p style={count == 5 ? { display: 'block', paddingLeft: '80px', position: 'absolute' } : { display: 'none' }}>Культура</p></div>
            <div name='dot' style={count == 4 ? { left: '21%' } : {}} className={count == 4 ? 'dot__style dot-6 dots' : 'dot__style dot-6'}>{count == 4 ? count : ''} <p style={count == 4 ? { display: 'block', paddingLeft: '80px', position: 'absolute' } : { display: 'none' }}>Изучение</p></div>
          </div>
        </div>
        <hr />
        <div className="dates">
          <div className="year__2015">2015</div>
          <div className="year__2022">2022</div>
        </div>

        <div className='numbers__count'>
          <h4>{count}/6</h4>
          <div className='for__numbers'>
            <button className={count == 1 ? 'dicrement__second disabled' : 'dicrement__second'} disabled={count == 1} onClick={changeNumbersDecrease}><img src={Vector} alt="" /></button>
            <button className={count == 6 ? 'icrement__second disabled' : 'icrement__second'} disabled={count == 6} onClick={changeNumbersIncrease}><img src={Vector} alt="" /></button>
          </div>
        </div>

        <div className='swipe__container'>
          <div className='' ref={sliderWrap}>
            <ul className="swiper">
              {
                data?.map((e) => (
                  <li className='swipe__container__inner__ul__li'>
                    <h4>{e.year}</h4>
                    <p>{e.text}</p>

                  </li>
                ))
              }
            </ul>
          </div>
          <button className='dicrement' onClick={()=>change > -33.3 ? setChange(-99.9) : setChange(change + 31.3)}><img src={Vector} alt="" /></button>
          <button className='icrement' onClick={() => change < -66.6 ? setChange(0) : setChange(change - 32.3)}><img src={Vector} alt="" /></button>
        </div>

        <div className='swipe__container1'>
          <div className='' ref={sliderWrap1}>
            <ul className="swiper">
              {
                data?.map((e) => (
                  <li className='swipe__container__inner__ul__li' style={count == e.id ? {} : { opacity: '0.4' }}>
                    <h4>{e.year}</h4>
                    <p>{e.text}</p>

                  </li>
                ))
              }
            </ul>
          </div>
          <button className='dicrement' onClick={changeTextDecrease} style={count !== 1 ? {} : { opacity: '0.4' }} disabled={count == 1}><img src={Vector} alt="" /></button>
          <button className='icrement' onClick={changeTextIncrease} style={count !== 6 ? {} : { opacity: '0.4' }} disabled={count == 6}><img src={Vector} alt="" /></button>
          <span className='span'>
            <li className={lion == 0 ? 'image' : ''} onClick={() => setLion(0)}>
              <b><img style={count == 1? {} : {opacity:'0.4'}} onClick={()=>setCount(1)} className='img' src={Tochka} alt="" /></b>
            </li>
            <li className={lion == -48.3 ? 'image' : ''} onClick={() => setLion(-48.3)}>
              <b><img style={count == 2? {} : {opacity:'0.4'}} onClick={()=>setCount(2)} className='img' src={Tochka} alt="" /></b>
            </li>
            <li className={lion == -96.6 ? 'image' : ''} onClick={() => setLion(-96.6)}>
              <b><img style={count == 3? {} : {opacity:'0.4'}} onClick={()=>setCount(3)} className='img' src={Tochka} alt="" /></b>
            </li>
            <li className={lion == -144.9 ? 'image' : ''} onClick={() => setLion(-144.9)}>
              <b><img style={count == 4? {} : {opacity:'0.4'}} onClick={()=>setCount(4)} className='img' src={Tochka} alt="" /></b>
            </li>
            <li className={lion == -193.2 ? 'image' : ''} onClick={() => setLion(-193.2)}>
              <b><img style={count == 5? {} : {opacity:'0.4'}} onClick={()=>setCount(5)} className='img' src={Tochka} alt="" /></b>
            </li>
            <li className={lion == -241.5 ? 'image' : ''} onClick={() => setLion(-241.5)}>
              <b><img style={count == 6? {} : {opacity:'0.4'}} onClick={()=>setCount(6)} className='img' src={Tochka} alt="" /></b>
            </li>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
