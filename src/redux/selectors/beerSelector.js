export const styleSelector = beers => {
  return [...new Set(beers.map(beer => beer.style))].sort();
};

export const beerSelector=(beers,style)=>{
  return beers.filter(beer=>beer.style===style);
}


export const beerNameSelector=(beers,name="")=>{
  return beers.filter(beer=>{
    const nameMatch=beer.name.toLowerCase().includes(name.toLowerCase());
    return nameMatch;    
  })
}

export const cartItemSelector=(items)=>{
  return [...new Set(items)]
}