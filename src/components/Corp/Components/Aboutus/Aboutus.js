import React, {Component} from 'react';
import './Aboutus.css';
import chef_company from '../../../../images/chef_company.jpg';

class Aboutus extends Component {
    
    componentDidUpdate() {
    }

    render() {
        return (
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
        )
    }
}

export default Aboutus;