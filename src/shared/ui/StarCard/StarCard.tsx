import React from 'react';
import s from "./StarCard.module.css"
import IconBlock from "../IconBlock/IconBlock.tsx";
import StarIcon from "../../assets/IconPack/StarIcon/StarIcon.tsx";

interface StarCardFeatureProps {
    text: string,
    textSize?: string,
    textColor?: string,
    starColor?: string,
}

const StarCard: React.FC<StarCardFeatureProps> = ({text, textSize = "16px", textColor = "var(--text-color)", starColor = "var(--orange-color)"}) => {
    return (
        <div className={s.starText}>
            <IconBlock size="40px">
                <StarIcon color={starColor} />
            </IconBlock>
            <div>
                <p style={{fontSize: textSize, color: textColor}}>{text}</p>
            </div>
        </div>
    );
};

export default StarCard;