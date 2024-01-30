import React from 'react';
import s from "./TariffCard.module.css"
import Button from "../forms/Button/Button.tsx";
import TextWrapper from "../TextWrapper/TextWrapper.tsx";

interface TariffCardProps {
    name: string,
    bookPrice: number,
    royalty: number,
    isChosen: boolean,
    callback: React.EventHandler<never>,
}

const TariffCard: React.FC<TariffCardProps> = ({name, bookPrice, royalty, isChosen, callback}) => {
    return (
        <div className={`${s.tariff} ${isChosen ? s.chosen : ""}`}>
           <div className={s.tariff_box}>
               <h3>{name}</h3>
               <p>Цена за книгу: <TextWrapper color="white" background="var(--black-color)" fontSize="20px">{String(bookPrice)}р</TextWrapper></p>
               <p>Роялти с каждой продажи: <TextWrapper color="white" background="var(--black-color)" fontSize="20px">{String(royalty*100)}%</TextWrapper></p>
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

export default TariffCard;