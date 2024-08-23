import React from 'react';
import s from "./ServicesWidget.module.css"
import {Row, Col} from "antd";
import {Hint} from "../../shared/ui";
import ServicesList from "../../shared/ui/ServicesList/ServicesList.tsx";
import {IService} from "../../entities/Service/model/types/ServiceSchema.ts";

interface ServicesWidgetProps {
    services: IService[],
    isActive: boolean,
    step?: number,
}

const ServicesWidget: React.FC<ServicesWidgetProps> = ({services, isActive, step}) => {

    if (isActive) {
        switch (step) {
            case 1:
                return (
                    <div className={s.servicesWidget}>
                        <Row gutter={[12, 12]}>
                            <Col xl={{ span: 6 }} >
                                <Hint text="Если у вас нет идей, вы можете воспользововаться услугами нашего сервиса" textSize="15px" textColor="#f0f0f0"/>
                            </Col>
                            <Col xl={{ span: 2 }}></Col>
                            <ServicesList services={services} isActive={true} step={1} />
                        </Row>
                    </div>
                )
            case 2:
                return (
                    <div className={s.servicesWidget}>
                    <Row gutter={[12, 12]}>
                        <Col xl={{ span: 2 }}></Col>
                        <ServicesList services={services} isActive={true} step={2} />
                        <Col xl={{ span: 2 }}></Col>
                        <Col xl={{ span: 6 }}>
                            <Hint text="Выберите услугу, которая сделает это за вас" textSize="15px" textColor="#f0f0f0" />
                        </Col>
                    </Row>
                    </div>
                )
            case 3:
                return (
                    <div className={s.servicesWidget}>
                    <Row gutter={[12, 12]}>
                        <Col xl={{ span: 6 }}>
                            <Hint text="Можете доверить нам проверку правильности вашей книги на текстовые ошибки и вёрстку" textSize="15px" textColor="#f0f0f0" />
                        </Col>
                        <ServicesList services={services} isActive={true} step={3} />
                    </Row>
                    </div>
                )
            case 4:
                return (
                    <div className={s.servicesWidget}>
                    <Row gutter={[12, 12]}>
                        <Col xl={{span: 4}}></Col>
                        <ServicesList services={services} isActive={true} step={4} />
                        <Col xl={{ span: 2 }}></Col>
                        <Col xl={{ span: 6 }}><Hint text="Если у вас нет обложки, мы можем сделать это за вас" textSize="15px" textColor="#f0f0f0" /></Col>
                    </Row>
                    </div>
                )
        }
    } else {
        return (
            <div className={s.servicesWidget}>
                <br/><br/>
                <Row gutter={[12, 12]}>
                    <Col xl={{span: 4}} lg={{span: 8}} md={{span: 12}}>
                        <h2>Услуги</h2>
                    </Col>
                    <ServicesList services={services.slice(0, 2)} isActive={false} span={8} />
                    <ServicesList services={services.slice(2)} isActive={false} />
                </Row>
            </div>
        );
    }




};

export default ServicesWidget;