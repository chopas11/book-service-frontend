import React from 'react';
import {Col} from "antd";
import ServiceCard from "../ServiceCard/ServiceCard.tsx";

interface ServicesListProps {
    services: IService[],
    step: number,
    isActive: boolean,
}

const ServicesList: React.FC<ServicesListProps> = ({services, isActive, step}) => {
    return (
        <>
            {
                services.map(item => {
                    if (item.step === step)
                        return (
                            <Col xl={{ span: 6 }} >
                                <ServiceCard
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    active={isActive}
                                />
                            </Col>
                        )
                })
            }
        </>
    );
};

export default ServicesList;