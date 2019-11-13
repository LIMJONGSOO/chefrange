import React, {Component} from 'react';
import './CorpInfo.css';
import { CorpInfoContainer } from '../../components';

class CorpInfo extends Component {
  render() {
    let aboutUsCls = '';
    let ceoMsgCls = '';
    let locationCls = '';

    if(this.props.subMenuId==='aboutUs'){
      aboutUsCls = 'bold';
    }else if(this.props.subMenuId==='ceoMsg'){
      ceoMsgCls = 'bold';
    }else{
      locationCls = 'bold';
    }

    return (
      <div>
        <div className="title_link">
          <ul>
            <li className={aboutUsCls}><a href="#" onClick={() => this.props.onClick('corpInfo','aboutUs')}>회사소개</a></li>            
            <li className={ceoMsgCls}><a href="#" onClick={() => this.props.onClick('corpInfo','ceoMsg')}>CEO MASSAGE</a></li>            
            <li className={locationCls}><a href="#" onClick={() => this.props.onClick('corpInfo','location')}>찾아오시는 길</a></li>
          </ul>
        </div>
        <CorpInfoContainer
          submenuId={this.props.subMenuId}
        />
      </div>
    )
  }
}

export default CorpInfo;