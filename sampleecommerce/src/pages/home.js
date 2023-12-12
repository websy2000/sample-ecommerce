import React from 'react';
import LayoutComponent from '../components/layout';
import BannerComponent from '../components/banner';
import ContentComponent from '../components/content';


const HomePage = () => {
    return (
        <>
            <LayoutComponent>
              <BannerComponent />
              <ContentComponent />

            </LayoutComponent>
        </>
    )
}


export default HomePage;