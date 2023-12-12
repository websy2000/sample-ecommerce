import React from 'react';
import LayoutComponent from '../components/layout';
import CartConstants from "../config/constants";

const CartsPage = () => {
    const getProductsFromStorage = JSON.parse(localStorage.getItem('originalProducts'));
    const cartsFromStorage = JSON.parse(localStorage.getItem('carts'));
    const filterCartItem = getProductsFromStorage.filter(item => cartsFromStorage?.products?.some(cart => cart.productId === item.id));
    console.log(filterCartItem);

    const cartItemsTotal = filterCartItem.map(item => item.price).reduce((acc, val) => acc + val, 0);
    console.log(cartItemsTotal);
    
    return(
        <>
        <LayoutComponent>
         <>
         <div className='parent_cart1'>
            <div className='cart_child_1'>
            <ul className='cart_item_ul'>
            {filterCartItem.map(item => (
                <li key={item.id}>
                    <div className='cart_item_ul_div'>
                        <div className='cart_ul_image'>
                        <img src={item.image} />
                        </div>
                        <div className='cart_item_ul_content'>
                            <h4>{item.title}</h4>
                            <h6>{item.category}</h6>
                            <p>${item.price}</p>
                        </div>
                    </div>
                </li>
            ))}
         </ul>
            </div>
            <div className='cart_child_Cart2'>
                <h3>{CartConstants.Cart_content.Title} ${cartItemsTotal}</h3>
                <button className='cart_button' type="button">{CartConstants.Cart_content.PlaceOrder}</button>
            </div>
         </div>
         </>
        </LayoutComponent>
        </>
    )
}


export default CartsPage;