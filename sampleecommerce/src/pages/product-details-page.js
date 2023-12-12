import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LayoutComponent from '../components/layout';
import { useNavigate } from 'react-router-dom';
import globalConstants from '../config/constants';
const ProductDetailsPage = () => {
    const [productDetails, setProductDetails] = useState({});
    const [userId, setUserId] = useState(3);
    const [date, setDate] = useState(new Date());
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);

    const navigate = useNavigate();

    const baseUrl = "https://fakestoreapi.com";

    const searchParams = new URLSearchParams(window.location.search);

    const getSingleDataApi = async () => {
        const response = await axios.get(`${baseUrl}/products/${searchParams.get('productId')}`)
        setProductDetails(response);
        console.log(response);
    };

    const addCart = async () => {
        setLoader(true);
        const response = await axios.post(`${baseUrl}/carts`, {
            userId: userId,
            date: date,
            products: products
        });
        if (response) {
            setLoader(false);
        }
        localStorage.setItem('carts', JSON.stringify(response.data));
        navigate(`/carts`);

    }


    useEffect(() => {
        getSingleDataApi();
    }, []);


    useEffect(() => {

        const cartItem = JSON.parse(localStorage.getItem('carts'));
        const product = [];
        const productList = {
            productId: productDetails?.data?.id,
            quantity: 32
        }
        product.push(productList);
        setProducts(cartItem ? [...cartItem.products, ...product] : product);

    }, [productDetails]);

    return (
        <>
            <LayoutComponent>
                <h4 className='product_details_heading'>{globalConstants.Product_details.Tilte}</h4>
                <div className='product_user_data'>
                    <div className='product_img_data'>
                        <img src={productDetails.data?.image} />
                    </div>
                    <div className='product_user_content_data'>
                        <h3>{productDetails.data?.title}</h3>
                        <p>{productDetails.data?.description}</p>
                        <p>${productDetails.data?.price}</p>
                        <div>
                            <button
                                className='cart_btn'
                                type="button"
                                onClick={addCart}
                            >
                                {loader ? globalConstants.Login_content.Loading : globalConstants.Product_details.Add_To_Cart}
                            </button>
                        </div>
                    </div>

                </div>
            </LayoutComponent>
        </>
    )
}


export default ProductDetailsPage