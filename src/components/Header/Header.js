import React, {Component} from 'react';
import './Header.css';
import logo from '../../images/logo.JPG';

const Header = ({onClick, corpCls, rangeCls, contactCls}) => (
    <nav className="navbar navbar-default navbar-static-top">
    <div className="container">
        <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#" onClick={() => onClick('main')}>
            <img src={logo } alt="Chefrange"></img>
        </a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
            <li className={corpCls}><a href="#" onClick={() => onClick('corpInfo')}>회사소개</a></li>
            <li className={rangeCls}>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="true">전기레인지 <span class="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                    <li className="dropdown-header">3구 전기레인지</li>
                    <li><a href="#"  onClick={() => onClick('rangeInfo')}>Action</a></li>
                    <li><a href="#"  onClick={() => onClick('rangeInfo')}>Another action</a></li>
                    <li><a href="#"  onClick={() => onClick('rangeInfo')}>Something else here</a></li>
                    <li className="divider"></li>
                    <li className="dropdown-header">2구 전기레인지</li>
                    <li><a href="#"  onClick={() => onClick('rangeInfo')}>Action</a></li>
                    <li className="divider"></li>
                    <li className="dropdown-header">1구 전기레인지</li>
                    <li><a href="#"  onClick={() => onClick('rangeInfo')}>Action</a></li>
                </ul>
            </li>
            <li className={contactCls}><a href="#contact" onClick={() => onClick('contactInfo')}>고객지원</a></li>
            
        </ul>
        <ul className="nav navbar-nav navbar-right">
        </ul>
        </div>
    </div>
    </nav>
)
export default Header;