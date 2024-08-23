import React from 'react';
import s from "../ServicesWidget/ServicesWidget.module.css";
import {Col, Row} from "antd";
import ServicesList from "../../shared/ui/ServicesList/ServicesList.tsx";

// interface ServicesExamplesWidgetProps {
//     services: IService[],
// }

const ServicesExamplesWidget: React.FC = () => {

    const services = [
        {
            id: 1,
            title: "Дизайн",
            description: "Уникальная обложка от проффесионального дизайнера.",
            price: 200,
            step: 1,

        },
        {
            id: 2,
            title: "Вёрстка",
            description: "Выбор размера, формата издания, шрифта расположение текста и т.д.",
            price: 200,
            step: 1,
        },
        {
            id: 4,
            title: "Редактура",
            description: "Редактор исправляет стилистические неточности, подбирает более удачные словосочетания и эпитеты.",
            price: 200,
            step: 1,
        },
        {
            id: 5,
            title: "Корректура",
            description: "Корректор выявляет и исправляет ошибки орфографического/ стилистического характера, опечатки.",
            price: 200,
            step: 1,
        },
        {
            id: 6,
            title: "Маркетинг",
            description: "Создание интригующей аннотации, содержащей намек на проблему или конфликт, которую должен разрешить герой или автор.",
            price: 200,
            step: 1,
        },
        {
            id: 7,
            title: "Модерация",
            description: "Процесс изучения ваших материалов для оценки качества подготовки текста к публикации.",
            price: 200,
            step: 1,
        },
    ];


    return (
        <div className={s.servicesWidget}>
            <br/><br/>
            <Row gutter={[12, 12]}>
                <Col xl={{span: 4}} lg={{span: 8}} md={{span: 12}}>
                    <h2>Услуги</h2>
                </Col>
                <ServicesList services={services.slice(0, 2)} isActive={false} span={8}/>
                <ServicesList services={services.slice(2)} isActive={false}/>
            </Row>
        </div>
    );
};

export default ServicesExamplesWidget;