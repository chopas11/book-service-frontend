import React from 'react';
import s from "./BalanceCard.module.css"
import ParagraphIcon from "../../assets/IconPack/ParagraphIcon/ParagraphIcon.tsx";

interface BalanceCardProps {
    balance: number,
    color?: string,
}

const BalanceCard: React.FC<BalanceCardProps> = ({balance, color = "var(--accent-color)"}) => {
    return (
        <span style={{color}} className={s.balanceCard}>{balance} <ParagraphIcon/></span>
    );
};

export default BalanceCard;