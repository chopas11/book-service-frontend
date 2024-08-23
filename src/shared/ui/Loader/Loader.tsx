import React from 'react';
import s from './Loader.module.css'

const Loader:React.FC = () => {
    return (
        <div className={s.loader}>
            <div className={s.app_icon}></div>
        </div>
    );
};

export default Loader;