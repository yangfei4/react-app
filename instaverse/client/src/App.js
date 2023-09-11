import React from 'react';
import { Layout, Image, Typography } from "antd";
import Logo from "./images/Instaverse.png";
import Home from "./components/Home";

import style from "./style";

const { Title } = Typography;
const { Header, Footer } = Layout;

const App = () => {
    return (
        <Layout style={style.layout}>
            <Header style={style.header}>
                <Image style={style.image} width={45} preview={false} src={Logo} />
                &nbsp;
                <Title style={style.title}>Instaverse</Title>
            </Header>
            <Home />
            <Footer style={style.footer}>2023 Instaverse</Footer>
        </Layout>
    )
};

export default App;