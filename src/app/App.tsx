import React, {useEffect, useRef} from 'react';
import './styles/App.css'
import AppRouter from "./providers/router/ui/AppRouter.tsx";
import {store} from "./providers/store";
import {Provider, useDispatch} from "react-redux";
import {BrowserRouter, useNavigate, useSearchParams} from "react-router-dom";
import Header from "../widgets/Header/Header.tsx";
import Footer from "../widgets/Footer/Footer.tsx";
import {Col, Row} from "antd";
import {useTypedSelector} from "../shared/hooks/useTypedSelector.ts";
import Modal from "../shared/ui/Modal/Modal.tsx";
import {checkAccessToken, getAccessToken} from "../entities/User/model/services/userService.ts";
import {USER_LOCALSTORAGE_ACCESS_TOKEN_KEY} from "../shared/const/localStorageConsts.ts";
import defaults from "./defaults.json"


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

    const dispatch = useDispatch()
    // получаем параметры строки запроса
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const dataFetch = useRef(false)

    useEffect(() => {

        console.log("Version:", defaults.version);

        if (dataFetch.current)
            return
        dataFetch.current = true

        dispatch(checkAccessToken())
        if (searchParams.get("code") !== null) {
            if (!localStorage.getItem(USER_LOCALSTORAGE_ACCESS_TOKEN_KEY)) {
                console.log('Аксес токена нет в хранилище, поэтому я вывелся')
                dispatch(getAccessToken(String(searchParams.get("code"))))
            }
            navigate('/');
        }


    }, [searchParams]);

    return (
        <div className="wrapper">
            <Modal />
            <Row className="container">
                <Col xxl={{span: 18, offset: 3}} xl={{span: 20, offset: 2}} xs={{span: 22, offset: 1}}>
                    <div className="wrap">
                        <Header/>
                        <div className="main">
                            <AppRouter/>
                        </div>
                    </div>
                    <Footer/>
                </Col>
            </Row>
        </div>
    )
}

export default App
