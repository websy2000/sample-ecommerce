import React from 'react';
import IconsObjects from "../config/globalIcons";
import globalConstants from '../config/constants';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
    const cartsFromStorage = JSON.parse(localStorage.getItem('carts'));
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    const cartPage = () => {
        navigate('/carts')
    }
    return (
        <>
            <div className='navigation'>
                <NavLink to="/home"><img src={IconsObjects.commonIcons.LogoIcon} /></NavLink>
                <ul className='nav_items'>
                    <li><NavLink to="/home">{globalConstants.NAV_ITEMS.Home}</NavLink></li>
                    <li><NavLink to="/products">{globalConstants.NAV_ITEMS.Products}</NavLink></li>
                    <li><span><img src={IconsObjects.HeaderImages.CartImg} onClick={cartPage} /><sup>{cartsFromStorage ? cartsFromStorage?.products?.length : ""}</sup></span></li>
                    <li><span><img src={IconsObjects.commonIcons.LogoutIcon} onClick={logOut} /></span></li>
                </ul>
            </div>
        </>
    )
}



export default HeaderComponent;