import React from 'react';
import {Col, Row, } from 'antd';
import Header from "../../widgets/Header/Header";
import Footer from "../../widgets/Footer/Footer";
import WelcomeWidget from "../../widgets/WelcomeWidget/WelcomeWidget";
import AdvantagesWidget from "../../widgets/AdvantagesWidget/AdvantagesWidget";
import ServicesWidget from "../../widgets/ServicesWidget/ServicesWidget";
import HowToAuthorWidget from "../../widgets/HowToAuthorWidget/HowToAuthorWidget";

import s from "./Main.module.css"

const Main: React.FC = () => {

    const welcomeData: {title: string, description: string} = {
        title: "Станьте автором в один клик",
        description: "Мы предлагаем профессиональные услуги, которые помогают тысячам писателей оформлять, издавать и продвигать книгу.",
    }

    return (
        <div className={s.mainPage}>
            <Row>
                <Col xxl={{ span: 18, offset: 3 }} xl={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
                    <Header />
                    <WelcomeWidget title={welcomeData.title} description={welcomeData.description} />
                    <AdvantagesWidget />
                    <ServicesWidget />
                    <HowToAuthorWidget />
                    <Footer />
                </Col>
            </Row>
        </div>
    );
};

export default Main;