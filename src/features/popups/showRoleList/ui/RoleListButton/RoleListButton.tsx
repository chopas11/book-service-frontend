import React from 'react';
import {Button} from "../../../../../shared/ui";
import {useTypedSelector} from "../../../../../shared/hooks/useTypedSelector.ts";

const RoleListButton: React.FC = () => {

    const {role} = useTypedSelector(state => state.user)

    return (
        <div>
            <Button type="page" size="lg">{role === 'author' ? "Автор" : "Читатель"}</Button>
        </div>
    );
};

export default RoleListButton;