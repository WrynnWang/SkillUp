import React from 'react';
import PageTemplate from '../../../PageTemplate/PageTemplate';
import classes from './VSG.css';
import test from '../../../../assets/test.jpg';
const VSG = (props) => {

  return (
    <PageTemplate background imageSrc={test} name="Victor Smorgon Group">
      <div className={classes.VSG}>
        <p>VSG The Victor Smorgon Group (VSG) is one of Australia’s wealthiest and most successful family offices, with investments across nearly all sectors. They have successfully grown from a one-beef store into a sprawling investment conglomerate, and now are offering the opportunity for students in the program to get an insight in how the family operates and grows it’s wealth through the generations.
        
        The group remains private in operation, but through this program you will get exclusive access to some amazing events and internship opportunities to develop your career in Australia and beyond!
        
        Property is a significant part of the VSG group, and VSG acts as both developer and investor in projects. There will be opportunities to get internships in the property businesses, learn how to be a property investor, get priority access to property projects and co-invest alongside the Victor Smorgon Group.
        </p>

        <h4>
          PERFECTION FRESH:
        </h4>
        <ul>
          <li>Australia’s premier fruit and vegetable manager and owner. Second largest producer of mangos, grapes and tomatoes in Australia, while also producing many other forms of produce</li>
          <li>Opportunity to visit the farms, meet the high level team, understand the business and be part of the journey.</li>
          <li>Exclusive VIP events include trips to the tomato farms, mango farms and learn more about the workings of the business</li>
        </ul>
        <h4>
          GENERAL PANTS:
        </h4>
        <ul>
          <li>Australia’s premier youth fashion brand.</li>
          <li>Opportunity to attend exclusive events, understand how business works in Australia from meeting the management team and be part of select internships and events for the brand.</li>
          <li>Prizes and giveaways from General Pants team – clothing, accessories etc.. more to come!</li>
        </ul>
        <h4>
        TONY’S TUNA
        </h4>
        <ul>
          <li>Australia’s leading blue – fin tuna producer and manufacturer, selling to the high – end Japanese sashimi market</li>
          <li>Opportunities to attend exclusive industry events, take a trip to view the factory and learn about the business. Internships too.</li>
        </ul>
      </div>
    </PageTemplate>
  )
}


export default VSG;
