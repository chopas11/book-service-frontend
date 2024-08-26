import React from 'react';

import s from "./PublishStep.module.css"
import NumberBlock from "../NumberBlock/NumberBlock.tsx";
import {Col, Row} from "antd";

interface PublishStepFeatureProps {
    number: number,
    name?: string,
    bgColor?: "green" | "lil",
    children: React.ReactNode | React.ReactNode[],

}

const PublishStep: React.FC<PublishStepFeatureProps> = ({number, bgColor = "green", children}) => {
    let bg;
    if (bgColor === "green") {
        bg = 'var(--blocks-green-color)';
    } else if (bgColor === "lil") {
        bg = 'var(--blocks-lil-color)';
    }

    return (
        <>
            <div className={`${s.publishStep}`} style={{background: bg}}>
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