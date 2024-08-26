import React from 'react';
import s from "./Hint.module.css"
import IconBlock from "../../IconBlock/IconBlock.tsx";
import StarIcon from "../../../assets/IconPack/StarIcon/StarIcon.tsx";

interface HintProps {
    text: string,
}

const Hint: React.FC<HintProps> = ({text}) => {
    return (
        <div className={s.starText}>
            <IconBlock size="40px">
                <StarIcon />
            </IconBlock>
            <div>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Hint;