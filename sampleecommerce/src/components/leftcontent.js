import React from 'react';

const LeftContentComponent = ({categoriesData, priceList, filterChangeFunction, priceChangeFunction}) => {
    return(
        <>
       <h3 className='category_heading'> Categories</h3>
       <div className='categrory_list'>
            <input  type="radio" id="checkbox" name="checkbox" onChange={filterChangeFunction} value="all"  />All
            </div>
        {categoriesData.map(item => (
            <div className='categrory_list'>
            <input  type="radio" id="checkbox" name="checkbox" onChange={filterChangeFunction} value={item}  />{item}
            </div>
        ))}
         <h3 className='category_heading'> Price Range</h3>
         {priceList.map(pric => (
            <div className='categrory_list'>
            <input  type="radio" id="checkbox" name="checkbox" onChange={priceChangeFunction} value={pric}  />{pric}
            </div>
         ))}
        </>
    )
} 



export default LeftContentComponent;