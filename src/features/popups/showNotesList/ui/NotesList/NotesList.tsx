import React from 'react';

import s from "./NotesList.module.css"
import {Button} from "../../../../../shared/ui";

interface NotesListProps {
    array: string[],
}

const NotesList:React.FC<NotesListProps> = ({array}) => {
    return (
        <>
            <h3>Ваши заметки</h3>
            <div>
                {array.map(item => {
                    return (
                        <>
                            <hr/>
                            <div className={s.note}>{item}</div>

                            <Button type={"accent"} size={'sm'}>Удалить</Button>
                            <br/>
                            <br/>
                        </>
                    )
                })}
            </div>
        </>

    );
};

export default NotesList;