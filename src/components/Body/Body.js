import React, {Component} from 'react';
import './Body.css';
import { Header } from '../../components';
import { Container } from '../../components';

class Body extends Component {

  constructor(props) {
    super();
    // initializes component state
    this.state = {
        menuId: 'main',
        corpCls: '',
        rangeCls: '',
        contactCls: ''
    };
  }

  componentDidMount() {
      this.fetchPostInfo(2);
  }

  showWarning = () => {
      this.setState({
          warningVisibility: true
      });

      // after 1.5 sec

      setTimeout(
          () => {
              this.setState({
                  warningVisibility: false
              });
          }, 1500
      );
  }


  fetchPostInfo = async (postId) => {
      this.setState({
          fetching: true // requesting..
      });

      try {
          // wait for two promises
          const info = await Promise.all([

          ]);

          // Object destructuring Syntax,
          // takes out required values and create references to them
          const {title, body} = info[0].data; 
                                              
          const comments = info[1].data;

          this.setState({
              postId,
              post: {
                  title, 
                  body
              },
              comments,
              fetching: false // done!
          });

      } catch(e) {
          // if err, stop at this point
          this.setState({
              fetching: false
          });
          this.showWarning();
      }
  }


  handleMenuClick = (menuId) => {
    let corpCls, rangeCls, contactCls ;

    if(menuId==='corpInfo'){
        corpCls = 'active';
        rangeCls = '';
        contactCls = '';
    }else if(menuId==='rangeInfo'){
        corpCls = '';
        rangeCls = 'active';
        contactCls = '';
    }else if(menuId==='contactInfo'){
        corpCls = '';
        rangeCls = '';
        contactCls = 'active';
    }else{
        corpCls = '';
        rangeCls = '';
        contactCls = '';
    }

    this.setState({
        menuId,
        corpCls,
        rangeCls,
        contactCls
    });
  }

  render() {
    const {menuId,corpCls, rangeCls, contactCls} = this.state;

    return (
      <div>
        <Header 
          onClick={this.handleMenuClick}
          menuId={menuId}
          corpCls={corpCls}
          rangeCls={rangeCls}
          contactCls={contactCls}
        />
        <Container 
          menuId={menuId}
        />
      </div>
    )
  }
}

export default Body;