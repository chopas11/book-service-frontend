import React, {Dispatch, SetStateAction} from 'react';

import s from "./Modal.module.css"

interface ModalProps {
    active: boolean,
    callback: Dispatch<SetStateAction<boolean>>,
    children: React.ReactElement[] | React.ReactElement,
}

const Modal: React.FC<ModalProps> = ({active, callback, children}) => {

    // useEffect(() => {
    //     document.body.style.overflow = "hidden";
    //     return () => {
    //         document.body.style.overflow = "scroll";
    //     }
    // }, [])

    return (
        <div onClick={() => callback(false)} className={`${s.modal} ${active ? s.active : ""}`}>
            <div onClick={(e) => e.stopPropagation()} className={s.modal_content}>
                {children}
            </div>
        </div>
    );
};

export default Modal;