import React from 'react';
import {Col, Row, } from 'antd';
import Header from "../../widgets/Header/Header";
import Footer from "../../widgets/Footer/Footer";
import WelcomeWidget from "../../widgets/WelcomeWidget/WelcomeWidget";
import AdvantagesWidget from "../../widgets/AdvantagesWidget/AdvantagesWidget";
import ServicesWidget from "../../widgets/ServicesWidget/ServicesWidget";
import HowToAuthorWidget from "../../widgets/HowToAuthorWidget/HowToAuthorWidget";

const Main: React.FC = () => {
    return (
        <div>
            <Row>
                <Col xxl={{ span: 16, offset: 4 }} xl={{ span: 16, offset: 4 }} xs={{ span: 22, offset: 1 }}>
                    <Header />
                    <WelcomeWidget title="Станьте автором в один клик" />
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