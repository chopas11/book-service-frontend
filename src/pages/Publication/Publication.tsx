import React from 'react';
import {Col, Row} from "antd";
import Header from "../../widgets/Header/Header";
import WelcomeWidget from "../../widgets/WelcomeWidget/WelcomeWidget";
import Footer from "../../widgets/Footer/Footer";
import Button from "../../shared/ui/Button/Button";
import {useEffect} from "react";

const publishBook = () => {
    console.log("Форма отработала!");
    // e.preventDefault();
};


const Publication: React.FC = () => {
    return (
        <div>
            <Row>
                <Col xxl={{ span: 16, offset: 4 }} xl={{ span: 16, offset: 4 }} xs={{ span: 22, offset: 1 }}>
                    <Header />
                    <WelcomeWidget title="Публикация книги" description="Пройдитесь по всем этапам, следуйте рекомендациям и опубликуйте книгу!" />
                    <div>
                        <Button onClick={publishBook} isDark={true}>Оплатить</Button>
                    </div>
                    <Footer />
                </Col>
            </Row>
        </div>
    );
};

export default Publication;