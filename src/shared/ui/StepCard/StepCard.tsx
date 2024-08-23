// import React from 'react';
import s from "./StepCard.module.css"
import NumberBlock from "../NumberBlock/NumberBlock.tsx";
import React from "react";

interface StepFeatureProps {
    number: number,
    text: string,
}

const StepCard:React.FC<StepFeatureProps> = ({number, text}) => {
    return (
        <div className={s.step}>
            <NumberBlock number={number} isInverted={false} />
            <div className={s.step_text}>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default StepCard;