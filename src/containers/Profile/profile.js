import React,{Component} from 'react';
import style from './profile.css';

import Dashboard from './DashBoard/dashboard';
import ProfExp from './Profexp/profexp';

import Detail from './Detail/detail';
import {Affix, Tabs,Icon, BackTop, Layout} from 'antd';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const {Content} = Layout;

class Profile extends Component{

    render(){

        const TabPane = Tabs.TabPane

        return(
            <Layout>
                <Header />
                <Content>
                    <div className={style.container}>
                        <BackTop />
                        <Affix style={{position: 'absolute', top: '80', left: '50'}}>
                            <Detail />
                        </Affix>
                        <div className={style.contentTabs}>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab={<span><Icon type="dashboard" />Dashboard</span>} key="1">
                                    <Dashboard />
                                </TabPane>
                                <TabPane tab={<span><Icon type="profile" />Experience</span>} key="2">
                                    <ProfExp /> 
                                </TabPane>
                                <TabPane tab={<span><Icon type="user" />My</span>} key="3">
                                    My Content
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </Content>
                <Footer />
            </Layout>
        )
    }
}

export default Profile;
