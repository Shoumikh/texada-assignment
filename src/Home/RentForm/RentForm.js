import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import Dropdown from "react-dropdown";
import 'react-dropdown/style.css';
import './RentForm.css';
import { Button } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useStateValue } from '../../StateProvider';
import { useHistory } from 'react-router';

function RentForm() {
  const [state, dispatch] = useStateValue();
  const [carType, setCarType] = useState('Car Category');
  const [pickupLocation, setpickupLocation] = useState('Pick-Up Location');
  const [dropLocation, setDropLocation] = useState('Drop Down Location');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const history = useHistory();

  //----- Car Model Dropdown ------
  const carOptions = ['Car Model', 'Toyota Corolla', 'Axios', 'Lancer', 'Tata', 'Lamboguni'];
  const defaultCarOption = carOptions[0];
  console.log(defaultCarOption);

  //----- Pick Up Location Dropdown -----
  const pickUpOptions = ['Pick-Up Locaton', 'Dhaka', 'Barishal', 'Chittagong', 'Khulna', 'Rajshahi'];
  const defaultPickUpOption = pickUpOptions[0];

  //----- Drop of Location Dropdown  -----

  const dropOptions = ['Drop-off Locaton', 'Dhaka', 'Barishal', 'Chittagong', 'Khulna', 'Rajshahi'];
  const defaultDropOption = dropOptions[0];

  useEffect(() => {
    dispatch({
      type: 'SET_CARTYPE',
      info: carType,
    });
    dispatch({
      type: 'SET_LOCATION',
      info: pickupLocation,
    });
    console.log('car Type>>>>>>>', carType);
    console.log('car Type>>>>>>>', state?.carType);
  }, [carType, pickupLocation]);

  const handleCarType = (e) => {
    console.log(e);
    setCarType(e);
  };

  const handlePickupLocation = (e) => {
    console.log(e);
    setpickupLocation(e);

    console.log('car Type>>>>>>>', pickupLocation);
    console.log('car Type>>>>>>>', state?.carType);
  };

  const handleDropLocation = (e) => {
    console.log(e);
    setDropLocation('To ' + e);
  };

  const handleSearch = (e) => {
    history.push('/rentcar');
    dispatch({
      type: 'SET_CARTYPE',
      info: carType,
    });
    dispatch({
      type: 'SET_LOCATION',
      info: pickupLocation,
    });
  };

  return (
    <div className='rentForm'>
      <div className='rentForm__container'>
        <h2>Rent a car</h2>
        <div className='rentForm__inputContainer'>
          {/* ----- Car Model Dropdown ------ */}
          <DropdownButton className='rentForm__carCategory' alignRight title={carType} id='dropdown-menu-align-right' onSelect={handleCarType}>
            <Dropdown.Item eventKey='Premium'>Premium</Dropdown.Item>
            <Dropdown.Item eventKey='Luxury'>Luxury</Dropdown.Item>
          </DropdownButton>
          {/* <h4>You selected {carModel}</h4> */}

          {/* <Dropdown
            className="dropdown"
            options={carOptions}
            // onChange={}
            value={defaultCarOption}
            placeholder="Select an option"
          /> */}
          <DropdownButton className='rentForm__carCategory' alignRight title={pickupLocation} id='dropdown-menu-align-right' onSelect={handlePickupLocation}>
            <Dropdown.Item eventKey='Dhaka'>Dhaka</Dropdown.Item>
            <Dropdown.Item eventKey='Barisal'>Barisal</Dropdown.Item>
            <Dropdown.Item eventKey='Khulna'>Khulna</Dropdown.Item>
            <Dropdown.Item eventKey='Rajshahi'>Rajshahi</Dropdown.Item>
            <Dropdown.Item eventKey='Sylhet'>Sylhet</Dropdown.Item>
            <Dropdown.Item eventKey='Chittagong'>Chittagong</Dropdown.Item>
          </DropdownButton>

          {/* <Dropdown
            className="dropdown"
            options={pickUpOptions}
            // onChange={this._onSelect}
            value={defaultPickUpOption}
            placeholder="Select an option"
          /> */}

          {/* <Dropdown
            className="dropdown"
            options={dropOptions}
            // onChange={this._onSelect}
            value={defaultDropOption}
            placeholder="Select an option"
          /> */}
          {/* <DropdownButton
            className="rentForm__carCategory"
            alignRight
            title={dropLocation}
            id="dropdown-menu-align-right"
            onSelect={handleDropLocation}
          >
            <Dropdown.Item eventKey="Dhaka">Dhaka</Dropdown.Item>
            <Dropdown.Item eventKey="Barisal">Barisal</Dropdown.Item>
            <Dropdown.Item eventKey="Khulna">Khulna</Dropdown.Item>
            <Dropdown.Item eventKey="Rajshahi">Rajshahi</Dropdown.Item>
            <Dropdown.Item eventKey="Sylhet">Sylhet</Dropdown.Item>
            <Dropdown.Item eventKey="Chittagong">Chittagong</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
          </DropdownButton> */}

          <DatePicker className='rentForm__datePicker' selected={startDate} onChange={(date) => setStartDate(date)} selectsStart startDate={startDate} placeholderText='Pick-Up Date' />

          <Button onClick={handleSearch} variant='contained' color='primary'>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RentForm;
