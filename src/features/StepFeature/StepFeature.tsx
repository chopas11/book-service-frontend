// import React from 'react';

import s from "./StepFeature.module.css"

interface StepFeatureProps {
    number: number,
    text: string,
}

const StepFeature:React.FC<StepFeatureProps> = ({number, text}) => {
    return (
        <div className={s.step}>
            <div className={s.step_number}>{number}</div>
            <div className={s.step_text}>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default StepFeature;