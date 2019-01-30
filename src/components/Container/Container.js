import React, {Component} from 'react';
import { Main } from '../../components';
import { CorpInfo } from '../../components';
import { RangeInfo } from '../../components';
import { ContactInfo } from '../../components';

class Container extends Component {
    
  render() {
      if(this.props.menuId==='corpInfo') return <CorpInfo/>;
      if(this.props.menuId==='rangeInfo') return <RangeInfo rangeName={this.props.rangeName}/>;
      if(this.props.menuId==='contactInfo') return <ContactInfo/>;
      return (
        <Main/>
      );
  }
}

export default Container;