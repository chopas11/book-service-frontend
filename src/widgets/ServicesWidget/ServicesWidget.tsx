// import React from 'react';

import s from "./ServicesWidget.module.css"
import ServiceFeature from "../../features/ServiceFeature/ServiceFeature";

const services = [
    {
        title: "Дизайн",
        description: "Уникальная обложка от проффесионального дизайнера.",
    },
    {
        title: "Вёрстка",
        description: "Выбор размера, формата издания, шрифта расположение текста и т.д.",
    },
    {
        title: "Нейросеть",
        description: "Текстовые нейросети помогают авторам найти вдохновение.",
    },
    {
        title: "Редактура",
        description: "Редактор исправляет стилистические неточности, подбирает более удачные словосочетания и эпитеты.",
    },
    {
        title: "Корректура",
        description: "Корректор выявляет и исправляет ошибки орфографического/ стилистического характера, опечатки.",
    },
    {
        title: "Маркетинг",
        description: "Создание интригующей аннотации, содержащей намек на проблему или конфликт, которую должен разрешить герой или автор.",
    },
    {
        title: "Модерация",
        description: "Процесс изучения ваших материалов для оценки качества подготовки текста к публикации.",
    },
];


const ServicesWidget = () => {
    return (
        <div className={s.servicesWidget}>
            <h2>Услуги</h2>
            <div className={s.services}>
                {
                    services.map(item => {
                        return (
                            <ServiceFeature title={item.title} description={item.description} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ServicesWidget;