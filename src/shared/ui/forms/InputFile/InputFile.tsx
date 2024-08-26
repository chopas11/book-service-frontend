import React from 'react';
import s from "./InputFile.module.css"

interface InputFileProps {
    name?: string,
    callback: React.EventHandler<never>,
    color?: 'dark' | 'lil',
}

const InputFile: React.FC<InputFileProps> = ({name, callback}) => {


    return (
        <label className={s.input_file}>
            <input onChange={callback} type="file" name="file"/>
            <span className={s.input_file_btn}>{name ? name : "Выберите файл"}</span>
            {/*<span className="input-file-text">Максимум 10мб</span>*/}
        </label>
    );
};

export default InputFile;