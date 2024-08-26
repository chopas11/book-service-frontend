import React from 'react';
import s from "./EditProfile.module.css"
import {Col, Row} from "antd";
import Block from "../../shared/ui/Block/Block.tsx";
import {Button, Input, InputWrapper} from "../../shared/ui";
import avatar from "../../shared/assets/images/profile-example.png"
import ArrowIcon from "../../shared/assets/IconPack/ArrowIcon/ArrowIcon.tsx";

const EditProfile: React.FC = () => {
    return (
        <>
            <h2 className="header_center">Настройка профиля</h2>
            {/**/}
            <div style={{display: 'flex', gap: "24px"}}>
                <Block bgColor="var(--blocks-lil-color)" bdRadius="32px" padding="24px">
                    <InputWrapper label="Добавьте фото профиля">
                        <div style={{display: 'flex', gap: "12px", alignItems: "end", padding: "0 40px 0 0"}}>
                            <img className={s.profile_avatar} src={avatar} alt="EditProfile"/>
                            <Button size="sm">Удалить</Button>
                        </div>
                    </InputWrapper>
                </Block>
                <Block bgColor="var(--blocks-lil-color)" bdRadius="32px" padding="24px">
                    <InputWrapper label="Ваша цель">
                        <Row gutter={[12, 12]}>
                            <Col><Button bdRadius="12px" size="md">Рисовать мангу</Button></Col>
                            <Col><Button bdRadius="12px" size="md">Делать комиксы</Button></Col>
                            <Col><Button bdRadius="12px" size="md">Публиковать журналы</Button></Col>
                            <Col><Button bdRadius="12px" size="md">Писать для души</Button></Col>
                            <Col><Button bdRadius="12px" size="md">Продавать материал подписчикам</Button></Col>
                            <Col><Button bdRadius="12px" size="md">Рассказывать о себе</Button></Col>
                            <Col><Button bdRadius="12px" size="md">Продавать материал подписчикам</Button></Col>
                        </Row>
                    </InputWrapper>
                    <br/>
                    <div className="center"><Button type="transparentPrimary" size="sm"><ArrowIcon /></Button></div>
                </Block>
            </div>
            <br/>
            {/*    */}
            <div className={s.profile_block}>
                <div className={s.profile_up}></div>
                <div className={s.profile_left}></div>
                <div className={s.profile_right}></div>
                <div className={s.profile_down}></div>
                <div className={s.profile_block_up}>
                    <div>
                        <Row gutter={[12, 12]}>
                            <Col xl={{span: 6}}>
                                <InputWrapper label="Фамилия">
                                    <Input theme="blocks" type="text" placeholder="Иванов" />
                                </InputWrapper>
                            </Col>
                            <Col xl={{span: 6}}>
                                <InputWrapper label="Имя">
                                    <Input theme="blocks" type="text" placeholder="Иван" />
                                </InputWrapper>
                            </Col>
                            <Col xl={{span: 6}}>
                                <InputWrapper label="Отчетво">
                                    <Input theme="blocks" type="text" placeholder="Иванович" />
                                </InputWrapper>
                            </Col>
                            <Col xl={{span: 6}}>
                                <InputWrapper label="Автор">
                                    <Input theme="blocks" type="text" placeholder="Иванушка" />
                                </InputWrapper>
                            </Col>
                        </Row>
                    </div>
                </div>
                <Row gutter={[0, 0]}>
                    <Col xl={{span: 8}}>
                        <div className={s.profile_block_left}>
                            <div>
                                <Row gutter={[12, 12]}>
                                    <Col xl={{span: 19}}>
                                        <InputWrapper label="Ваша почта">
                                            <Input theme="dark" type="text" placeholder="ivan@example.com" />
                                        </InputWrapper>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col xl={{span: 16}}>
                        <div className={s.profile_block_transparent}>
                            <div className={s.profile_block_inside2}>
                                <div>
                                    <span>Пароль</span>
                                    <Button>Изменить</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            {/**/}
            {/*<div className={s.profile_block}>*/}
            {/*    <div className={s.profile_up}></div>*/}
            {/*    <div className={s.profile_left}></div>*/}
            {/*    <div className={s.profile_right}></div>*/}
            {/*    <div className={s.profile_down}></div>*/}
            {/*    <Row gutter={[0, 0]}>*/}
            {/*        <Col xl={{span: 8}}>*/}
            {/*            <div className={s.profile_block_transparent}>*/}
            {/*                <div className={s.profile_block_inside}>*/}
            {/*                    <div>*/}
            {/*                        123*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </Col>*/}
            {/*        <Col xl={{span: 16}}>*/}
            {/*            <div className={s.profile_block_right}></div>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*    <div className={s.profile_block_bottom}>*/}
            {/*        <div>*/}
            {/*            123*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="button_center">
                <Button type='page' size='xl' paddingX='80px' callback={() => 0}>Сохранить изменения</Button>
            </div>
        </>
    );
};

export default EditProfile;