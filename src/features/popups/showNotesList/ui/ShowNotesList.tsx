import React from 'react';
import {Button} from "../../../../shared/ui";
import NotesIcon from "../../../../shared/assets/IconPack/NotesIcon/NotesIcon.tsx";
import TogglePopup from "../../togglePopup/TogglePopup.tsx";
import NotesList from "./NotesList/NotesList.tsx";

interface ShowNotesList {
    array: string[],
}


const ShowNotesList:React.FC<ShowNotesList> = ({array}) => {
    return (
        <TogglePopup feature={<NotesList array={array} />}>
            <Button type={"transparentPrimary"}><NotesIcon /></Button>
        </TogglePopup>
    );
};

export default ShowNotesList;