// import React from 'react';

import s from "./ServicesWidget.module.css"
import ServiceFeature from "../../features/ServiceFeature/ServiceFeature";
import {Row, Col} from "antd";

const services = [
    {
        id: 1,
        title: "Дизайн",
        description: "Уникальная обложка от проффесионального дизайнера.",
        price: 200,
    },
    {
        id: 2,
        title: "Вёрстка",
        description: "Выбор размера, формата издания, шрифта расположение текста и т.д.",
        price: 200,
    },
    {
        id: 3,
        title: "Нейросеть",
        description: "Текстовые нейросети помогают авторам найти вдохновение.",
        price: 200,
    },
    {
        id: 4,
        title: "Редактура",
        description: "Редактор исправляет стилистические неточности, подбирает более удачные словосочетания и эпитеты.",
        price: 200,
    },
    {
        id: 5,
        title: "Корректура",
        description: "Корректор выявляет и исправляет ошибки орфографического/ стилистического характера, опечатки.",
        price: 200,
    },
    {
        id: 6,
        title: "Маркетинг",
        description: "Создание интригующей аннотации, содержащей намек на проблему или конфликт, которую должен разрешить герой или автор.",
        price: 200,
    },
    {
        id: 7,
        title: "Модерация",
        description: "Процесс изучения ваших материалов для оценки качества подготовки текста к публикации.",
        price: 200,
    },
];


const ServicesWidget = () => {
    return (
        <div className={s.servicesWidget}>

            {/*<div className={s.services}>*/}
            <Row gutter={[12, 12]}>
                <Col xl={{span: 6}} lg={{span: 8}} md={{span: 12}}>
                    <h2>Услуги</h2>
                </Col>
                {
                    services.map(item => {
                        return (
                            <Col xl={{span: 6}} lg={{span: 8}} md={{span: 12}} key={item.id}>
                                <ServiceFeature title={item.title} description={item.description} price={item.price} active={false} />
                            </Col>
                        )
                    })
                }
            {/*</div>*/}
            </Row>
        </div>
    );
};

export default ServicesWidget;