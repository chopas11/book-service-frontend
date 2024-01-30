import React from 'react';
import s from "./ServicesWidget.module.css"
import {Row, Col} from "antd";
import {StarCard} from "../../shared/ui";
import ServicesList from "../../shared/ui/ServicesList/ServicesList.tsx";

interface ServicesWidgetProps {
    services: IService[],
    isActive: boolean,
    step: number,
}

const ServicesWidget: React.FC<ServicesWidgetProps> = ({services, isActive, step}) => {



    /**
     * add services into state.
     * @addServices
     * @param {Object} item - The title of the book.
     */
    // const addServices = (item: Object) => {
    //
    //     if (bookAddServices.find(elem => elem.id === item.id)) {
    //         setBookAddServices(bookAddServices.filter( elem => {
    //             return elem.id !== item.id
    //         }));
    //         setPrice(price - item.price);
    //         console.log("Removing service", item)
    //     } else {
    //         setBookAddServices([...bookAddServices, item]);
    //         setPrice(price + item.price);
    //         console.log("Adding service", item)
    //     }
    // }


    if (isActive) {
        switch (step) {
            case 1:
                return (
                    <Row gutter={[12, 12]}>
                        <Col xl={{ span: 6 }} >
                            <StarCard text="Если у вас нет идей, вы можете воспользововаться услугами нашего сервиса" textSize="15px" textColor="#f0f0f0"/>
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
                            <StarCard text="Выберите услугу, которая сделает это за вас" textSize="15px" />
                        </Col>
                    </Row>
                )
            case 3:
                return (
                    <Row gutter={[12, 12]}>
                        <Col xl={{ span: 6 }}>
                            <StarCard text="Можете доверить нам проверку правильности вашей книги на текстовые ошибки и вёрстку" textSize="15px" />
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
                        <Col xl={{ span: 6 }}><StarCard text="Если у вас нет обложки, мы можем сделать это за вас" textSize="15px" /></Col>
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