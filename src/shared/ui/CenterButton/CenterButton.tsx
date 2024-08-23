import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "../index.ts";

interface CenterButtonProps {
    link: string,
    text: string,
}

const CenterButton: React.FC<CenterButtonProps> = ({link, text}) => {
    return (
        <div className="button_center">
            <Link to={link}>
                <Button type='page' size='xl' paddingX='100px'>
                    {text}
                </Button>
            </Link>
        </div>
    );
};

export default CenterButton;