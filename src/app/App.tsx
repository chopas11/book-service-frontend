import React from 'react';
import './styles/App.css'
import AppRouter from "./providers/router/ui/AppRouter.tsx";
import {store} from "./providers/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import Header from "../widgets/Header/Header.tsx";
import Footer from "../widgets/Footer/Footer.tsx";
import {Col, Row} from "antd";
import {useTypedSelector} from "../shared/hooks/useTypedSelector.ts";
import Modal from "../shared/ui/Modal/Modal.tsx";
// import ShowAuthModal from "../features/showAuthModal/ui/ShowAuthModal.tsx";

const App: React.FC = () => {

    return (
      <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </Provider>
      </React.StrictMode>
    );
};


const Layout: React.FC = () => {

    const {active, path} = useTypedSelector(state => state.modal)

    return (
        <div className="wrapper">
            <Modal active={active} path={path} />
            <Row>
                <Col xxl={{span: 18, offset: 3}} xl={{span: 20, offset: 2}} xs={{span: 22, offset: 1}}>
                    <Header/>
                    <AppRouter/>
                    <Footer/>
                </Col>
            </Row>
        </div>
    )
}

export default App
