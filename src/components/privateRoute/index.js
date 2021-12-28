import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children, machine}) => {
    const {user} = machine.context;
    return user !== undefined ? children : <Navigate to="/login"/>;
}
 
export default PrivateRoute;