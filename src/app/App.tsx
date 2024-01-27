import React, {useState} from 'react';
import './styles/App.css'
import AppRouter from "./providers/router/ui/AppRouter.tsx";
import {store} from "./providers/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import Header from "../widgets/Header/Header.tsx";
import Footer from "../widgets/Footer/Footer.tsx";
import {Col, Row} from "antd";
import Modal from "../shared/ui/Modal/Modal.tsx";
import Authorization from "../features/authtorization/ui/Authorization.tsx";

const App: React.FC = () => {

    const [modal, setModal] = useState(true);

  return (
      <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <div className="wrapper">
                    <Modal active={modal} callback={setModal} ><Authorization /></Modal>
                    <Row>
                        <Col xxl={{span: 18, offset: 3}} xl={{span: 20, offset: 2}} xs={{span: 22, offset: 1}}>
                            <Header/>
                            <AppRouter/>
                            <Footer />
                        </Col>
                    </Row>
                </div>
            </BrowserRouter>
        </Provider>
      </React.StrictMode>
);
};

export default App
