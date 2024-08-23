// import React from 'react';

import s from "./HowToAuthorWidget.module.css"
import Button from "../../shared/ui/forms/Button/Button";
import {Link} from "react-router-dom";
import {StepCard} from "../../shared/ui";
import {Col, Row} from "antd";
import {useTypedSelector} from "../../shared/hooks/useTypedSelector.ts";

const stepsAuthor = [
    {
        id: 1,
        number: 1,
        text: "Убедитесь, что текст для книги/журнала/комикса окончательно готов, проверьте качество фотоконтента и соберите всё в один файл",
    },
    {
        id: 2,
        number: 2,
        text: "Перейдите на страницу публикации и пройдитесь по всем шагам, выберите необходимые услуги и нажмите «Далее»",
    },
    {
        id: 3,
        number: 3,
        text: "Отслеживайте статус публикации в разделе «Мои книги», оплатите выбранные услуги, отредактируйте описание книги, если это необходимо",
    },
];

const stepsReader = [
    {
        id: 1,
        number: 1,
        text: "Переключитесь на аккаунт автора в шапке сайта",
    },
    {
        id: 2,
        number: 2,
        text: "Ознакомьтесь с информацией на главной странице",
    },
    {
        id: 3,
        number: 3,
        text: "Перейдите в раздел “Публикация” и следуйте пошаговой инструкции.",
    },
];



const HowToAuthorWidget = () => {

    const {role} = useTypedSelector(state => state.user)

    return (
        <div className={s.howToAuthorWidget}>
            <h2>
                {
                    role === 'author' ?
                        "Как стать автором?" :
                        "Вы можете стать автором"
                }
            </h2>
            <div className={s.steps}>
                <Row gutter={[12, 12]}>
                    {
                        role === 'author' ?
                            stepsAuthor.map(item => {
                                return (
                                    <Col xl={{span: 8}}>
                                        <StepCard key={item.id} number={item.number} text={item.text}/>
                                    </Col>
                                )
                            }) :
                            stepsReader.map(item => {
                                return (
                                    <Col xl={{span: 8}}>
                                        <StepCard key={item.id} number={item.number} text={item.text}/>
                                    </Col>
                                )
                            })

                    }
                </Row>
            </div>
            <div className="button_center desktop_visibility">
                <Link to="/publish">
                    <Button type='page' size='xl' paddingX='80px'>
                        Стать автором
                    </Button>
                </Link>
            </div>
            <div className="button_center mobile_visibility">
                <Link to="/publish">
                    <Button type='page'  size='lg' paddingX='full'>
                        Стать автором
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default HowToAuthorWidget;