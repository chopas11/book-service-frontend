import React from 'react';
import {Col} from "antd";
import ServiceCard from "./ServiceCard/ServiceCard.tsx";
import {IService} from "../../../entities/Service/model/types/ServiceSchema.ts";

interface ServicesListProps {
    services: IService[],
    step: number,
    isActive: boolean,
}

const ServicesList: React.FC<ServicesListProps> = ({services, isActive, step}) => {
    return (
        <>
            {
                services.map(service => {
                    if (service.step === step)
                        return (
                            <Col xl={{ span: 6 }} >
                                <ServiceCard
                                    key={service.id}
                                    service={service}
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