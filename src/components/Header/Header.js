import React, {Component} from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = ({onClick, corpCls, rangeCls, contactCls, downMenuCls, handlerOver, handlerOut}) => (
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
        <div id="navbar" className="navbar-collapse collapse" onMouseOver={() =>{ handlerOver('down-menu down-menu-show');}} onMouseOut={() => { handlerOut('down-menu'); }}>
            <ul className="nav navbar-nav">
                <li className={corpCls}><a href="#" onClick={() => onClick('corpInfo','aboutUs')}>회사소개</a></li>
                <li className={rangeCls}><a href="#" onClick={() => onClick('rangeInfo','HTS805')}>전기레인지</a></li>
                <li className={contactCls}><a href="#contact" onClick={() => onClick('contactInfo')}>고객지원</a></li>
                <div className={downMenuCls}>
                    <div className="container">
                        <ul>
                            <li><a href="#"  onClick={() => onClick('contactInfo','built')}>설치사례</a></li>
                            <li><a href="#"  onClick={() => onClick('contactInfo','faq')}>자주 묻는 질문</a></li>
                            <li><a href="#"  onClick={() => onClick('contactInfo','service')}>이용안내</a></li>
                            <li><a href="#"  onClick={() => onClick('contactInfo','customer')}>고객의 소리</a></li>
                        </ul>
                        <ul>
                            <li>3구 전기레인지</li>
                            <li className="submenu"><a href="#"  onClick={() => onClick('rangeInfo','HTS805')}>HTS805</a></li>
                            <li className="submenu"><a href="#"  onClick={() => onClick('rangeInfo','HTS804')}>HTS804</a></li>
                            <li className="submenu"><a href="#"  onClick={() => onClick('rangeInfo','HTS803')}>HTS803</a></li>
                            <li>2구 전기레인지</li>
                            <li className="submenu"><a href="#"  onClick={() => onClick('rangeInfo','HTS802')}>HTS802</a></li>
                            <li>1구 전기레인지</li>
                            <li className="submenu"><a href="#"  onClick={() => onClick('rangeInfo','HTS801')}>HTS801</a></li>
                        </ul>
                        <ul>
                            <li><a href="#"  onClick={() => onClick('corpInfo','aboutUs')}>회사소개</a></li>
                            <li><a href="#"  onClick={() => onClick('corpInfo','ceoMsg')}>대표인사말</a></li>
                            <li><a href="#"  onClick={() => onClick('corpInfo','location')}>찾아오시는 길</a></li>
                        </ul>
                    </div>
                </div>
            </ul>
            <ul className="nav navbar-nav navbar-right">
            </ul>
        </div>
    </div>
    </nav>
    
)
export default Header;