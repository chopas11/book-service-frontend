// import React from 'react';
import s from "./AdvantageCard.module.css"
import IconBlock from "../IconBlock/IconBlock.tsx";

interface AdvantageFeatureProps {
    icon: React.ReactNode,
    title: string,
    description: string,
    isDark: boolean,
}

const AdvantageCard:React.FC<AdvantageFeatureProps> = ({icon, title, description, isDark}) => {
    return (
        <div
            className={`${s.advantage} ${isDark === true ? s.advantageDark : s.advantageLight}`}
        >
            <div className={s.advantage_top}>
                <IconBlock size="85px" background="#41a0aa" >{icon}</IconBlock>
            </div>
            <div className={s.advantage_bottom}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AdvantageCard;