import React, {useState} from 'react';
import s from "./TogglePopup.module.css"
interface TogglePopupProps {
    feature: React.ReactNode,
    children: React.ReactNode | React.ReactNode[]
}

const TogglePopup:React.FC<TogglePopupProps> = ({feature, children}) => {
    const [isShowFeature, setShowFeature] = useState(false);

    const toggleFeature = () => {
        if (!isShowFeature)
            console.log("Feature opened!")
        else
            console.log("Feature closed!")
        setShowFeature(!isShowFeature);
    }

    return (
        // <div className={s.popup_wrapper}>
            <div className={s.popup_box}>
                <div onClick={() => toggleFeature()}>
                    {children}
                </div>
                <div className={`${s.popup} ${isShowFeature ? s.visible : s.invisible}`}>
                    {feature}
                </div>
            </div>
        // </div>

    );
};

export default TogglePopup;