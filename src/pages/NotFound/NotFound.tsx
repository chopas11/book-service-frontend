import React from 'react';
import {Link} from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <div>
            <h2>Ошибка 404 <Link to="/" >Перейти на главную</Link></h2>
        </div>
    );
};

export default NotFound;