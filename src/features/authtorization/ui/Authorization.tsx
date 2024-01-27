import React from 'react';
import {Input, InputWrapper} from "../../../shared/ui";

const Authorization: React.FC = () => {
    return (
        <div>
            <InputWrapper label="Введите ваш E-Mail">
                <Input type="text" placeholder="E-Mail" value="" callback={() => 0} />
            </InputWrapper>
            <InputWrapper label="Введите ваш пароль">
                <Input type="text" placeholder="Пароль" value="" callback={() => 0} />
            </InputWrapper>
        </div>
    );
};

export default Authorization;