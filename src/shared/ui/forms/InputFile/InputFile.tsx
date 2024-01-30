import React from 'react';
import s from "./InputFile.module.css"

interface InputFileProps {
    callback: React.EventHandler<never>,
}

const InputFile: React.FC<InputFileProps> = ({callback}) => {
    return (
        <label className={s.input_file}>
            <input onChange={callback} type="file" name="file"/>
            <span className={s.input_file_btn}>Выберите файл</span>
            {/*<span className="input-file-text">Максимум 10мб</span>*/}
        </label>
    );
};

export default InputFile;