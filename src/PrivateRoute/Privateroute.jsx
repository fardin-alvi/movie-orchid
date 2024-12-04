import { useContext } from "react";
import { Authcontext } from "../Provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const Privateroute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(Authcontext)
    if (loading) {
        return (<div className='flex justify-center items-center'>
            <span className="loading loading-bars loading-lg"></span>
        </div>)

    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
};

export default Privateroute;