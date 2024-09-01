import React from 'react';
import s from "./CookiesBlock.module.css"
import {Button} from "../index.ts";
import {Col, Row} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const CookiesBlock:React.FC = () => {

    const { t } = useTranslation();
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
                        <h3>{t('cookiesBlock_title')}</h3><br/>
                        <p>{t('cookiesBlock_text1')}</p>
                        <p>{t('cookiesBlock_text2')} <Link to="/privacypolicy">{t('privacyPolicy')}</Link> </p>
                    </div>
                </Col>
                <Col xl={{span: 2}} sm={{span: 0}}>

                </Col>
                <Col xl={{span: 6}} sm={{span: 24}}>
                    <div className={s.cookies_block_buttons}>
                        <div>
                            <Button type={'accent'} callback={() => acceptCookies()}>{t('accept')}</Button>
                            <Link to="/privacypolicy"><Button type={'white'}>{t('more')}</Button></Link>
                        </div>
                    </div>
                </Col>
            </Row>



        </div>
    );
};

export default CookiesBlock;