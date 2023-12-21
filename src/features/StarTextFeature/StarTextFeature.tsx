// import React from 'react';

import s from "./StarTextFeature.module.css"
import IconBlock from "../../shared/ui/IconBlock/IconBlock";
import StarIcon from "../../shared/assets/IconPack/StarIcon/StarIcon";

interface StarTextFeatureProps {
    text: string,
    textSize: string | number,
}

const StarTextFeature: React.FC<StarTextFeatureProps> = ({text, textSize}) => {
    return (
        <div className={s.starText}>
            <IconBlock size="40px">
                <StarIcon />
            </IconBlock>
            <div>
                <p style={{textSize: textSize}}>{text}</p>
            </div>
        </div>
    );
};

export default StarTextFeature;