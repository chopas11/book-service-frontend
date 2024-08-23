import React from 'react';
import {useTypedSelector} from "../../../../shared/hooks/useTypedSelector.ts";
import {Navigate} from "react-router-dom";
import {Role} from "../model/routes.tsx";

interface RequireAuthProps {
    routeRole?: Role,
    children: React.ReactNode
}

const RequireAuth: React.FC<RequireAuthProps>= ({routeRole = 'all', children}) => {

    const {isAuth, role} = useTypedSelector(state => state.user)


    if (role !== routeRole && routeRole !== 'all') {
        console.log(role, " Роль не соответсвует ", routeRole);
        return <Navigate to='/' />
    }

    if (!isAuth) {
        console.log("Not Auth");
        return <Navigate to='/' />
        // getAuthCode();
        // return;
    }
    return children;
};

export default RequireAuth;