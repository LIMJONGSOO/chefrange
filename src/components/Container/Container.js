import React, {Component} from 'react';
import { Main } from '../../components';
import { CorpInfo } from '../../components';
import { RangeInfo } from '../../components';
import { ContactInfo } from '../../components';

class Container extends Component {
    
  render() {
      if(this.props.menuId==='corpInfo') return <CorpInfo onClick={this.props.onClick} subMenuId={this.props.subMenuId}/>;
      if(this.props.menuId==='rangeInfo') return <RangeInfo onClick={this.props.onClick} subMenuId={this.props.subMenuId}/>;
      if(this.props.menuId==='contactInfo') return <ContactInfo onClick={this.props.onClick} subMenuId={this.props.subMenuId}/>;
      return (
        <Main onClick={this.props.onClick}/>
      );
  }
}

export default Container;