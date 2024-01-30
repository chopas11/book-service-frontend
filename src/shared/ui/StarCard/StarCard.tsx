import React from 'react';
import s from "./StarCard.module.css"
import IconBlock from "../IconBlock/IconBlock.tsx";
import StarIcon from "../../assets/IconPack/StarIcon/StarIcon.tsx";

interface StarCardFeatureProps {
    text: string,
    textSize: string,
    textColor: string,
    starColor?: string,
}

const StarCard: React.FC<StarCardFeatureProps> = ({text, textSize, textColor, starColor}) => {
    return (
        <div className={s.starText}>
            <IconBlock size="40px">
                <StarIcon color="var(--orange-color)" />
            </IconBlock>
            <div>
                <p style={{fontSize: textSize, color: textColor}}>{text}</p>
            </div>
        </div>
    );
};

export default StarCard;