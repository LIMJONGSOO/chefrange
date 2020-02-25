import React, {Component} from 'react';
import './Corp.css';
import { NavLink } from 'react-router-dom';

class Corp extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {

    return (
      <div className="title_link">
        <ul>
          <li><NavLink to="/corp/about" activeClassName="bold">회사소개</NavLink></li>            
          <li><NavLink to="/corp/ceomsg" activeClassName="bold">CEO MASSAGE</NavLink></li>            
          <li><NavLink to="/corp/location" activeClassName="bold">찾아오시는 길</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default Corp;