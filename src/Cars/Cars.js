import React from 'react';
import CarCard from '../CarCard/CarCard';
import RentForm from '../Home/RentForm/RentForm';
import './Cars.css';
import { cars } from '../cars';
import { useStateValue } from '../StateProvider';

function Cars() {
  const [state, dispatch] = useStateValue();

  return (
    <div className='cars'>
      <div className='cars__conainer'>
        <div className='cars__rentForm'>
          <RentForm />
        </div>
        <div className='cars__cardContainer'>
          <div className='cars__cardItem'>
            {cars.map((item) => {
              return (
                <CarCard
                  code={item.code}
                  name={item.name}
                  image='https://p.kindpng.com/picc/s/210-2104265_vaporwave-vector-car-hd-png-download.png'
                  type={item.type}
                  durability={item.durability}
                  max_durability={item.max_durability}
                  mileage={item.mileage}
                  price={item.price}
                  minimum_rent_period={item.minimum_rent_period}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cars;
