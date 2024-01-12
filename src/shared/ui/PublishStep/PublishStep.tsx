// import React from 'react';

import s from "./PublishStep.module.css"
import NumberBlock from "../NumberBlock/NumberBlock.tsx";
import {Col, Row} from "antd";

interface PublishStepFeatureProps {
    number: number,
    children: React.ReactNode[],
}

const PublishStep: React.FC<PublishStepFeatureProps> = ({number, children}) => {
    return (
        <div className={s.publishStep}>
            <Row gutter={35}>
                <Col xl={{span: 2}}>
                    <NumberBlock number={number} />
                </Col>
                {children}
            </Row>

        </div>
    );
};

export default PublishStep;