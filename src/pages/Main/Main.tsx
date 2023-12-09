import React from 'react';
import {Col, Row, } from 'antd';
import Header from "../../widgets/Header/Header";
import Footer from "../../widgets/Footer/Footer";
import WelcomeBlock from "../../widgets/WelcomeBlock/WelcomeBlock";

const Main: React.FC = () => {
    return (
        <div>
            <Row>
                <Col xxl={{ span: 16, offset: 4 }} xl={{ span: 16, offset: 4 }} xs={{ span: 22, offset: 1 }}>
                    <Header />
                    <WelcomeBlock title="Станьте автором в один клик" />

                    <h2>Наши преимущества</h2>
                    Блоки пошли

                    <Footer />
                </Col>
            </Row>
        </div>
    );
};

export default Main;