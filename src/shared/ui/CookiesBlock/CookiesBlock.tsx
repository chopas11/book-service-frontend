import React from 'react';
import s from "./CookiesBlock.module.css"
import {Button} from "../index.ts";
import {Col, Row} from "antd";
import {Link, useNavigate} from "react-router-dom";

const CookiesBlock:React.FC = () => {

    const navigate = useNavigate();

    const acceptCookies = () => {
        localStorage.setItem('acceptCookies', "true");
        navigate('/');
    }

    return (
        <div className={s.cookies_block}>
            <Row>
                <Col xl={{span: 16}} sm={{span: 24}}>
                    <div>
                        <h3>Мы используем файлы cookie</h3><br/>
                        <p>Для обеспечения оптимальной работы анализа, использования и улучшения пользовательского опыта
                            на
                            сайте используются технологии cookie.</p>
                        <p>Продолжая пользоваться с сайтом, вы соглашаетесь с размещением cookie-файлов на вашем
                            устройстве на
                            условиях, изложенных в <Link to="/privacypolicy">Политике конфиденциальности.</Link> </p>
                    </div>
                </Col>
                <Col xl={{span: 2}} sm={{span: 0}}>

                </Col>
                <Col xl={{span: 6}} sm={{span: 24}}>
                    <div className={s.cookies_block_buttons}>
                        <div>
                            <Button type={'accent'} callback={() => acceptCookies()}>Принять</Button>
                            <Link to="/privacypolicy"><Button type={'white'}>Подробнее</Button></Link>
                        </div>
                    </div>
                </Col>
            </Row>



        </div>
    );
};

export default CookiesBlock;