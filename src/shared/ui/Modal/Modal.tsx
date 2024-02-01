import React, {useEffect} from 'react';
import s from "./Modal.module.css"
import {useDispatch} from "react-redux";
import {toggle} from "../../../features/toggleModal/model/slice/toggleModalReducer.ts";
import {modalRoutes} from "../../../features/toggleModal/model/routes/modalRoutes.tsx";

interface ModalProps {
    active: boolean,
    path: string,
    // children: React.ReactNode[] | React.ReactNode,
}

const Modal: React.FC<ModalProps> = ({active, path}) => {

    useEffect(() => {
        if (active) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "scroll";

        }



    }, [active])

    const dispatch = useDispatch()


    return (
        <div onClick={() => dispatch(toggle())} className={`${s.modal} ${active ? s.active : ""}`}>
            <div onClick={(e) => e.stopPropagation()} className={s.modal_content}>
                <ModalRouter path={path} />
            </div>
        </div>
    );
};

interface ModalRouterProps {
    path: string,
}

const ModalRouter: React.FC<ModalRouterProps> = ({path}) => {

    return modalRoutes.find(item => item.path === path)?.element
}

export default Modal;