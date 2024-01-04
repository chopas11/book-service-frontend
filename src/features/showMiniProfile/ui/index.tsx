import React, {useState} from 'react';
import MiniProfileButton from "./MiniProfileButton/MiniProfileButton.tsx";
import MiniProfileBlock from "./MiniProfileBlock/MiniProfileBlock.tsx";

const ShowMiniProfile: React.FC = () => {

    const [isShowProfile, setShowProfile] = useState(false);
    const toggleProfile = () => {
        if (!isShowProfile)
            console.log("Profile opened!")
        else
            console.log("Profile closed!")
        setShowProfile(!isShowProfile);
    }


    return (
        <>
            <MiniProfileButton callback={() => toggleProfile()} />
            <MiniProfileBlock visible={isShowProfile} />
        </>
    );
};

export default ShowMiniProfile;