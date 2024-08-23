import React from 'react';
import s from "./TariffCard.module.css"
import Button from "../forms/Button/Button.tsx";
import TextWrapper from "../TextWrapper/TextWrapper.tsx";
import {Hint} from "../index.ts";

interface TariffCardProps {
    name: string,
    bookPrice: number,
    royalty: number,
    isChosen: boolean,
    color: string,
    callback: React.EventHandler<never>,
}

const TariffCard: React.FC<TariffCardProps> = ({name, bookPrice, royalty, isChosen, color, callback}) => {

    const tariffColor = color === 'green' ?
        "var(--green-color)" : color === 'lil' ?
            "var(--lil-color)" :
            "var(--accent-color)"


    return (
        <div className={`${s.tariff} ${isChosen ? s.chosen : ""}`}>
           <div className={s.tariff_box}>
               <h3>{name}</h3>
               <p>Цена за книгу: <TextWrapper background={tariffColor} size='md' weight='bold'>{String(bookPrice)}р</TextWrapper></p>
               <p>Роялти с каждой продажи: <TextWrapper background={tariffColor} size='md' weight='bold'>{String(royalty*100)}%</TextWrapper></p>
               <div className={s.tariff_box_center}>
                   <span>{bookPrice*royalty}р</span>
                   <p>Прибыль с каждой продажи</p>
               </div>
           </div>
            <div className={s.tariff_conditions}>
                <Hint text="Доход с каждой купленной книги сразу вам на карту, постоянная поддержка связи с автором, запрет на скриншоты текста книги"
                      textSize="14px" textColor="#f0f0f0" starColor={tariffColor} />
            </div>
                {/*<div className={s.tariff_conditions_center}>*/}
                    <Button type={color} callback={callback} paddingX="full">
                        {
                            isChosen ?
                                "Выбрано" :
                                "Выбрать"
                        }
                    </Button>
            <br/><br/>
                {/*</div>*/}
            {/*</div>*/}

        </div>
    );
};

export default TariffCard;