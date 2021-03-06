import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className="Footer">
        <div className="container">
            <div className="leftAlign">
                <ul className="info">
                    <li>상호 : HomeTechSystem</li>
                    <li>대표이사 : 임만규</li>
                </ul>
                <ul className="info">
                    <li>주소 : 서울특별시 양천구 가로공원로55길 14</li>
                    <li>TEL : 02) 2065-0583</li>
                </ul>
                <ul className="info">
                    <li>FAX : 02) 2065-0584</li>
                    <li>E-mail : lim6950@naver.com</li>
                </ul>
                <ul className="info">
                    <li>사업자 등록번호</li>
                </ul>
                <ul className="info">
                    <li>Copyright © 2018 ChefRange</li>
                </ul>
            </div>
            <div className="rightAlign">
                <a className="tel" href="tel:02-2065-0583">
                    <h3>고객센터 <strong>02-2065-0583</strong></h3>
                </a>
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