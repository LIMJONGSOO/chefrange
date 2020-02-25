
import React, {Component} from 'react';
import './Contact.css';
import { NavLink } from 'react-router-dom';

class Contact extends Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        <div className="title_link">
          <ul>
            <li><NavLink to="/contact/built" activeClassName="bold">설치사례</NavLink></li>            
            <li><NavLink exact to="/contact/faq" activeClassName="bold">자주 묻는 질문</NavLink></li>            
            <li><NavLink exact to="/contact/service" activeClassName="bold">서비스 접수 및 이용안내</NavLink></li>
            <li><NavLink exact to="/contact/customer" activeClassName="bold">고객의 소리</NavLink></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Contact;