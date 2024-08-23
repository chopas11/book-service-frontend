import React from 'react';
import MiniProfileButton from "./MiniProfileButton/MiniProfileButton.tsx";
import MiniProfileBlock from "./MiniProfileBlock/MiniProfileBlock.tsx";
import TogglePopup from "../../togglePopup/TogglePopup.tsx";

const ShowMiniProfile: React.FC = () => {

    return (
        <TogglePopup feature={<MiniProfileBlock />}>
            <MiniProfileButton />
        </TogglePopup>
    );
};

export default ShowMiniProfile;