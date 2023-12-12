import React, { useState, useEffect } from 'react';
import axios from 'axios';

import LayoutComponent from '../components/layout';
import LeftContentComponent from '../components/leftcontent';
import RightContentComponent from '../components/rightcontent';

const ProductsPage = () => {
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [price, setPrices] = useState([100,250,500,750,1000]);


    const baseUrl = "https://fakestoreapi.com/products";

    const getProductsApiData = async () => {
        const response = await axios.get(baseUrl);
        const data = response.data;
        localStorage.setItem('originalProducts', JSON.stringify(data))
        const categories = data.map(item => item.category);
        const removeDublicates = [...new Set(categories)];
        setCategories(removeDublicates.sort());
        setData(data);
    }

    const onFilterProducts = (event) => {
        const getStorageProducs = JSON.parse(localStorage.getItem('originalProducts'));
        const filterItems = getStorageProducs.filter(item => item.category === event.target.value);
        setData(event.target.value === "all" ? getStorageProducs : filterItems );
    }

    const onPriceChange = (event) => {
        const targetValue = event.target.value;
        const getStorageProducts = JSON.parse(localStorage.getItem('originalProducts'));
        const filterItemsByPice = getStorageProducts.filter(item => item.price <= targetValue);
        setData(filterItemsByPice)
    }

    useEffect(() => {
        getProductsApiData();
    }, []);
    return (
        <>
            <LayoutComponent>
                <div className='product_parent_div'>
                    <div className='left_component_div'>
                        <LeftContentComponent
                            categoriesData={categories}
                            priceList={price}
                            filterChangeFunction={(e) => onFilterProducts(e)}
                            priceChangeFunction={(e) => onPriceChange(e)}
                        />
                    </div>
                    <div className='right_component_div'>
                        <RightContentComponent sendingApiData={data} />
                    </div>
                </div>

            </LayoutComponent>
        </>
    )
}



export default ProductsPage;