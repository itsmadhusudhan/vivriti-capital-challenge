const beerFiltersReducerDefaultState = {
  name:""
};

const beerFiltersReducer = (state = beerFiltersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_NAME_FILTER":
      return {...state,name:action.name}
    default:
      return state;
  }
};

export default beerFiltersReducer;
