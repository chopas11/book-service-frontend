// import React from 'react';
import Header from "../../widgets/Header/Header";
import Footer from "../../widgets/Footer/Footer";
import {Col, Row} from "antd";

const MyBooks = () => {
    return (
        <div>
            <Row>
                <Col xxl={{ span: 16, offset: 4 }} xl={{ span: 16, offset: 4 }} xs={{ span: 22, offset: 1 }}>
                    <Header />
                    <h3>Опубликованные книги</h3>
                    <Footer />
                </Col>
            </Row>
        </div>
    );
};

export default MyBooks;