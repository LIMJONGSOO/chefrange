import React, {Component} from 'react';
import { Main } from '../../components';
import { CorpInfo } from '../../components';
import { RangeInfo } from '../../components';
import { ContactInfo } from '../../components';
import './Container.css';

class Container extends Component {
    
  render() {
      if(this.props.menuId==='corpInfo') return <div className="container main"><CorpInfo onClick={this.props.onClick} subMenuId={this.props.subMenuId}/></div>;
      if(this.props.menuId==='rangeInfo') return <div className="container main"><RangeInfo onClick={this.props.onClick} subMenuId={this.props.subMenuId}/></div>;
      if(this.props.menuId==='contactInfo') return <div className="container main"><ContactInfo onClick={this.props.onClick} subMenuId={this.props.subMenuId}/></div>;
      return (
        <Main onClick={this.props.onClick}/>
      );
  }
}

export default Container;