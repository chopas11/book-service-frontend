import React from 'react';
import BookStatusBlock from "./BookStatusBlock/BookStatusBlock.tsx";
import TogglePopup from "../../togglePopup/TogglePopup.tsx";
import BookStatusLabel from "./BookStatusLabel/BookStatusLabel.tsx";

interface ShowBookStatusProps {
    step: 1 | 2 | 3 | 4,
}

const ShowBookStatus: React.FC<ShowBookStatusProps> = ({step}) => {


    return (
        <TogglePopup feature={<BookStatusBlock step={step} />}>
            <BookStatusLabel step={step} />
        </TogglePopup>
    );
};

export default ShowBookStatus;