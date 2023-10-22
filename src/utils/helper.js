

export const filterData = (searchText, restaurants)=> {
    const fData = restaurants.filter((restaurant)=>{
      return restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase());
    });
  
    return fData;
}