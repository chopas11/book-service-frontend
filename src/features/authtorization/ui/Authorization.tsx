import React from 'react';
import {Input, InputWrapper} from "../../../shared/ui";

const Authorization: React.FC = () => {
    return (
        <div>
            <InputWrapper label="Введите ваш E-Mail">
                <Input type="text" placeholder="E-Mail" callback={() => 0} />
            </InputWrapper>
            <InputWrapper label="Введите ваш пароль">
                <Input type="text" placeholder="Пароль" callback={() => 0} />
            </InputWrapper>
        </div>
    );
};

export default Authorization;