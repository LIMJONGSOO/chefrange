import React, {Component} from 'react';
import './RangeInfo.css';
import { RangeInfoContainer } from '../../components';

class RangeInfo extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <h3>{this.props.rangeName} 전기레인지</h3>
        </div>
        <RangeInfoContainer
          rangeName={this.props.rangeName}
        />
      </div>
    )
  }
}

export default RangeInfo;