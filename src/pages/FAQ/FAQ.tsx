// import React from 'react';
import Header from "../../widgets/Header/Header";
import Footer from "../../widgets/Footer/Footer";
import {Col, Row} from "antd";

const Faq:React.FC = () => {
    return (
        <div>
            <Row>
                <Col xxl={{ span: 16, offset: 4 }} xl={{ span: 16, offset: 4 }} xs={{ span: 22, offset: 1 }}>
                    <Header />
                    <h3>Частые вопросы</h3>
                    <Footer />
                </Col>
            </Row>
        </div>
    );
};

export default Faq;