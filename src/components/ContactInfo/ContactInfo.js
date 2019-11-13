
import React, {Component} from 'react';
import './ContactInfo.css';
import { ContactInfoContainer } from '../../components';

class ContactInfo extends Component {
  render() {
    let builtCls ='', 
        faqCls = '', 
        serviceCls = '',
        customerCls = '';
    
    if(this.props.subMenuId==='built'){
      builtCls = 'bold';
    }else if(this.props.subMenuId==='faq'){
      faqCls = 'bold';
    }else if(this.props.subMenuId==='service'){
      serviceCls = 'bold';
    }else{
      customerCls = 'bold';
    }
    return (
      <div>
        <div className="title_link">
          <ul>
            <li className={builtCls}><a href="#" onClick={() => this.props.onClick('contactInfo','built')}>•설치사례</a></li>            
            <li className={faqCls}><a href="#" onClick={() => this.props.onClick('contactInfo','faq')}>•자주 묻는 질문</a></li>            
            <li className={serviceCls}><a href="#" onClick={() => this.props.onClick('contactInfo','service')}>•서비스 접수 및 이용안내</a></li>
            <li className={customerCls}><a href="#" onClick={() => this.props.onClick('contactInfo','customer')}>•고객의 소리</a></li>
          </ul>
        </div>
        <ContactInfoContainer
          submenuId={this.props.subMenuId}
        />
      </div>
    )
  }
}

export default ContactInfo;