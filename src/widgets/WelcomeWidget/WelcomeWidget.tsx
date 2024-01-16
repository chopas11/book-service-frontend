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
                <div className={s.welcomeBlock_arrow}>
                    <svg width="339" height="158" viewBox="0 0 339 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M338.996 156.9C307.856 157.335 213.67 65.6291 209.846 46.4946C206.022 27.3602 251.961 28.0395 247.709 58.6308C243.458 89.2221 162.955 130.182 109.39 95.6338C66.5371 67.9955 41.0927 43.6137 33.727 34.8776L3.00519 2.56813M3.00519 2.56813L32.0145 16.801M3.00519 2.56813L17.6844 30.1081"
                            stroke="#FF6915" strokeWidth="2"/>
                    </svg>
                </div>
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