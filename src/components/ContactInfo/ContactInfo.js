
import React, {Component} from 'react';
import './ContactInfo.css';
import { ContactInfoContainer } from '../../components';

class ContactInfo extends Component {

  constructor(props) {
    super();
    // initializes component state
    this.state = {
        submenuId: 'built',
        builtCls: 'bold',
        faqCls: '',
        serviceCls: '',
        customerCls: ''
    };
  }


  handleSubMenuClick = (submenuId) => {
    let builtCls, faqCls, serviceCls, customerCls;
    if(submenuId==='built'){
      builtCls = 'bold';
      faqCls = '';
      serviceCls = '';
      customerCls = '';
    }else if(submenuId==='faq'){
      builtCls = '';
      faqCls = 'bold';
      serviceCls = '';
      customerCls = '';
    }else if(submenuId==='service'){
      builtCls = '';
      faqCls = '';
      serviceCls = 'bold';
      customerCls = '';
    }else{
      builtCls = '';
      faqCls = '';
      serviceCls = '';
      customerCls = 'bold';
    }

    this.setState({
      submenuId,
      builtCls,
      faqCls,
      serviceCls,
      customerCls
    });
  }

  render() {
    const {submenuId, builtCls, faqCls, serviceCls, customerCls} = this.state;

    return (
      <div className="container">
        <div className="title">
          <h3>고객지원</h3>
        </div>
        <div className="title_link">
          <ul>
            <li className={builtCls}><a href="#" onClick={() => this.handleSubMenuClick('built')}>•설치사례</a></li>            
            <li className={faqCls}><a href="#" onClick={() => this.handleSubMenuClick('faq')}>•자주 묻는 질문</a></li>            
            <li className={serviceCls}><a href="#" onClick={() => this.handleSubMenuClick('service')}>•서비스 접수 및 이용안내</a></li>
            <li className={customerCls}><a href="#" onClick={() => this.handleSubMenuClick('customer')}>•고객의 소리</a></li>
          </ul>
        </div>
        <ContactInfoContainer
          submenuId={submenuId}
        />
      </div>
    )
  }
}

export default ContactInfo;