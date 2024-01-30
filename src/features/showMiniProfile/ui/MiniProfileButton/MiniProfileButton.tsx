import React from 'react';
import {Button, IconBlock} from "../../../../shared/ui";
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
            {/*<IconBlock size="50px" border="1px solid var(--theme-color)">*/}
            <Button isDark={false} width="52px" height="52px" fontSize="16px" border="1px solid #fff" >
                <ProfileIcon color="var(--theme-color)"/>
            </Button>
            {/*</IconBlock>*/}
        </div>
    );
};

export default MiniProfileButton;