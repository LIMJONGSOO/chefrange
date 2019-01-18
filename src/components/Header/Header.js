import React, {Component} from 'react';
import './Header.css';
import logo from '../../images/logo.JPG';

class Header extends Component {

  constructor(props) {
    super();
    // initializes component state
    this.state = {
        menuId: 2
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
      alert(menuId);
  }

  render() {
    const {menuId} = this.state;

    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
                <img src={logo } alt="Chefrange"></img>
            </a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#" onClick={() => this.handleMenuClick('corpInfo')}>회사소개</a></li>
              <li><a href="#about" onClick={() => this.handleMenuClick('rangeInfo')}>전기레인지</a></li>
              <li><a href="#contact" onClick={() => this.handleMenuClick('contactInfo')}>고객지원</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;