import React from 'react';

import s from "./Dropdown.module.css"

const Dropdown = () => {
    return (
        <select className={s.select} name="" id="">
            <option value="">Выберите до трех жанров</option>
            <option value="">Фантастика</option>
            <option value="">Романы</option>
            <option value="">Комедии</option>
        </select>
    );
};

export default Dropdown;