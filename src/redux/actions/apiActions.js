//fetch data from url using ES6 fetch api
export const fetchBeer = () => {
  const api = "http://starlord.hackerearth.com/beercraft";
  return fetch(api).then(response => Promise.all([response, response.json()]));
};


export const fetchBeerRequest=()=>({
  type:"FETCH_BEERS_REQUEST"
})


export const fetchBeerSuccess=(beers)=>({
  type:"FETCH_BEERS_SUCCESS",
  beers
});

export const fetchBeerError=()=>({
  type:"FETCH_BEERS_ERROR"
})


export const fetchBeerWithRedux = () => {
  return dispatch => {
    dispatch(fetchBeerRequest());
    return fetchBeer().then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchBeerSuccess(json));
      } else {
        dispatch(fetchBeerError());
      }
    });
  };
};