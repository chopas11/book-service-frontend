// import React from 'react';

import s from "./StepFeature.module.css"
import NumberBlock from "../../shared/ui/NumberBlock/NumberBlock";

interface StepFeatureProps {
    number: number,
    text: string,
}

const StepFeature:React.FC<StepFeatureProps> = ({number, text}) => {
    return (
        <div className={s.step}>
            <NumberBlock number={number} />
            <div className={s.step_text}>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default StepFeature;