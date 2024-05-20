import React from 'react';
import s from "./Hint.module.css"
import IconBlock from "../../IconBlock/IconBlock.tsx";
import StarIcon from "../../../assets/IconPack/StarIcon/StarIcon.tsx";

interface HintProps {
    text: string,
    textSize?: string,
    textColor?: string,
    starColor?: string,
}

const Hint: React.FC<HintProps> = ({text, textSize = "16px", textColor = "var(--text-color)", starColor = "var(--orange-color)"}) => {
    return (
        <div className={s.starText}>
            <IconBlock size="40px">
                <StarIcon color={starColor} />
            </IconBlock>
            <div>
                <p style={{color: textColor}}>{text}</p>
            </div>
        </div>
    );
};

export default Hint;