const beerReducerDefaultState = [];

const beerReducer = (state = beerReducerDefaultState, action) => {
  switch (action.type) {
    case "FETCH_BEERS_REQUEST":
      return state;
    case "FETCH_BEERS_SUCCESS":
      return [...state,...action.beers];
    case "FETCH_BEERS_ERROR":
      return state;
    default:
      return state;
  }
};

export default beerReducer;
