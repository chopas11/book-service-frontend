// import React from 'react';

import s from "./TariffFeature.module.css"
import Button from "../../shared/ui/Button/Button";
import TextWrapper from "../../shared/ui/TextWrapper/TextWrapper";

interface TariffFeatureProps {
    name: string,
    bookPrice: number,
    royalty: number,
    isChosen: boolean,
    callback: React.EventHandler<any>,
}

const TariffFeature: React.FC<TariffFeatureProps> = ({name, bookPrice, royalty, isChosen, callback}) => {
    return (
        <div className={`${s.tariff} ${isChosen ? s.chosen : ""}`}>
           <div className={s.tariff_box}>
               <h3>{name}</h3>
               <p>Цена за книгу: <TextWrapper color="white" background="#5bb9c4" fontSize="20px">{String(bookPrice)}р</TextWrapper></p>
               <p>Роялти с каждой продажи: <TextWrapper color="white" background="#5bb9c4" fontSize="20px">{String(royalty*100)}%</TextWrapper></p>

               <div className={s.tariff_box_center}>
                   <span>{bookPrice*royalty}р</span>
                   <p>Прибыль с каждой продажи</p>
               </div>
           </div>
            <div className={s.tariff_conditions}>
                <ul>
                    <li>Доход с каждой купленной книги сразу вам на карту</li>
                    <li>Постоянная поддержка связи с автором</li>
                    <li>Запрет на скриншоты текста книги</li>
                </ul>
                <div className={s.tariff_conditions_center}>
                    <Button isDark={false} callback={callback}>
                        {
                            isChosen ?
                                "Выбрано" :
                                "Выбрать"
                        }
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default TariffFeature;