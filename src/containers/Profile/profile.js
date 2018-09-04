import React,{Component} from 'react';
import style from './profile.css';

import Dashboard from './DashBoard/dashboard';
import ProfExp from './Profexp/profexp';

import Detail from './Detail/detail';
import {Affix, Tabs,Icon, BackTop} from 'antd';

class Profile extends Component{

    render(){

        const TabPane = Tabs.TabPane

        return(
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
        )
    }
}

export default Profile;
