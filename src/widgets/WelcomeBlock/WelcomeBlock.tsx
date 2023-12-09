import React from 'react';

import s from "./WelcomeBlock.module.css"

interface WelcomeBlockProps {
    title: string,
    content: React.FC,
}

const WelcomeBlock:React.FC<WelcomeBlockProps> = ({title, content}) => {
    return (
        <div className={s.welcomeBlock}>
            <div className={s.welcomeBlock_container}>
                <div className={s.welcomeBlock_left}>
                    <h1>{title}</h1>
                </div>
                <div className={s.welcomeBlock_right}>
                    <div className={s.welcomeBlock_right_icon}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 0L22.231 11.6737L30 2.67949L26.0953 13.9047L37.3205 10L28.3263 17.769L40 20L28.3263 22.231L37.3205 30L26.0953 26.0953L30 37.3205L22.231 28.3263L20 40L17.769 28.3263L10 37.3205L13.9047 26.0953L2.67949 30L11.6737 22.231L0 20L11.6737 17.769L2.67949 10L13.9047 13.9047L10 2.67949L17.769 11.6737L20 0Z" fill="#41A0AA"/>
                        </svg>
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

export default WelcomeBlock;