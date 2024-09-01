// import React from 'react';

import s from "./AdvantagesWidget.module.css"
import LockIcon from "../../shared/assets/IconPack/LockIcon/LockIcon";
import TimeIcon from "../../shared/assets/IconPack/TimeIcon/TimeIcon";
import SaleIcon from "../../shared/assets/IconPack/SaleIcon/SaleIcon";
import FingerIcon from "../../shared/assets/IconPack/FingerIcon/FingerIcon";
import {AdvantageCard} from "../../shared/ui";
import {useTranslation} from "react-i18next";


const AdvantagesWidget = () => {

    const { t } = useTranslation();

    const advantages = [
        {
            id: 1,
            icon: <LockIcon />,
            title: t('advantagesWidget_antiPiracyProtection'),
            description: t('advantagesWidget_text1'),
            bgColor: "var(--green-color)",
        },
        {
            id: 2,
            icon: <SaleIcon />,
            title: t('advantagesWidget_maxRevenue'),
            description: t('advantagesWidget_text2'),
            bgColor: "var(--lil-color)",
        },
        {
            id: 3,
            icon: <TimeIcon />,
            title: t('advantagesWidget_savingTime'),
            description: t('advantagesWidget_text3'),
            bgColor: "var(--lil-color)",
        },
        {
            id: 4,
            icon: <FingerIcon />,
            title: t('advantagesWidget_targetAudience'),
            description: t('advantagesWidget_text4'),
            bgColor: "var(--green-color)",
        },
    ]

    return (
        <div className={s.advantagesWidget}>
            <h2>{t('advantagesWidget_ourAdvantages')}</h2>
            <div className={s.advantages}>
                {advantages.map(item => {
                    return (
                        <AdvantageCard
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            bgColor={item.bgColor}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default AdvantagesWidget;