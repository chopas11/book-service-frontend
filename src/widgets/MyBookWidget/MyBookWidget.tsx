import React, {useState} from 'react';
import s from "./MyBookWidget.module.css"
import {Button} from "../../shared/ui";
import {Col, Row} from "antd";
import {useTypedSelector} from "../../shared/hooks/useTypedSelector.ts";
import noCover from "../../shared/assets/images/no-cover.png";
import {toggle} from "../../features/modals/toggleModal/model/slice/toggleModalReducer.ts";
import {modalPath} from "../../features/modals/toggleModal/model/enums/modalPath.ts";
import {useDispatch} from "react-redux";
import ShowBookStatus from "../../features/popups/showBookStatus/ui";
import {Link} from "react-router-dom";

const MyBookWidget: React.FC = () => {


    const dispatch = useDispatch()
    const {title, authors, cover, description} = useTypedSelector(state => state.publication)

    const [status, setStatus] = useState(4);

    return (
        <div className={s.myBook}>
            <Row gutter={15}>
                <Col lg={{span: 6}}>
                    <div className={s.myBook_cover}>
                        {cover ?
                            <img src={URL.createObjectURL(cover)} style={{width: "100%", borderRadius: "12px"}} alt="Img"/>
                            :
                            <img src={noCover} style={{width: "100%", borderRadius: "12px"}} alt="Img"/>
                        }
                    </div>
                </Col>
                <Col lg={{span: 11}}>
                    <div className={s.myBook_about}>
                        <div className={s.myBook_about_title}>
                            <h3>{title}</h3>
                            <p>{authors[0]}</p>
                        </div>
                        <div className={s.myBooks_about_description}>
                            <span>О книге</span>
                            <p>{description}</p>
                        </div>
                    </div>
                </Col>
                <Col lg={{span: 7}}>
                    <div className={s.myBook_add}>
                        <ShowBookStatus step={status} />
                        <br/><br/>
                        {status === 1 ? <Button callback={() => dispatch(toggle(modalPath.PAYMENT_VIEWER))}>Оплатить</Button> : ""}
                        {status === 4 ? <Link to="/edit"><Button>Редактировать</Button></Link> : ""}
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default MyBookWidget;