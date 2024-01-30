import React from 'react';
import {useTypedSelector} from "../../../../shared/hooks/useTypedSelector.ts";
import {Navigate} from "react-router-dom";
import {toggle} from "../../../../features/toggleModal/modal/slice/toggleModalReducer.ts";
import {modalPath} from "../../../../features/toggleModal/modal/enums/modalPath.ts";
import {useDispatch} from "react-redux";

interface RequireAuthProps {
    children: React.ReactNode
}

const RequireAuth: React.FC<RequireAuthProps>= ({children}) => {

    const dispatch = useDispatch()

    const {isAuth} = useTypedSelector(state => state.user)

    if (!isAuth) {
        console.log("Not Auth");
        dispatch(toggle(modalPath.AUTHORIZATION_VIEWER));
        return <Navigate to="/" />

    }

    return children;
};

export default RequireAuth;