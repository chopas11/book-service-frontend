import React from 'react';
import s from "./MiniProfileBlock.module.css"
import image from "../../../../../shared/assets/images/AvatarExample.png"
import LogoutIcon from "../../../../../shared/assets/IconPack/LogoutIcon/LogoutIcon.tsx";
import {useTypedSelector} from "../../../../../shared/hooks/useTypedSelector.ts";
import {useDispatch} from "react-redux";
import {logout, setAuthData} from "../../../../../entities/User/model/slice/userReducer.ts";
import {Link} from "react-router-dom";
import {Button} from "../../../../../shared/ui";
import BalanceCard from "../../../../../shared/ui/BalanceCard/BalanceCard.tsx";
import {toggle} from "../../../../modals/toggleModal/model/slice/toggleModalReducer.ts";
import {modalPath} from "../../../../modals/toggleModal/model/enums/modalPath.ts";

interface ProfileFeatureProps {
    visible: boolean,
}

const MiniProfileBlock: React.FC<ProfileFeatureProps> = ({visible}) => {

    const dispatch = useDispatch()

    const {isAuth, balance} = useTypedSelector(state => state.user)

    function auth() {
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
        window.location.href = req;
        // const res = await fetch(req, {
        //     method: 'GET',
        //     redirect: 'follow',
        //     credentials: 'include', // для передачи basic
        //     headers: headers,
        //     mode: "no-cors",
        // });
        // console.log(res)
    }

    return (
        <div
            className={`${s.profile} ${visible ? s.visible : s.invisible}`}>
            {
                isAuth ?
                    <div className={s.profile_content}>
                        <div className={s.profile_top}>
                            <div>
                                <img src={image} alt="Avatar"/>
                                <span>Дарья, Автор</span>
                            </div>
                            <div>
                                <p onClick={() => dispatch(logout())}><LogoutIcon/></p>
                            </div>
                        </div>
                        <ul>
                            <li><Link to="/mybooks"><Button type='accent' size='xs' paddingX='10px'>Мои книги</Button></Link></li>
                            <li><Link to="/statistics"><Button type='accent' size='xs' paddingX='10px'>Статистика</Button></Link></li>
                            <li><Link to="/history"><Button type='accent' size='xs' paddingX='10px'>История заказов</Button></Link></li>
                            <li><Link to="/profile"><Button type='accent' size='xs' paddingX='10px'>Настройка профиля</Button></Link></li>
                        </ul>
                        <div className={s.profile_balance}>
                            <p>Баланс: <BalanceCard balance={50} /></p>
                        </div>
                    </div>
                    :
                    <div className={s.profile_content}>
                        <ul>
                            <li><Button type='accent' size='xs' paddingX='10px'
                                        callback={() => auth()}
                            >
                                Войти в систему
                            </Button></li>
                            <li><Button type='accent' size='xs' paddingX='10px'
                                        callback={() => dispatch(toggle(modalPath.AUTHORIZATION_VIEWER))}
                            >
                                Регистрация
                            </Button></li>
                        </ul>
                    </div>
            }
        </div>
    );
};

export default MiniProfileBlock;