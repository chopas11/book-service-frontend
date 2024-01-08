import React from 'react';
import {useTypedSelector} from "../../../../shared/hooks/useTypedSelector.ts";
import {Navigate} from "react-router-dom";

interface RequireAuthProps {
    children: React.ReactNode
}

const RequireAuth: React.FC<RequireAuthProps>= ({children}) => {
   const {isAuth} = useTypedSelector(state => state.user)

    if (!isAuth) {
        console.log("Not Auth");
        return <Navigate to="/" />
    }

    return children;
};

export default RequireAuth;