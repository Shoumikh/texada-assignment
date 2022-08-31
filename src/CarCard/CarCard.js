import React from 'react';
import './carCard.css';


function CarCard({ code, name, type, availability, durability, max_durability, needing_repair, mileage, minimum_rent_period, image, info, personCapasity, bagCapasity, fuelType, gearType, price }) {
  return (
    <div className='carCard'>
      <img src={image} alt='' />
      <div className='carCard__info'>
        <h3>{name}</h3>
        <p>{info}</p>
        <div className='carCard__items'>
          <div className='carCard__itemOne'>
            <div className='carCard__itemBox'>
              <span>Type:</span>
              <span>{type}</span>
            </div>
            <div className='carCard__itemBox'>
              <span>Durability:</span>
              <span>{durability}</span>
            </div>
            <div className='carCard__itemBox'>
              <span>Max-Durability:</span>
              <span>{max_durability}</span>
            </div>
            <div className='carCard__itemBox'>
              <span>Mileage:</span>
              <span>{mileage}</span>
            </div>
            <div className='carCard__itemBox'>
              <span>Minimum Rent Period: :</span>
              <span>{minimum_rent_period}</span>
            </div>
          </div>
          <div className='carCard__itemPrice'>
            <p>
              Price: <strong>{price}</strong>
            </p>
            <div className='carCard__butttonBox'>
              <button className='carCard__itemPriceBook'>Book</button>
              <button className='carCard__itemPriceReturn'>Return</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
