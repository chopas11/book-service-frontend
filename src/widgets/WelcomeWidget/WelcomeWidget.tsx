import React from 'react';

import s from '@/widgets/WelcomeWidget/WelcomeWidget.module.css'
import StarIcon from "../../shared/assets/IconPack/StarIcon/StarIcon";
import Button from "../../shared/ui/Button/Button";
import IconBlock from "../../shared/ui/IconBlock/IconBlock";
import {Link} from "react-router-dom";

interface WelcomeBlockProps {
    title: string,
    description: string,
}

const WelcomeWidget:React.FC<WelcomeBlockProps> = ({title, description}) => {
    return (
        <div className={s.welcomeBlock}>
            <div className={s.welcomeBlock_container}>
                <div className={s.welcomeBlock_left}>
                    <h1>{title}</h1>
                </div>
                <div className={s.welcomeBlock_right}>
                    <IconBlock size="40px">
                        <StarIcon color="var(--orange-color)"/>
                    </IconBlock>
                    <div>
                        <p>{description}</p>
                        <Link to="/publish"><Button isDark={false}>Подробнее</Button></Link>
                    </div>
                </div>
            </div>
            <div className={s.welcomeBlock_bottom}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default WelcomeWidget;