import React,{useState, useEffect} from 'react';
import axios from 'axios';
import LayoutComponent from '../components/layout';
const ProductDetailsPage = () => {
    const [productDetails, setProductDetails] = useState({});
    const [userId, setUserId] = useState(3);
    const [date, setDate] = useState(new Date());
    const [products, setProducts] = useState([]);

    const baseUrl = "https://fakestoreapi.com";

    const searchParams = new URLSearchParams(window.location.search);

    const getSingleDataApi = async() => {
       const response = await axios.get(`${baseUrl}/products/${searchParams.get('productId')}`)
       setProductDetails(response);
        console.log(response);
    };

    const addCart = async() => {
        const response = await axios.post(`${baseUrl}/carts`,{
            userId:userId,
            date:date,
            products:products
        });
       localStorage.setItem('carts', JSON.stringify(response.data));

    }
 

    useEffect(() => {
        getSingleDataApi();
    },[]);


    useEffect(() => {

        const cartItem = JSON.parse(localStorage.getItem('carts'));
        const product = [];
        const productList = {
            productId:productDetails?.data?.id,
            quantity:32 
        }
        product.push(productList);
        setProducts(cartItem ? [...cartItem.products, ...product] : product);

    },[productDetails]);

    return(
        <>
        <LayoutComponent>
        <h4>Product Details</h4>
        <div className='product_user_data'>
            <div className='product_img_data'>
                <img src={productDetails.data?.image} />
                </div>
            <div className='product_user_content_data'>
                <h3>{productDetails.data?.title}</h3>
                <p>{productDetails.data?.description}</p>
                <p>${productDetails.data?.price}</p>
                <div>
                <button className='cart_btn' type="button" onClick={addCart}>Add to cart</button>
                </div>
            </div>
        
        </div>
        </LayoutComponent>
        </>
    )
}


export default ProductDetailsPage