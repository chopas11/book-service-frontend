// import React from 'react';

import s from "./HowToAuthorWidget.module.css"
import Button from "../../shared/ui/Button/Button";
import {Link} from "react-router-dom";
import {StepCard} from "../../shared/ui";
import {Col, Row} from "antd";

const steps = [
    {
        number: 1,
        text: "Мы экономим ваше время, предлагая простую цепочку публикации - заполните поля, загрузите материал, выберите тариф.",
    },
    {
        number: 2,
        text: "Мы экономим ваше время, предлагая простую цепочку публикации - заполните поля, загрузите материал, выберите тариф.",
    },
    {
        number: 3,
        text: "Мы экономим ваше время, предлагая простую цепочку публикации - заполните поля, загрузите материал, выберите тариф.",
    },
];

const HowToAuthorWidget = () => {
    return (
        <div className={s.howToAuthorWidget}>
            <h2>Как стать автором?</h2>
            <div className={s.steps}>
                <Row gutter={[12, 12]}>
                    {steps.map(item => {
                        return (
                            <Col xl={{span: 8}}>
                                <StepCard number={item.number} text={item.text} />
                            </Col>
                        )
                    })}
                </Row>
            </div>
            <div className="button_center">
                <Link to="/publish">
                    <Button width="300px" height="60px" fontSize="20px" isDark={true}>
                        Стать автором
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default HowToAuthorWidget;