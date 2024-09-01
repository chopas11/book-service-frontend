// import React from 'react';

import s from "./HowToAuthorWidget.module.css"
import {StepCard} from "../../shared/ui";
import {Col, Row} from "antd";
import {useTranslation} from "react-i18next";


const HowToAuthorWidget = () => {


    const { t } = useTranslation();

    const stepsAuthor = [
        {
            id: 1,
            number: 1,
            text: t('howToAuthorWidget_text1'),
        },
        {
            id: 2,
            number: 2,
            text: t('howToAuthorWidget_text2'),
        },
        {
            id: 3,
            number: 3,
            text: t('howToAuthorWidget_text3'),
        },
    ];


    return (
        <div className={s.howToAuthorWidget}>
            <h2>{t('howToAuthorWidget_title')}</h2>
            <div className={s.steps}>
                <Row gutter={[12, 12]}>
                    {
                            stepsAuthor.map(item => {
                                return (
                                    <Col xl={{span: 8}}>
                                        <StepCard key={item.id} number={item.number} text={item.text}/>
                                    </Col>
                                )
                            })
                    }

                </Row>
            </div>
        </div>
    );
};

export default HowToAuthorWidget;