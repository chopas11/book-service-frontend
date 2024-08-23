import React from 'react';

import s from "./PublishStep.module.css"
import NumberBlock from "../NumberBlock/NumberBlock.tsx";
import {Col, Row} from "antd";

interface PublishStepFeatureProps {
    number: number,
    name: string,
    bgColor?: "var(--green-color)" | "var(--lil-color)",
    children: React.ReactNode | React.ReactNode[],

}

const PublishStep: React.FC<PublishStepFeatureProps> = ({number, name, bgColor = "var(--green-color)", children}) => {
    return (
        <>
            <div className={`${s.publishStep}`} style={{background: bgColor}}>
                <Row gutter={35}>
                    <Col xl={{span: 2}} xs={{span: 0}}>
                        <NumberBlock number={number} isInverted={true} />
                    </Col>
                    {children}
                </Row>
            </div>
        </>

    );
};

export default PublishStep;