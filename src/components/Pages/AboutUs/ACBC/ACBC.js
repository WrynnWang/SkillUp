import React from 'react';
import PageTemplate from '../../../PageTemplate/PageTemplate';
import classes from './ACBC.css';
import test from '../../../../assets/test.jpg';
const ACBC = (props) => (
  <PageTemplate background imageSrc={test} name="Australia China Business Council">
    <div className={classes.ACBC}>
      <p>The Australia China Business Council (ACBC) is a membership-based, non-profit, non-governmental organisation comprised of National Office, eight Branches, and more than 1500 representatives from over 900 Australian companies who do business with China.

        Founded in 1973, ACBC actively promotes two-way trade and investment, and economic cooperation and understanding, between the business communities of Australia and China.

        ACBC plays an influential role as an advisor to the Australian Government on commercial relations with China. The ACBC strongly advocated for the comprehensive China-Australia Free Trade Agreement which fosters more competitive business in both nations.

        With a National Office plus offices in every State and Territory, the ACBC provides regular business-focused activities for our members. We also sponsor a series of national events each year which include a day of networking in Canberra to meet with Australian Government Ministers and senior officials, and the annual China Oration given by an outstanding Australian or international China expert.

        The Australia China Business Council has close links with expatriate groups in China, as well as with Chinese groups and officials, and leads trade missions to China from time to time.
      </p>
      <h4>THE MAIN OBJECTIVES OF ACBC ARE TO:</h4>
      <ul>
        <li>Provide information programs and opportunities for the Australian business community to network on China business activities with their peers;</li>
        <li>Host events with senior contacts within the Australian and Chinese Governments;</li>
        <li>Represent members’ views to Australian and Chinese policy makers and act as a conduit between governments and the Australian business community;</li>
        <li>Support the promotion of Australia’s commercial interests in China; and</li>
        <li>Develop and maintain a high level of support for the Council’s activities from the Australian and Chinese governments and collaborate in relevant government-initiated programs.</li>
      </ul>
    </div>

  </PageTemplate>
)

export default ACBC;
