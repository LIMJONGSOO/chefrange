import React, {Component} from 'react';
import './RangeInfoContainer.css';
import HTS801 from '../../../images/HTS801.jpg';

class RangeInfoContainer extends Component {
    render() {
        let imgRange;

        if(this.props.subMenuId==='HTS801'){
            imgRange = HTS801;
        }

        return (
            <div className="rangeInfo">
                <div className="inner">
                    <div>
                        <div><img src={imgRange} alt={this.props.subMenuId}></img></div>
                    </div>
                </div>   
            </div>
        );
    }
  }

export default RangeInfoContainer;