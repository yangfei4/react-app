import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import StoryList from "../StoryList";
import StoryForm from '../StoryForm';

import {getStories} from "../../actions/stories";

import style from "./style";

import { Layout } from 'antd';
const { Sider, Content } = Layout;

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStories());
    }, [dispatch]);

    return (
        <Layout>
            <Sider width={400} style={style.sider}>
                <StoryForm />
            </Sider>
            <Content style={style.content}>
                <StoryList />
            </Content>
        </Layout>
    )
};

export default Home;