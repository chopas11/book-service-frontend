import React from 'react';
import s from "./AdvantageFeature.module.css"
import LockIcon from "../../shared/assets/IconPack/LockIcon/LockIcon";

interface AdvantageFeatureProps {
    icon: React.FC,
    title: string,
    description: string,
}

const AdvantageFeature:React.FC<AdvantageFeatureProps> = ({icon, title, description}) => {
    return (
        <div className={s.advantage}>
            {/*<div className={s.advantage_top}>{icon}</div>*/}
            <LockIcon />
            <div lassName={s.advantage_bottom}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AdvantageFeature;