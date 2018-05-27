//fetch data from url using ES6 fetch api
export const fetchBeer = () => {
  const api = "http://starlord.hackerearth.com/beercraft";
  return fetch(api).then(response => Promise.all([response, response.json()]));
};


export const fetchBeerRequest=()=>({
  type:"FETCH_BEER_REQUEST"
})


export const fetchBeerSuccess=(Beer)=>({
  type:"FETCH_BEER_SUCCESS",
  Beer
});

export const fetchBeerError=()=>({
  type:"FETCH_BEER_ERROR"
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