import React from 'react';
import HeaderComponent from './header';


const LayoutComponent = ({children}) => {
    return(
        <div>
            <HeaderComponent />
            <div>
                {children}
            </div>
        
        </div>
    )
}

export default LayoutComponent;