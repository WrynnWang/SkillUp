import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import classes from './PageTemplate.css';
import {Layout} from 'antd';

const {Content} = Layout ;

const pageTemplate = (props) => {

    let background = null;
    if(props.background){
        background = <div className={classes.Container}>
            <img src={props.imageSrc} alt="Nothing" />
            <h1>{props.name}</h1>
        </div>
    }

    return(
        <Layout>
            <Content>
                {background}
                {props.children}
            </Content>
            <Footer />
        </Layout>
   )
}

export default pageTemplate;