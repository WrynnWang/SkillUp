import React from 'react';
import Footer from '../../Footer/Footer';
import classes from './PageTemplate.css';
const pageTemplate = (props) => (
    <div className={classes.PageTemplate}>
        <div className={classes.Body}>
            <div className={classes.TopBackgournd}>
                <div className={classes.Text}>强无敌</div>
            </div>
            {props.children}
        </div>
        <footer>
            <Footer />
        </footer>
    </div>
)

export default pageTemplate;