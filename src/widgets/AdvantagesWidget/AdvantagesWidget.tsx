// import React from 'react';

import s from "./AdvantagesWidget.module.css"
import LockIcon from "../../shared/assets/IconPack/LockIcon/LockIcon";
import TimeIcon from "../../shared/assets/IconPack/TimeIcon/TimeIcon";
import SaleIcon from "../../shared/assets/IconPack/SaleIcon/SaleIcon";
import FingerIcon from "../../shared/assets/IconPack/FingerIcon/FingerIcon";
import {AdvantageCard} from "../../shared/ui";

const advantages = [
    {
        icon: <LockIcon />,
        title: "Защита от пиратства",
        description: "Мы защищаем материалы на платформе от распространенных видов пиратства, чтобы вы не упускали прибыль.",
        isDark: false,
    },
    {
        icon: <SaleIcon />,
        title: "Максимальная выручка",
        description: "Мы позволяем выбрать наиболее подходящую финансовую модель, чтобы вы могли получить максимальную выручку.",
        isDark: true,
    },
    {
        icon: <TimeIcon />,
        title: "Экономия времени",
        description: "Мы экономим ваше время, предлагая простую цепочку публикации - заполните поля, загрузите материал, выберите тариф.",
        isDark: true,
    },
    {
        icon: <FingerIcon />,
        title: "Целевая аудитория",
        description: "Мы предоставляем инструменты управления контентом, благодаря которым проще выйти на целевого читателя.",
        isDark: false,
    },
]


const AdvantagesWidget = () => {
    return (
        <div className={s.advantagesWidget}>
            <h2>Наши преимущества</h2>
            <div className={s.advantages}>
                {advantages.map(item => {
                    return (
                        <AdvantageCard
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            isDark={item.isDark}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default AdvantagesWidget;