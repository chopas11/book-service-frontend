import React from 'react';
import s from "./ServicesWidget.module.css"
import {Row, Col} from "antd";
import {StarText} from "../../shared/ui";
import ServicesList from "../../shared/ui/ServicesList/ServicesList.tsx";

interface ServicesWidgetProps {
    services: IService[],
    isActive: boolean,
    step: number,
}

const ServicesWidget: React.FC<ServicesWidgetProps> = ({services, isActive, step}) => {

    if (isActive) {
        switch (step) {
            case 1:
                return (
                    <Row gutter={[12, 12]}>
                        <Col xl={{ span: 6 }} >
                            <StarText text="Если у вас нет идей, вы можете воспользововаться услугами нашего сервиса" textSize="15px"/>
                        </Col>
                        <Col xl={{ span: 2 }}></Col>
                        <ServicesList services={services} isActive={true} step={1} />
                    </Row>
                )
            case 2:
                return (
                    <Row gutter={[12, 12]}>
                        <Col xl={{ span: 2 }}></Col>
                        <ServicesList services={services} isActive={true} step={2} />
                        <Col xl={{ span: 2 }}></Col>
                        <Col xl={{ span: 6 }}>
                            <StarText text="Выберите услугу, которая сделает это за вас" textSize="15px" />
                        </Col>
                    </Row>
                )
            case 3:
                return (
                    <Row gutter={[12, 12]}>
                        <Col xl={{ span: 6 }}>
                            <StarText text="Можете доверить нам проверку правильности вашей книги на текстовые ошибки и вёрстку" textSize="15px" />
                        </Col>
                        <ServicesList services={services} isActive={true} step={3} />
                    </Row>
                )
            case 4:
                return (
                    <Row gutter={[12, 12]}>
                        <Col xl={{span: 4}}></Col>
                        <ServicesList services={services} isActive={true} step={4} />
                        <Col xl={{ span: 2 }}></Col>
                        <Col xl={{ span: 6 }}><StarText text="Если у вас нет обложки, мы можем сделать это за вас" textSize="15px" /></Col>
                    </Row>
                )
        }
    } else {
        return (
            <div className={s.servicesWidget}>

                <Row gutter={[12, 12]}>
                    <Col xl={{span: 6}} lg={{span: 8}} md={{span: 12}}>
                        <h2>Услуги</h2>
                    </Col>
                    <ServicesList services={services} isActive={false} step={1} />
                </Row>
            </div>
        );
    }




};

export default ServicesWidget;