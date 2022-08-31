import React from 'react';
import { useStateValue } from '../StateProvider';
import './Home.css';
// import RentForm from './RentForm/RentForm';
import Cars from './../Cars/Cars';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <div className='home__container'>
          <div className='home__title'>
            <h2>Book and Return Vehicle Easily</h2>
            <p>Get a vehicle wherever and whenever you need</p>
          </div>

          <img
            className='home__image'
            src='https://images.squarespace-cdn.com/content/v1/57e49a19414fb5b5169a9161/1517264237621-6JSAOX4EWG1I318PY2W6/217606_Winning_3Cars_r3.jpg'
            // src='https://goldcar.s3.amazonaws.com/interrent/landings/ofertas/oferta_1_euro_2018/from-1euro-day_background.jpg'
            //   src="https://s1.cdn.autoevolution.com/images/news/2019-hyundai-santa-fe-official-images-reveal-a-completely-new-suv-123289_1.jpg"
            alt='amazon prime'
          />
        </div>
        <div className='home__rentForm'>
          {/* <RentForm className='home__rentForm' /> */}
          <div className='home__carsBox'>
            <Cars />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
