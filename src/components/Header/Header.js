import React, {Component} from 'react';
import './Header.css';
import logo from '../../images/logo.png';

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
        <a className="navbar-brand margin10" href="#" onClick={() => onClick('main')}>
            <img className="logo" src={logo } alt="Chefrange"></img>
        </a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
            <li className={corpCls}><a href="#" onClick={() => onClick('corpInfo')}>회사소개</a></li>
            <li className={rangeCls}>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="true">전기레인지 <span class="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                    <li className="dropdown-header">3구 전기레인지</li>
                    <li><a href="#"  onClick={() => onClick('rangeInfo','HTS805')}>HTS805</a></li>
                    <li><a href="#"  onClick={() => onClick('rangeInfo','HTS804')}>HTS804</a></li>
                    <li><a href="#"  onClick={() => onClick('rangeInfo','HTS803')}>HTS803</a></li>
                    <li className="divider"></li>
                    <li className="dropdown-header">2구 전기레인지</li>
                    <li><a href="#"  onClick={() => onClick('rangeInfo','HTS802')}>HTS802</a></li>
                    <li className="divider"></li>
                    <li className="dropdown-header">1구 전기레인지</li>
                    <li><a href="#"  onClick={() => onClick('rangeInfo','HTS801')}>HTS801</a></li>
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