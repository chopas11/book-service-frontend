import React, {useEffect} from 'react';
import s from "./Modal.module.css"
import {useDispatch} from "react-redux";
import {hide, toggle} from "../../../features/modals/toggleModal/model/slice/toggleModalReducer.ts";
import {modalRoutes} from "../../../features/modals/toggleModal/model/routes/modalRoutes.tsx";
import {Button} from "../index.ts";
import BackIcon from "../../assets/IconPack/BackIcon/BackIcon.tsx";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";

interface ModalProps {
    active: boolean,
    path: string,
    props: never,
    // children: React.ReactNode[] | React.ReactNode,
}

const Modal: React.FC = () => {

    const {active, path} = useTypedSelector(state => state.modal)

    useEffect(() => {
        if (active) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "scroll";

        }



    }, [active])

    const dispatch = useDispatch()

    const toogleModal = () => {
        console.log("Нажали на модал враппер")
        dispatch(hide())
    }


    return (
        <div onClick={() => toogleModal()} className={`${s.modal} ${active ? s.active : ""}`}>
            <div onClick={(e) => e.stopPropagation()} className={s.modal_window}>
                <div className={s.modal_top}>
                    <Button size='lg' paddingX='12.5px' type='page' callback={() => dispatch(hide())}><BackIcon /></Button>
                </div>
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