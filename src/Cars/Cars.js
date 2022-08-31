import React from 'react';
import CarCard from '../CarCard/CarCard';
// import RentForm from "../Home/RentForm/RentForm";
import { data } from './../Data/data';
import './Cars.css';

function Cars() {
  return (
    <div className='cars'>
      <div className='cars__conainer'>
        <div className='cars__rentForm'>{/* <RentForm /> */}</div>
        <div className='cars__cardContainer'>
          <div className='cars__cardItem'>
            {data.map((item) => {
              return (
                <CarCard
                  code={item.code}
                  name={item.name}
                  image=''
                  type={item.type}
                  durability={item.durability}
                  max_durability={item.max_durability}
                  mileage={item.mileage}
                  price={item.price}
                  minimum_rent_period={item.minimum_rent_period}
                />
              );
            })}
            <CarCard
              code='p1'
              name
              image='https://www.autocar.co.uk/sites/autocar.co.uk/files/audi-a3-sportback_0.jpg'
              model='Air Compressor 12 Gas'
              info='Manual Transformation ( CCMP ).Is 
              not Suitable for heighest E-Cards. Has
              CDW interface'
              personCapasity='2'
              bagCapasity='2'
              fuelType='Diesel'
              gearType='6 speed Manual'
              price='20000'
            />

            <CarCard
              image='https://www.cars-data.com/pictures/thumbs/350px/bmw/bmw-x1_4155_1.jpg'
              model='BMW X1 sDrive18i specs'
              info='Manual Transformation ( CCMP ).Is 
              not Suitable for heighest E-Cards. Has
              CDW interface'
              personCapasity='2'
              bagCapasity='2'
              fuelType='Diesel'
              gearType='6 speed Manual'
              price='30000'
            />

            <CarCard
              image='https://www.cars-data.com/pictures/thumbs/350px/audi/audi-a4-avant_4125_1.jpg'
              model='Audi A4 Avant 35 TFSI sport'
              info='Manual Transformation ( CCMP ).Is 
              not Suitable for heighest E-Cards. Has
              CDW interface'
              personCapasity='4'
              bagCapasity='4'
              fuelType='Diesel'
              gearType='6 speed Manual'
              price='50000'
            />
            <CarCard
              image='https://www.cars-data.com/pictures/thumbs/350px/jeep/jeep-wrangler-unlimited_4215_1.jpg'
              model='2019 Jeep Wrangler Unlimited'
              info='Manual Transformation ( CCMP ).Is 
              not Suitable for heighest E-Cards. Has
              CDW interface'
              personCapasity='4'
              bagCapasity='4'
              fuelType='Diesel'
              gearType='6 speed Manual'
              price='25000'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cars;
