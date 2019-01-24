import React, {Component} from 'react';
import { Main } from '../../components';
import { CorpInfo } from '../../components';
import { RangeInfo } from '../../components';
import { ContactInfo } from '../../components';

class Container extends Component {
    
  render() {
      if(this.props.menuId==='main') return <Main/>;
      if(this.props.menuId==='corpInfo') return <div className="container"><CorpInfo/></div>;
      if(this.props.menuId==='rangeInfo') return <div className="container"><RangeInfo/></div>;
      if(this.props.menuId==='contactInfo') return <div className="container"><ContactInfo/></div>;
      return (
          <div className='Test'>
              <h1></h1>
              <p>
                  
              </p>
          </div>
      );
  }
}

export default Container;