import React from 'react';

const LeftContentComponent = ({ categoriesData, priceList, filterChangeFunction, priceChangeFunction }) => {
    return (
        <>
            <h3 className='category_heading marginBot' > Categories</h3>
            <div className='categrory_list'>
                <input type="radio" id="checkbox1" name="checkbox" onChange={filterChangeFunction} value="all" />All
            </div>
            {categoriesData.map((item, index) => (
                <div className='categrory_list inputPad' key={`${item}/${index}`}>
                    <input type="radio" id={`${item}/${index}`} name="checkbox" onChange={filterChangeFunction} value={item} />
                    <label for={`${item}/${index}`}>{item}</label>
                </div>
            ))}
            <h3 className='category_heading marginTop'> Price Range</h3>
            {priceList.map((pric, index) => (
                <div className='categrory_list' key={`${pric}+${index}`}>
                    <input type="radio" id={`${pric}+${index}`} name="checkbox" onChange={priceChangeFunction} value={pric} />
                    <label for={`${pric}+${index}`}>{pric}</label>
                </div>
            ))}
        </>
    )
}



export default LeftContentComponent;