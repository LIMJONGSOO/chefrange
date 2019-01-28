import React, {Component} from 'react';
import './CorpInfo.css';
import { CorpInfoContainer } from '../../components';

class CorpInfo extends Component {

  constructor(props) {
    super();
    // initializes component state
    this.state = {
        submenuId: 'aboutUs',
        aboutUsCls: 'bold',
        ceoMsgCls: '',
        locationCls: ''
    };
  }


  handleSubMenuClick = (submenuId) => {
    let aboutUsCls, ceoMsgCls, locationCls;
    if(submenuId==='aboutUs'){
      aboutUsCls = 'bold';
      ceoMsgCls = '';
      locationCls = '';
    }else if(submenuId==='ceoMsg'){
      aboutUsCls = '';
      ceoMsgCls = 'bold';
      locationCls = '';
    }else{
      aboutUsCls = '';
      ceoMsgCls = '';
      locationCls = 'bold';
    }

    this.setState({
      submenuId,
      aboutUsCls,
      ceoMsgCls,
      locationCls,
    });
  }

  render() {
    const {submenuId, aboutUsCls, ceoMsgCls, locationCls} = this.state;

    return (
      <div className="container">
        <div className="title">
          <h3>회사소개</h3>
        </div>
        <div className="title_link">
          <ul>
            <li className={aboutUsCls}><a href="#" onClick={() => this.handleSubMenuClick('aboutUs')}>•회사소개</a></li>            
            <li className={ceoMsgCls}><a href="#" onClick={() => this.handleSubMenuClick('ceoMsg')}>•CEO MASSAGE</a></li>            
            <li className={locationCls}><a href="#" onClick={() => this.handleSubMenuClick('location')}>•찾아오시는 길</a></li>
          </ul>
        </div>
        <CorpInfoContainer
          submenuId={submenuId}
        />
      </div>
    )
  }
}

export default CorpInfo;