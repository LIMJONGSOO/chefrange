import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className="Footer">
        <div className="container">
            <div className="leftAlign">
                <ul className="info">
                    <li>HomeTechSystem</li>
                    <li><span>대표이사 :</span>임만규</li>
                </ul>
                <ul className="info">
                    <li>서울특별시 양천구 가로공원로55길 14</li>
                    <li><span>TEL </span>02) 2065-0583</li>
                </ul>
                <ul className="info">
                    <li><span>FAX </span>02) 2065-0584</li>
                    <li><span>E-mail</span> lim6950@naver.com</li>
                </ul>
                <ul className="info">
                    <li>사업자 등록번호</li>
                </ul>
                <ul className="copyright">
                    <li>Copyright © 2018 ChefRange</li>
                    <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>
            <div  className="rightAlign">
                <h3>고객센터 <strong>02-2065-0583</strong></h3>
                <ul className="info">
                    <li>평일 9:00-18:00</li>
                    <li>주말.공휴일 제외</li>
                </ul>
                <ul className="info">
                    <li>점심시간 12:00-13:00</li>
                </ul>
            </div>
        </div>
    </footer>
)

export default Footer;