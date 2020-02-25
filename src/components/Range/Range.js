import React, {Component} from 'react';
import './Range.css';

class Range extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        <div className="title">
          <h3>{this.props.subMenuId} 전기레인지</h3>
        </div>
      </div>
    )
  }
}

export default Range;