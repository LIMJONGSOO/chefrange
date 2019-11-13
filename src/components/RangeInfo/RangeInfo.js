import React, {Component} from 'react';
import './RangeInfo.css';
import { RangeInfoContainer } from '../../components';

class RangeInfo extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <h3>{this.props.subMenuId} 전기레인지</h3>
        </div>
        <RangeInfoContainer
          subMenuId={this.props.subMenuId}
        />
      </div>
    )
  }
}

export default RangeInfo;