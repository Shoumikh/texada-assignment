import React, { useState } from 'react';
import { useStateValue } from '../StateProvider';
import users from '../users.js';
import { cars } from '../cars.js';
import orders from '../orders.js';
import DatePicker from 'react-datepicker';

import './Checkout.css';
import ReviewCar from '../ReviewCar/ReviewCar';
import { StarTwoTone } from '@material-ui/icons';
import { SplitButton, Dropdown, DropdownButton } from 'react-bootstrap';
import { Button, ButtonGroup } from '@material-ui/core';
import { number } from 'yup';
import { useHistory } from 'react-router';
import { useEffect } from 'react';

const Checkout = () => {
  const [state, dispatch] = useStateValue();
  const [daysHired, setDaysHired] = useState('1');
  const [price, setPrice] = useState(0);
  const [address, setAddress] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const history = useHistory();

  console.log(state.carInfo.price);
  //----- Car Model Dropdown ------
  const timeOptions = ['1', '2', '3', '4', '5', '6', '7'];
  const defaultTimeOption = timeOptions[0];
  //   console.log(defaultTimeOption);

  //finding customer name from the user.js file as the user has not input it when the sign in
  // const customerName = users.map((person) => {
  //   if (state.user.email === person.epmail && person.email !== '') {
  //     return person.name;
  //   } else {
  //     return '';
  //   }
  // });

  useEffect(() => {
    console.log('Start', startDate);
    console.log('End', endDate);
    if (endDate !== null && startDate !== null) {
      const totalDays = getDifferenceInDays(startDate, endDate) + 1;
      console.log('Total Days', totalDays);
      setDaysHired(totalDays);
    }
    console.log('Days Hired', daysHired);
  }, [startDate, endDate]);

  //handle number of hiring days, weeks, hours dropdown
  // const handleTimeHired = (e) => {
  //   setTimeHired(e);
  // };

  const handleEndDate = (date) => {
    setEndDate(date);
    console.log('End Date', endDate);
  };

  const getDifferenceInDays = (date1, date2) => {
    let difference = date2.getTime() - date1.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  };

  const onConfirm = () => {
    if (startDate === null || endDate === null) {
      alert('Please Insert Book Date and Return Date');
    } else {
      cars.map((car) => {
        if (car.name === state.carInfo.name) {
          return (car.status = 'not-available');
        }
      });

      var today = new Date(); //used for date hired

      orders.push({
        number: orders.length + 1,
        name: state.carInfo.name,
        // customerName: customerName,
        // customerEmail: state.user.email,
        // address: address,
        dateHired: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
        price: parseFloat(state.carInfo.price) * parseFloat(daysHired),
        status: 'Pending',
      });

      //       // creating a new array without the booked car
      //       let filteredCars = state.carList.filter(function(value, index, arr){
      //       return value.model !== state.carInfo.model;

      //       })

      // });

      // dispatch({
      //   type: "SET_UPDATEDCARS",
      //   carList: filteredCars,
      // });
      // //making the cars array empty which holds all the cars
      // state.carList.length = 0;

      // //inserting filteredCars items into cars array
      // filteredCars.map((car) => {
      //   return state.carList.push(car);
      // })

      // console.log("cars>>>>", cars);
      // console.log("carLIST>>>>", state.carList);

      history.push('/confirmation');
    }
  };
  return (
    <div className='checkout'>
      <h3 className='checkout__header'> Checkout</h3>
      <div className='checkout__container'>
        <div className='checkout__customerInfo'>
          <h5>Booking Information</h5>
          <div className='checkout__bookDate'>
            <span>Booking Date: </span>
            <DatePicker className='rentForm__datePicker' selected={startDate} onChange={(date) => setStartDate(date)} selectsStart startDate={startDate} placeholderText='Book Date' />
          </div>

          <br />
          <div>
            <span className='checkout__formLabel'>Return Date: </span>
            <DatePicker
              className='rentForm__datePicker'
              selected={endDate}
              onChange={handleEndDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText='Return Date'
            />
          </div>

          <p className='checkout__daysHired'>Total Days Hired: {daysHired}</p>

          {/* <span>Name: </span>
          <input className='checkout__customerInfoInput' type='text' onChange={(e) => setCustomerName(e.target.value)} Placeholder=' Enter your Name' />
          {console.log('kakkuuuuuuuu', customerName)}
          <p>Email: {state.user.email}</p>
          <br />
          <span>Address: </span>
          <input className='checkout__customerInfoInput' type='text' onChange={(e) => setAddress(e.target.value)} Placeholder=' Enter your address' />
= */}
        </div>
        <div className='checkout__carInfo'>
          <h5>Review Car</h5>
          <div className='checkout__reviewCar'>
            {console.log(state.carInfo.image)}
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
            <h5>Booking Information</h5>
            <div className='checkout__bookingInfo'>
              {/* <div className='checkout__timeHiredContainer'>
                <span>Number of {state.carInfo.type}s: </span>
                <span className='checkout__dropdownTimeContainer'>
                  <DropdownButton className='checkout__timeHired' alignRight title={timeHired} id='dropdown-menu-align-right' size='sm' drop='right' onSelect={handleTimeHired}>
                    <Dropdown.Item eventKey='1'>1</Dropdown.Item>
                    <Dropdown.Item eventKey='2'>2</Dropdown.Item>
                    <Dropdown.Item eventKey='3'>3</Dropdown.Item>
                    <Dropdown.Item eventKey='4'>4</Dropdown.Item>
                    <Dropdown.Item eventKey='5'>5</Dropdown.Item>
                    <Dropdown.Item eventKey='6'>6</Dropdown.Item>
                    <Dropdown.Item eventKey='7'>7</Dropdown.Item>
                  </DropdownButton>
                </span>
              </div> */}

              <p>
                Your Estimated Price for ( {daysHired} Days): <strong>${parseFloat(state.carInfo.price) * parseFloat(daysHired)} </strong>
              </p>
              <p>Do You want to Proceed? </p>
              <button onClick={onConfirm}>Confim Booking</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
