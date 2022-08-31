export const initialState = {
  carList: null,
  carInfo: {},
  user: null,
  carType: "",
  currentLocation: "",

};

//takes a state and a action (add to datalayer or get from datalayer)
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_USERNULL":
      return {
        ...state,
        user: null,
      };
    case "SET_CARINFO":
      return {
        ...state,
        carInfo: action.info,
      };
    case "SET_CARS":
      return {
        ...state,
        carList: action.carList,
      };
    case "SET_UPDATEDCARS":
      return {
        carList: action.carList,
      };
    case "SET_CARTYPE":
      return {
        ...state,
        carType: action.info,
      };
    case "SET_LOCATION":
      return {
        ...state,
        currentLocation: action.info,
      } 

    default:
      return state;
  }
};

export default reducer;
