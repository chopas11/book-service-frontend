import React from 'react';

import s from "./WelcomeWidget.module.css"
import StarIcon from "../../shared/assets/IconPack/StarIcon/StarIcon";

interface WelcomeBlockProps {
    title: string,
    content: React.FC,
}

const WelcomeWidget:React.FC<WelcomeBlockProps> = ({title, content}) => {
    return (
        <div className={s.welcomeBlock}>
            <div className={s.welcomeBlock_container}>
                <div className={s.welcomeBlock_left}>
                    <h1>{title}</h1>
                </div>
                <div className={s.welcomeBlock_right}>
                    <div className={s.welcomeBlock_right_icon}>
                        <StarIcon />
                    </div>
                    <div>
                        <p>Мы предлагаем профессиональные услуги, которые помогают тысячам писателей оформлять, издавать и продвигать книгу.</p>
                        <button className={s.button}>Подробнее</button>
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