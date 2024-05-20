import React from 'react';
import s from "./Button.module.css"

interface ButtonProps {
    type?: 'primary' | 'page' | 'green' | 'lil' | 'accent' | 'borders' | 'transparentPrimary' | 'transparentAccent',
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    // icon-where
    paddingX?: 'full' |string | 0,
    bdRadius?: 'full' | '12px';
    callback?: React.EventHandler<never>,
    children: React.ReactNode
}

const Button:React.FC<ButtonProps> = (

    {
        type = 'primary',
        size = 'md',
        paddingX = '15px',
        bdRadius = '100px',
        callback,
        children
    }) => {

    let height = "0";
    let fontSize = "0";
    switch (size) {
        case 'xs':
            height = "26px";
            fontSize = "12px";
            break;
        case 'sm':
            height = "30px";
            fontSize = "14px";
            break;
        case 'md':
            height = "42px";
            fontSize = "14px";
            break;
        case 'lg':
            height = "50px";
            fontSize = "18px";
            break;
        case 'xl':
            height = "64px";
            fontSize = "18px";
            break;
    }
    let style = {};
    if (paddingX === 'full') {
        style = {
            borderRadius: bdRadius,
            width: '100%',
            height,
            fontSize,
        };
    } else {
        style = {
            paddingLeft: paddingX,
            paddingRight: paddingX,
            borderRadius: bdRadius,
            height,
            fontSize,
        };
    }

    switch (type) {
        case 'primary':
            return (
                <button
                    style={style}
                    onClick={callback}
                    className={`${s.button} ${s.primary} `}
                >{children}</button>
            )
        case 'page':
            return (
                <button
                    style={style}
                    onClick={callback}
                    className={`${s.button} ${s.page} `}
                >{children}</button>
            )
        case 'green':
            return (
                <button
                    style={style}
                    onClick={callback}
                    className={`${s.button} ${s.green} `}
                >{children}</button>
            )
        case 'lil':
            return (
                <button
                    style={style}
                    onClick={callback}
                    className={`${s.button} ${s.lil} `}
                >{children}</button>
            )
        case 'accent':
            return (
                <button
                    style={style}
                    onClick={callback}
                    className={`${s.button} ${s.accent} `}
                >{children}</button>
            )
        case 'borders':
            return (
                <button
                    style={style}
                    onClick={callback}
                    className={`${s.button} ${s.borders} `}
                >{children}</button>
            )
        case 'transparentPrimary':
            return (
                <button
                    style={style}
                    onClick={callback}
                    className={`${s.button} ${s.transparentPrimary} `}
                >{children}</button>
            )
        case 'transparentAccent':
            return (
                <button
                    style={style}
                    onClick={callback}
                    className={`${s.button} ${s.transparentAccent} `}
                >{children}</button>
            )
    }
};

export default Button;