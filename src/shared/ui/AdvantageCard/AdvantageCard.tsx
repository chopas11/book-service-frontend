import React from 'react';
import s from "./AdvantageCard.module.css"
import IconBlock from "../IconBlock/IconBlock.tsx";
import Block from "../Block/Block.tsx";

interface AdvantageFeatureProps {
    icon: React.ReactNode,
    title: string,
    description: string,
    bgColor: string,
}

const AdvantageCard:React.FC<AdvantageFeatureProps> = ({icon, title, description, bgColor}) => {
    return (
        <div className={s.advantage}>
            <Block bgColor={bgColor} color="#121212" padding="25px 15px" bdRadius="24px">
            <div className={s.advantage_top}>
                <IconBlock size="55px" background="var(--black-color)" color={bgColor} >{icon}</IconBlock>
                {/*{icon}*/}
            </div>
            <div className={s.advantage_bottom}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            </Block>
        </div>
    );
};

export default AdvantageCard;