const beerReducerDefaultState = [];

const beerReducer = (state = beerReducerDefaultState, action) => {
  switch (action.type) {
    case "FETCH_BEER_REQUEST":
      return state;
    case "FETCH_BEER_SUCCESS":
      return [...state,...action.Beer];
    case "FETCH_BEER_ERROR":
      return state;
    default:
      return state;
  }
};

export default beerReducer;
