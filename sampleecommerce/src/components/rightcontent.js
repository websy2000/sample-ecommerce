import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const RightContentComponent = ({sendingApiData}) => {

    const navigate = useNavigate();

    const productDetailsPage = (id) => {
        navigate(`/product-details-page?productId=${id}`)
    }

    
    return(
        <>
        <ul className='right_content_ul'>
            {sendingApiData.map(item => (
                <li key={item.id} onClick={() => productDetailsPage(item.id)}>
                    <img src={item.image} width="300px" />
                    <h6>{item.title}</h6>
                    <small>${item.price}</small>
                </li>
            ))}
        </ul>
        </>
    )
}


export default RightContentComponent;