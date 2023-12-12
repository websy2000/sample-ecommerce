import React from 'react';
import globalConstants from '../config/constants';
import IconsObjects from "../config/globalIcons";
import { useNavigate } from 'react-router-dom';

const ContentComponent = () => {
    const navigate = useNavigate();

    const redirectProductPage = () => {
          navigate('/products');
    }
    return(
        <div className='content_wrapper'>
         <h2 className='product_heading'>{globalConstants.Content_Items.ProductsTitle}</h2>
         <ul className='products_ul'>
           
            <li>
                <img src={IconsObjects.productImages.Product1} />
                <p>{globalConstants.Content_Items.RedmiTitle}</p>
            </li>
            <li>
            <img src={IconsObjects.productImages.Product2} />
                <p>{globalConstants.Content_Items.RefrigeratorTitle}</p>
            </li>
            <li>
            <img src={IconsObjects.productImages.Product3} />
                <p>{globalConstants.Content_Items.IphoneTitle}</p>
            </li>
            <li>
            <img src={IconsObjects.productImages.Product4} />
                <p>{globalConstants.Content_Items.CoolerTitle}</p>
            </li>
            <li>
            <img src={IconsObjects.productImages.Product5} />
                <p>{globalConstants.Content_Items.WashingTitle}</p>
            </li>
            <li>
            <img src={IconsObjects.productImages.Product6} />
                <p>{globalConstants.Content_Items.TabTitle}</p>
            </li>
        </ul>
        <button className='product_ul_btn' type="button" onClick={redirectProductPage}>View All Products</button>
        </div>
    )
}

export default ContentComponent;