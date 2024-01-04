import React from 'react';
import {IconBlock} from "../../../../shared/ui";
import ProfileIcon from "../../../../shared/assets/IconPack/ProfileIcon/ProfileIcon.tsx";
import s from "./MiniProfileButton.module.css"

interface MiniProfileButtonProps {
    callback: React.EventHandler<never>,
}

const MiniProfileButton: React.FC<MiniProfileButtonProps> = ({callback}) => {
    return (
        <div
            className={s.miniProfile_button}
            onClick={callback}
        >
            <IconBlock size="50px" border="1px solid #000">
                <ProfileIcon/>
            </IconBlock>
        </div>
    );
};

export default MiniProfileButton;