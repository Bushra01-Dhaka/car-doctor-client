import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../Provider/AuthProvider";
import { FadeLoader } from "react-spinners";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    if(loading)
    {
        return <div className="h-screen flex justify-center items-center">
            <FadeLoader color="#FF3811" radius={30} />
        </div>
    }
    if(user?.email) 
    {
        return children ;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;