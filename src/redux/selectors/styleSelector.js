export const styleSelector = beers => {
  return [...new Set(beers.map(beer => beer.style))].sort();
};

export const beerSelector=(beers,style)=>{
  return beers.filter(beer=>beer.style===style);
}
