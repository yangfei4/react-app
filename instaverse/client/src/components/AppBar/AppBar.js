import React from 'react';
import { Link } from "react-router-dom";
import { Layout, Image, Typography, Avatar, Button } from "antd";
import Logo from "../../images/Instaverse.png";
import style from "./style";

const { Title } = Typography;
const { Header } = Layout;

export default function AppBar() {
    const user = null;

  return (
    <Header style={style.header}>
        <Link to="/" >
            <div style={style.homeLink}>
                <Image style={style.image} width={45} preview={false} src={Logo} />
                &nbsp;
                <Title style={style.title}>Instaverse</Title>
            </div>
        </Link>
        {!user ? (
            <Link to="/authform">
                <Button htmlType="button" style={style.login}>
                    Log In
                </Button>
            </Link>
        ) : (
            <div style={style.userInfo}>
                <Avatar style={style.avatar} alt="username" size="large">
                    Y
                </Avatar>
                <Title style={style.title} level={4}>
                    Yangfei4
                </Title>
                <Button htmlType='button'>
                    Log Out
                </Button>
            </div>
        )
        }
    </Header>
  )
}
