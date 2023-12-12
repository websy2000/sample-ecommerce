import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const myToken = localStorage.getItem('token');
    return(
        myToken ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes;