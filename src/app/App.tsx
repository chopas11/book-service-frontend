import React, {useEffect} from 'react';
import './styles/App.css'
import AppRouter from "./providers/router/ui/AppRouter.tsx";
import {store} from "./providers/store";
import {Provider, useDispatch} from "react-redux";
import {BrowserRouter, useParams, useSearchParams} from "react-router-dom";
import Header from "../widgets/Header/Header.tsx";
import Footer from "../widgets/Footer/Footer.tsx";
import {Col, Row} from "antd";
import {useTypedSelector} from "../shared/hooks/useTypedSelector.ts";
import Modal from "../shared/ui/Modal/Modal.tsx";
import axios from "axios";
import {setAuthData} from "../entities/User/model/slice/userReducer.ts";
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
    const dispatch = useDispatch()
    const params = useParams();
    // получаем параметры строки запроса
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        console.log("Useeffect in Layout")
        console.log(searchParams.get("code"), " 111")

        if (searchParams.get("code") !== null) {
            let formData = new FormData();
            formData.append('grant_type', 'authorization_code');
            formData.append('code', searchParams.get("code"));
            formData.append('redirect_uri', 'https://storysphere.ru');
            formData.append('client_id', 'client');
            formData.append(
                'code_verifier',
                window.localStorage.getItem('code_verifier')
            );

            axios
                .post(
                    'http://storysphere.ru:9000/oauth2/token',
                    formData,

                    {
                        headers: {
                            'Content-type': 'application/url-form-encoded',
                            Authorization: 'Basic ' + btoa('client:secret'),
                        },
                    }
                )
                .then((resp) => {
                    console.log(resp.data);
                    window.sessionStorage.setItem('_a', resp.data.access_token);
                    if (resp.data.access_token) {
                        dispatch(setAuthData());
                    }
                });
        }

    //
    }, [searchParams]);

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
