import React from 'react';
import {Col, Row} from "antd";
import noCover from "../../assets/images/no-cover.png";
import s from "./MyBookCard.module.css"

interface MyBookCardProps {
    cover: File | null,
    children: React.ReactNode[] | React.ReactNode,
}

const MyBookCard: React.FC<MyBookCardProps> = ({cover, children}) => {
    return (
            <Row gutter={24}>
                <Col lg={{span: 6}}>
                    <div className={s.myBook_cover}>
                        {cover ?
                            <img src={URL.createObjectURL(cover)} style={{width: "100%", borderRadius: "12px"}} alt="Img"/>
                            :
                            <img src={noCover} style={{width: "100%", borderRadius: "12px"}} alt="Img"/>
                        }
                    </div>
                </Col>
                <Col lg={{span: 18}}>
                    {children}
                </Col>
            </Row>
    );
};

export default MyBookCard;