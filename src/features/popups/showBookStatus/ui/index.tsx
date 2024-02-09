import React, {useState} from 'react';
import BookStatusLabel from "./BookStatusLabel/BookStatusLabel.tsx";
import BookStatusBlock from "./BookStatusBlock/BookStatusBlock.tsx";

interface ShowBookStatusProps {
    step: 1 | 2 | 3 | 4,
}

const ShowBookStatus: React.FC<ShowBookStatusProps> = ({step}) => {

    const [isShowBookStatus, setShowBookStatus] = useState(false);

    const toggleBookStatus = () => {
        if (!isShowBookStatus)
            console.log("Profile opened!")
        else
            console.log("Profile closed!")
        setShowBookStatus(!isShowBookStatus);
    }

    return (
        <>
            <BookStatusLabel step={step} callback={() => toggleBookStatus()} />
            <BookStatusBlock step={step} visible={isShowBookStatus} />
        </>
    );
};

export default ShowBookStatus;