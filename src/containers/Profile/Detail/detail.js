import React, {Component} from 'react'
import style from './detail.css';
import InfoCard from './InfoCard/InfoCard';
import Scoin from './Scoin/scoin';

class Detail extends Component{
    state = {
        membership: 'gold',
        name: 'Zikai Zhao',
        position: 'Casual Software Developer Tuftec Solutions',
        email: 'lionelcdqz@gmail.com',
        coin: '55'
    }
    render(){

        const memstyle = [style.detail];
        switch (this.state.membership){
            case ('gold'):
                memstyle.push(style.gold);
                break;
            case ('silver'):
                memstyle.push(style.silver);
                break;
            case ('bronze'):
                memstyle.push(style.bronze);
                break;
        }


        return (
            <div className={memstyle.join(' ')}>
                <InfoCard 
                    name={this.state.name}
                    position={this.state.position}
                    email={this.state.email}
                />
                <Scoin coin={this.state.coin}/>
            </div>
      )
    }
}

export default Detail
