import React from 'react';
import TogglePopup from "../../togglePopup/TogglePopup.tsx";
import RoleListButton from "./RoleListButton/RoleListButton.tsx";
import RoleListBlock from "./RoleListBlock/RoleListBlock.tsx";
import {useTypedSelector} from "../../../../shared/hooks/useTypedSelector.ts";

const ShowRoleList:React.FC = () => {

    const {isAuth} = useTypedSelector(state => state.user)

    return (
        <div>
            { isAuth ?
                <TogglePopup feature={<RoleListBlock />}>
                    <RoleListButton />
                </TogglePopup>
                : ""
            }
        </div>
    );
};

export default ShowRoleList;