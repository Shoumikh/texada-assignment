import React from 'react';
import CarCard from '../CarCard/CarCard';
import ReviewCar from '../ReviewCar/ReviewCar';
import { useStateValue } from '../StateProvider';
import users from '../users';
import './Confirmation.css';

const Confirmation = () => {
  const [state, dispatch] = useStateValue();

  //finding customer name from the user.js file as the user has not input it when the sign in
  const customerName = users.map((person) => {
    if (state.user !== null) {
      if (state.user.email === person.email && person.email !== '') {
        return person.name;
      } else {
        return '';
      }
    }
  });

  return (
    <div className='confirmation'>
      <div className='confirmation__container'>
        <h4>Congratulations, {customerName} </h4>
        <p>Your car has been booked. Texada will contact with you soon. Thank you.</p>
        {/* <ReviewCar
          image={state.carInfo.image}
          model={state.carInfo.model}
          // info={car.info}
          info={state.carInfo.info}
          personCapasity={state.carInfo.personCapacity}
          bagCapasity={state.carInfo.bagCapasity}
          fuelType={state.carInfo.fuelType}
          gearType={state.carInfo.gearType}
          type={state.carInfo.type}
        /> */}
        <ReviewCar
          code={state.carInfo.code}
          name={state.carInfo.name}
          image='https://p.kindpng.com/picc/s/210-2104265_vaporwave-vector-car-hd-png-download.png'
          type={state.carInfo.type}
          durability={state.carInfo.durability}
          max_durability={state.carInfo.max_durability}
          mileage={state.carInfo.mileage}
          price={state.carInfo.price}
          minimum_rent_period={state.carInfo.minimum_rent_period}
        />
      </div>
    </div>
  );
};

export default Confirmation;
