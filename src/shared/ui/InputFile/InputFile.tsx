import React from 'react';
import s from "./InputFile.module.css"

// interface InputFileProps {
//
// }

const InputFile: React.FC = () => {
    return (
        <label className={s.input_file}>
            <input type="file" name="file"/>
            <span className={s.input_file_btn}>Выберите файл</span>
            {/*<span className="input-file-text">Максимум 10мб</span>*/}
        </label>
    );
};

export default InputFile;