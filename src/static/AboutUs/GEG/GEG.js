import React from 'react';
import PageTemplate from '../../PageTemplate/PageTemplate';
import classes from './GEG.css';

const GEG = (props) => (
  <PageTemplate background name="Good Education Group">
    <div className={classes.GEG}>
      <p>Good Education Group (GEG) is an Australian-based private company. The mission of GEG is to be the leading independent provider of high-quality resources that empower generations of students to achieve their goals.

        GEG does this by providing accessible and innovative information and analysis that:</p>
      <ul>
        <li>enables students, families and other key influencers to guide and make informed decisions about education and career pathways</li>
        <li>allows education providers, regulators, policy makers and other organisations to better assess and tailor their offerings and related services to the needs of students and interested parties.</li>   
      </ul>
      <p>They are passionate education experts and look forward to working with you to achieve this mission.</p>
      <h4>Products：</h4>
      <ul>
        <li>360° Virtual</li>
        <li>Australian Course Information Register</li>
        <li>The Good Universities Guide</li>
        <li>The Good Careers Guide</li>
        <li>Studies in Australia</li>
        <li>The Good Schools Guide</li>
        <li>The Good MBA Guide</li>
        <li>Australian Careers Service</li>
      </ul>
    </div>
  </PageTemplate>
)

export default GEG;
