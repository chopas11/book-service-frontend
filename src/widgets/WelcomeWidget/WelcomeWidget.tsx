import React from 'react';

import s from '@/widgets/WelcomeWidget/WelcomeWidget.module.css'


interface WelcomeBlockProps {
    title: string,
    // description: string,
    children: React.ReactNode | React.ReactNode[],
}

const WelcomeWidget:React.FC<WelcomeBlockProps> = ({title, children}) => {
    return (
        <div className={s.welcomeBlock}>
            <div className={s.welcomeBlock_container}>
                <div className={s.welcomeBlock_left}>
                    <h1>{title}</h1>
                </div>
                <div className={s.welcomeBlock_right}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default WelcomeWidget;