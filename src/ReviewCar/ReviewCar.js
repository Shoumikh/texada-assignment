import React, { useState } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import './ReviewCar.css';
import { useStateValue } from '../StateProvider';
import { useHistory } from 'react-router';

function ReviewCar({ code, name, type, availability, durability, max_durability, needing_repair, mileage, minimum_rent_period, image, info, personCapasity, bagCapasity, fuelType, gearType, price }) {
  const [rentPrice, setRentPrice] = useState('');
  const [carInfo, dispatch] = useStateValue('');
  const history = useHistory();

  const onRadioChange = (e) => {
    setRentPrice(e.target.value);
  };

  const onRentClick = (e) => {
    if (rentPrice === '') {
      //   alert("Please Select a Type inorder to rent the car");
    } else {
      //   dispatch({
      //     type: "SET_CARINFO",
      //     info: {
      //       image: image,
      //       model: model,
      //       personCapasity: personCapasity,
      //       price: rentPrice,
      //     },
      //   });
      //   history.push("/checkout");
    }
  };

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
          </div>
          <div className='carCard__itemTwo'>
            <div className='carCard__itemBox'>
              <span>Mileage:</span>
              <span>{mileage}</span>
            </div>
            <div className='carCard__itemBox'>
              <span>Minimum Rent Period: :</span>
              <span>{minimum_rent_period}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCar;
