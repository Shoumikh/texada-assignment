import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './HeaderTwo.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function HeaderTwo() {
  const [{ user }] = useStateValue();
  const [{ state, dispatch }] = useStateValue();
  const [signStatus, setSignStatus] = useState('SignIn');

  const handleSignOut = () => {
    setSignStatus('SignIn');
  };

  const handleSignIn = () => {
    setSignStatus('SignOut');
  };
  // const signOut = () => {
  //   dispatch({
  //     type: "SET_USERNULL",
  //   });
  //   console.log("Hiiii", user);
  // };

  return (
    <div className='headerTwo'>
      <div className='headerTwo__left'>
        {/* <img src={logo} alt="" /> */}
        <Link className='headerTwo__logo' to='/'>
          <h4>Texada</h4>
        </Link>
        <span>CarRental</span>
      </div>
      {/* <div className='headerTwo__middle'>
        <Link className='headerTwo__middleItem' to='/'>
          <p>Home</p>
        </Link>

        <p>Service</p>
        <p>About</p>
        <Link className='headerTwo__middleItem' to='/rentcar'>
          <p>OurCars</p>
        </Link>
        <Link className='headerTwo__middleItem' to='/signin'>
          {user === null ? <p onClick={handleSignIn}>{signStatus}</p> : <p onClick={handleSignOut}>{signStatus}</p>}
        </Link>
        {user?.isAdmin === true ? (
          <Link className='headerTwo__middleItem' to='/admin'>
            {' '}
            <p>Admin</p>{' '}
          </Link>
        ) : (
          console.log('zill')
        )}
        <SearchIcon className="headerTwo__middleSearchIcon" />
      </div> */}
      {/* <div className='headerTwo__right'>
        <div className='headerTwo__rightSearch'></div>
        <Link className='headerTwo__rightButton' to='/rentcar'>
          <button>Rent a Car</button>
        </Link>
      </div> */}
    </div>
  );
}

export default HeaderTwo;
