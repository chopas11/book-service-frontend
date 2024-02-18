import React from 'react';
import {Button, Input, InputWrapper} from "../../../../shared/ui";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../../shared/hooks/useTypedSelector.ts";
import {updateEmail, updatePassword} from "../model/slice/authReducer.ts";
import s from "./ShowAuthModal.module.css"
import axios from "axios";

const ShowAuthModal: React.FC = () => {

    const dispatch = useDispatch()

    const {email, password} = useTypedSelector(state => state.auth)

     async function auth() {
         // const req = 'http://31.129.101.169:9000/oauth2/authorize?response_type=code&client_id=client&scope=openid&redirect_uri=http://31.129.101.169&code_challenge=c478361e6869af25970682a2c53967adbc8a46e9429efdc64b96351cfd52e13f&code_challenge_method=S256';
         const req = 'http://localhost:9000/oauth2/authorize?response_type=code&client_id=client&scope=openid&redirect_uri=http://localhost:8000/&code_challenge=c478361e6869af25970682a2c53967adbc8a46e9429efdc64b96351cfd52e13f&code_challenge_method=S256';
         // const req = 'http://localhost:9000/oauth2/authorize?response_type=code&client_id=client&scope=openid&redirect_uri=https://springone.io/authorized&code_challenge=c478361e6869af25970682a2c53967adbc8a46e9429efdc64b96351cfd52e13f&code_challenge_method=S256';

        //  const res = await axios.get(req,
        //     {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Access-Control-Allow-Origin' : 'http://localhost:9000',
        //             'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        //             'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        //             'Access-Control-Allow-Credentials': 'true',
        //             'Access-Control-Request-Private-Network': 'true',
        //             'Referrer-Policy': 'origin',
        //         }
        //     });



         const headers = new Headers();
         // headers.append('Authorization', 'Basic YWRtaW46cGFzc3dvcmQ=');

         const res = await fetch(req, {
             credentials: 'include', // для передачи basic
             headers: headers,
             mode: "no-cors",
         });
         console.log(res)
    }

    return (
        <div className={s.authModal}>
            <h3>Вход в систему</h3>
            <Button>Войти с помощью Google</Button><br/>
            <Button>Войти с Яндекс ID</Button><br/>
            <Button>Войти с VK ID</Button><br/>
            <InputWrapper label="Введите ваш E-Mail">
                <Input theme="light" type="text" placeholder="E-Mail" value={email} callback={(e: React.FormEvent<HTMLInputElement>) => dispatch(updateEmail(e.currentTarget.value))} />
            </InputWrapper>
            <InputWrapper label="Введите ваш пароль">
                <Input theme="light" type="text" placeholder="Пароль" value={password} callback={(e: React.FormEvent<HTMLInputElement>) => dispatch(updatePassword(e.currentTarget.value))} />
            </InputWrapper>
            <br/>
            <Button>Войти</Button>
        </div>
    );
};

export default ShowAuthModal;