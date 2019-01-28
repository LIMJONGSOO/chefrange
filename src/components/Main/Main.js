import React, {Component} from 'react';
import './Main.css';
import ChefMain from '../../images/chef-img01.jpg';
import imgFind from '../../images/icon-find.png';
import imgQuestion from '../../images/icon-question.png';
import imgService from '../../images/icon-service.png';
import imgCustomer from '../../images/icon-customer.png';

const Main = ({onClick}) => (
  <div>
    <div className="container">
    <img className="backgroundImg" src={ChefMain} alt=""></img>
      <div className="info">
        <div className="info-row">
          <div className="info-item">
            <a href="/Built">
              <div className="desc">
                <h4>설치 사례</h4>
                <p>
                  고객님 가정에 맞는 설치 형태를<br></br>
                  미리 확인해보세요
                </p>
              </div>
              <div className="icon">
                <img src={imgFind} alt=""></img>
              </div>
            </a>
          </div>
          <div className="info-item bg-blue">
            <a href="/Faq" className="gray">
              <div className="desc">
                <h4>자주 묻는 질문</h4>
                <p>
                  FAQ를 통해 궁금하신 사항을<br></br>
                  빠르게 해결하실 수 있습니다
                </p>
              </div>
              <div className="icon">
                <img src={imgQuestion} alt=""></img>
              </div>
            </a>
          </div>
          <div className="info-item">
            <a href="/Service">
              <div className="desc">
                <h4>서비스 접수 및 이용안내</h4>
                <p>
                  고객님의 요청사항을<br></br>
                  최대한 신속하게 처리해드립니다
                </p>
              </div>
              <div className="icon">
                <img src={imgService} alt=""></img>
              </div>
            </a>
          </div>
          <div className="info-item bg-blue">
            <a href="/Customer" className="gray">
              <div className="desc">
                <h4>고객의 소리</h4>
                <p>
                  Chef은 고객님의 소리에<br></br>
                  항상 귀를 기울이고 있습니다
                </p>
              </div>
              <div className="icon">
                <img src={imgCustomer} alt=""></img>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Main;