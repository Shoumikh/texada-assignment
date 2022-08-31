import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './HeaderTwo.css';
import { Link } from 'react-router-dom';

function HeaderTwo() {
  return (
    <div className='headerTwo'>
      <div className='headerTwo__left'>
        {/* <img src={logo} alt="" /> */}
        <Link className='headerTwo__logo' to='/'>
          <h2>Texada</h2>
        </Link>
        <span>CarRental</span>
      </div>
      <div className='headerTwo__middle'>
        <p>Home</p>
        <p>Service</p>
        <p>About</p>
        <Link className='headerTwo__middleItem' to='/rentcar'>
          <p>OurCars</p>
        </Link>
        <p>Contact</p>
        <Link className='headerTwo__middleItem' to='/signin'>
          <p>SignIn</p>
        </Link>

        {/* <SearchIcon className="headerTwo__middleSearchIcon" /> */}
      </div>
      <div className='headerTwo__right'>
        <div className='headerTwo__rightSearch'></div>
        <Link className='headerTwo__rightButton' to='/rentcar'>
          <button>Rent a Car</button>
        </Link>
      </div>
    </div>
  );
}

export default HeaderTwo;
