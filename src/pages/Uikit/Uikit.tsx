import React from 'react';
import {Col, Row} from "antd";
import NumberBlock from "../../shared/ui/NumberBlock/NumberBlock";
import StepFeature from "../../features/StepFeature/StepFeature";
import ServiceFeature from "../../features/ServiceFeature/ServiceFeature";

const Uikit = () => {
    return (
        <div>
            <Row>
                <Col xxl={{ span: 16, offset: 4 }} xl={{ span: 16, offset: 4 }} xs={{ span: 22, offset: 1 }}>
                    <NumberBlock number={1} />
                    <br/>
                    <Row>
                        <Col xl={{ span: 6 }}>
                            <ServiceFeature  title="Неймер" description="Он придумывает яркие, звучные и запоминающиеся комбинации." price={200} />
                        </Col>

                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Uikit;