import React, {Component} from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super();
      // initializes component state
      this.state = {
          downMenuCls : 'down-menu'
      };
    }
  
    componentDidMount() {
        
    }

    handleMenuClick = () => {
        this.setState({
            downMenuCls: 'down-menu'
        });
    }
  
    handlerOver = (downMenuCls) => {
      this.setState({
          downMenuCls: downMenuCls
      });
    }
  
    handlerOut = (downMenuCls) => {
      this.setState({
          downMenuCls: downMenuCls
      });
    }
  
    render() {
      const { downMenuCls} = this.state;
  
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
                    <Link to="/chefrange" onClick={() => this.handleMenuClick()} className="navbar-brand margin10">
                        <img className="logo" src={logo } alt="Chefrange"></img>
                    </Link>
                </div>
                <div id="navbar" className="navbar-collapse collapse" onMouseOver={() =>{ this.handlerOver('down-menu down-menu-show');}} onMouseOut={() => { this.handlerOut('down-menu'); }}>
                    <ul className="nav navbar-nav">
                        <li><Link to="/chefrange/corp/about" onClick={() => this.handleMenuClick()}>회사소개</Link></li>
                        <li><Link to="/chefrange/range/HTS801" onClick={() => this.handleMenuClick()}>전기레인지</Link></li>
                        <li><Link to="/chefrange/contact/built" onClick={() => this.handleMenuClick()}>고객지원</Link></li>
                        <div className={downMenuCls}>
                            <div className="container">
                                <div className="down-menu-list">
                                    <ul className="down-menu-ul">
                                        <li><Link to="/chefrange/corp/about" onClick={() => this.handleMenuClick()}>회사소개</Link></li>
                                        <li><Link to="/chefrange/corp/ceomsg" onClick={() => this.handleMenuClick()}>대표인사말</Link></li>
                                        <li><Link to="/chefrange/corp/location" onClick={() => this.handleMenuClick()}>찾아오시는 길</Link></li>
                                    </ul>
                                    <ul className="down-menu-ul">
                                        <li>3구 전기레인지</li>
                                        <li className="submenu"><Link to="/chefrange/range/HTS805" onClick={() => this.handleMenuClick()}>HTS805</Link></li>
                                        <li className="submenu"><Link to="/chefrange/range/HTS804" onClick={() => this.handleMenuClick()}>HTS804</Link></li>
                                        <li className="submenu"><Link to="/chefrange/range/HTS803" onClick={() => this.handleMenuClick()}>HTS803</Link></li>
                                        <li>2구 전기레인지</li>
                                        <li className="submenu"><Link to="/chefrange/range/HTS802" onClick={() => this.handleMenuClick()}>HTS802</Link></li>
                                        <li>1구 전기레인지</li>
                                        <li className="submenu"><Link to="/chefrange/range/HTS801" onClick={() => this.handleMenuClick()}>HTS801</Link></li>
                                    </ul>
                                    <ul className="down-menu-ul">
                                        <li><Link to="/chefrange/contact/built" onClick={() => this.handleMenuClick()}>설치사례</Link></li>
                                        <li><Link to="/chefrange/contact/faq" onClick={() => this.handleMenuClick()}>자주 묻는 질문</Link></li>
                                        <li><Link to="/chefrange/contact/service" onClick={() => this.handleMenuClick()}>이용안내</Link></li>
                                        <li><Link to="/chefrange/contact/customer" onClick={() => this.handleMenuClick()}>고객의 소리</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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