import React from 'react';
import s from "./StarText.module.css"
import IconBlock from "../IconBlock/IconBlock.tsx";
import StarIcon from "../../assets/IconPack/StarIcon/StarIcon.tsx";

interface StarTextFeatureProps {
    text: string,
    textSize: string,
}

const StarText: React.FC<StarTextFeatureProps> = ({text, textSize}) => {
    return (
        <div className={s.starText}>
            <IconBlock size="40px">
                <StarIcon color="var(--orange-color)" />
            </IconBlock>
            <div>
                <p style={{fontSize: textSize, color: "var(--theme-color)"}}>{text}</p>
            </div>
        </div>
    );
};

export default StarText;