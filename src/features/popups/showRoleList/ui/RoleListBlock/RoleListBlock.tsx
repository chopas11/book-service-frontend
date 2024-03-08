import React from 'react';
import {Button} from "../../../../../shared/ui";
import s from "./RoleListBlock.module.css"
import {changeRole} from "../../../../../entities/User/model/slice/userReducer.ts";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";


const RoleListBlock: React.FC = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const changeUserRole = (role) => {
        dispatch(changeRole(role));
       navigate('/');
    }

    return (
        <div className={s.roleList_block}>
            <ul>
                <li>
                    <Button type='accent' size='xs' paddingX='10px'
                            callback={() => changeUserRole('author')}>Перейти на автора</Button>
                </li>
                <li>
                    <Button type='accent' size='xs' paddingX='10px'
                            callback={() => changeUserRole('reader')}>Перейти на читателя</Button>
                </li>
            </ul>
        </div>
    );
};

export default RoleListBlock;