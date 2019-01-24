import React, {Component} from 'react';
import './CorpInfo.css';
import chef_company from '../../images/chef_company.jpg';

const CorpInfo = ({onClick}) => (
  <div>
    <div className="title">
      <h3>회사소개</h3>
    </div>
    <div className="title_link">
      <ul>
        <li><a href="/layout/jmh/aboutus/company_main.html?cate_no=32"><strong>•회사소개</strong></a></li>            
        <li><a href="/layout/jmh/aboutus/ceomassage.html">•CEO MASSAGE</a></li>            
        <li><a href="/layout/jmh/aboutus/ourlocation.html">•찾아오시는 길</a></li>
      </ul>
    </div>
    <div className="companyInfo">
        <div className="inner">
            <div>
                <div><img src={chef_company} alt="회사소개 이미지"></img></div>
            </div>
            <div className="center">
                <div className="center_title">
                  <h3>Chef 전기레인지</h3>
                </div>            
                <div className="center_desc">
                    Chef 전기레인지는 일본 NEG의 세라믹 글라스와 영국의 세라마 스피드 하이라이트 발열체를 사용하여 최상의 품질을 보장합니다. <br></br>
                </div>
            </div>
        </div>   
    </div>
  </div>
)

export default CorpInfo;