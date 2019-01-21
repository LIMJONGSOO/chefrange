import React, {Component} from 'react';
import { Main } from '../../components';

class Container extends Component {
    
  render() {
      if(this.props.menuId==='main') return <Main/>;
      if(this.props.menuId==='corpInfo') return <div>corpInfo</div>;
      if(this.props.menuId==='rangeInfo') return <div>rangeInfo</div>;
      if(this.props.menuId==='contactInfo') return <div>contactInfo</div>;
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