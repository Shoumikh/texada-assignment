import React, { useState } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import './carCard.css';
import { useStateValue } from '../StateProvider';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import { boolean } from 'yup';

function CarCard({ code, name, type, availability, durability, max_durability, needing_repair, mileage, minimum_rent_period, image, info, personCapasity, bagCapasity, fuelType, gearType, price }) {
  const [rentPrice, setRentPrice] = useState('');
  // const [rentType, setRentType] = useState("");
  const [state, dispatch] = useStateValue('');
  const history = useHistory();
  const rentType = '';

  useEffect(() => {
    // {
    //   console.log('tttttttt', rentPrice);
    // }
    // {
    //   console.log('tttttttt', hourlyPrice);
    // }
    // {
    //   console.log('tttttttt', rentType);
    // }
    // {
    //   console.log(boolean(weeklyPrice === rentType));
    // }
    // if (rentPrice === hourlyPrice) {
    //   rentType = 'Hour';
    // }
    // else if (rentPrice === weeklyPrice) {
    //   rentType = "Week";
    // }
    // else {
    //   rentType = "Day"
    // }
  }, []);

  const onRadioChange = (e) => {
    setRentPrice(e.target.value);
  };

  const onRentClick = (e) => {
    // if (rentPrice === '') {
    //   alert('Please Select a Type inorder to rent the car');
    // } else {
    dispatch({
      type: 'SET_CARINFO',
      info: {
        image: image,
        code: code,
        name: name,
        type: type,
        durability: durability,
        max_durability: max_durability,
        mileage: mileage,
        price: price,
        minimum_rent_period: minimum_rent_period,
      },
    });
    console.log('usrrrr', state.user);
    // console.log('rentttttt', rentPrice);
    // console.log('rentttttt', rentPrice);
    // console.log('rentttttthourrrrr', hourlyPrice);

    // if (state.user === null) {
    //   // history.push('/signin');
    //   history.push('/checkout');
    // } else {
    history.push('/checkout');
    // }
    // }
  };
  const onReturnClick = (e) => {
    dispatch({
      type: 'SET_CARINFO',
      info: {
        image: image,
        code: code,
        name: name,
        type: type,
        durability: durability,
        max_durability: max_durability,
        mileage: mileage,
        price: price,
        minimum_rent_period: minimum_rent_period,
      },
    });
    history.push('/return');
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
          <div className='carCard__itemPrice'>
            {/* <div className='carCard__itemHeader'>
              <CheckBoxIcon />
              <span className='carCard__typeHead'> Pick Your Type</span>
            </div>

            <label>
              <input className='carCard__radio' type='radio' value={hourlyPrice} checked={rentPrice === hourlyPrice} onChange={onRadioChange} />
              Price per hour <strong>{hourlyPrice}</strong> Taka
            </label>
            <br />
            <label>
              <input className='carCard__radio' type='radio' name='days' value={dailyPrice} checked={rentPrice === dailyPrice} onChange={onRadioChange} />
              Price per day <strong>{dailyPrice}</strong> Taka
            </label>
            <br />
            <label>
              <input className='carCard__radio' type='radio' value={weeklyPrice} checked={rentPrice === weeklyPrice} onChange={onRadioChange} />
              Price per week <strong>{weeklyPrice}</strong> Taka
            </label>
            <br /> */}
            <button className='bookButton' onClick={onRentClick}>
              Book
            </button>
            <button className='returnButton' onClick={onReturnClick}>
              Return
            </button>
            {/* {console.log('tttttttt', rentPrice)}
            {console.log('tttttttt', hourlyPrice)}
            {console.log('tttttttt', rentType)} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
