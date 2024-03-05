import React from 'react';
import {useTypedSelector} from "../../../../shared/hooks/useTypedSelector.ts";
import {getAuthCode} from "../../../../entities/User/model/services/userService.ts";

interface RequireAuthProps {
    children: React.ReactNode
}

const RequireAuth: React.FC<RequireAuthProps>= ({children}) => {

    const {isAuth} = useTypedSelector(state => state.user)

    if (!isAuth) {
        console.log("Not Auth");
        getAuthCode();
        return;
    }
    return children;
};

export default RequireAuth;