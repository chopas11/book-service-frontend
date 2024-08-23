import React from 'react';
import s from "./Block.module.css"

interface BlockProps {
    /**
     * Background Color
     */
    bgColor: string,
    /**
     * Text Color
     */
    color: string,
    /**
     * Block padding
     */
    padding: string,
    /**
     * Border Radius
     */
    bdRadius: string,
    /**
     * Children Components
     */
    margin?: string,
    children: React.ReactNode | React.ReactNode[]
}

/**
 * Block UI Component
 */
const Block: React.FC<BlockProps> = ({bgColor, color, padding, bdRadius, margin = "0", children}) => {
    return (
        <div style={{
            backgroundColor: bgColor,
            color: color,
            padding: padding,
            borderRadius: bdRadius,
            margin: margin
        }}
             className={s.block}
        >
            {children}
        </div>
    );
};

export default Block;