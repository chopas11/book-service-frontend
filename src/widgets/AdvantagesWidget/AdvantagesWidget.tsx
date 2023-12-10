import React from 'react';

import s from "./AdvantagesWidget.module.css"
import AdvantageFeature from "../../features/AdvantageFeature/AdvantageFeature";
import LockIcon from "../../shared/assets/IconPack/LockIcon/LockIcon";

const AdvantagesWidget = () => {
    return (
        <div>
            <h2>Наши преимущества</h2>
            <AdvantageFeature icon={<LockIcon />} title="Защита от пиратства" description="Мы защищаем материалы на платформе от распространенных видов пиратства, чтобы вы не упускали прибыль." />
        </div>
    );
};

export default AdvantagesWidget;