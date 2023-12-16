// import React from 'react';

import s from "./Logo.module.css"

const Logo = () => {
    return (
        <div className={s.logo}>
            <span className={s.logo_dark}>автор.</span>
            <span className={s.logo_light}>клик</span>
        </div>
    );
};

export default Logo;