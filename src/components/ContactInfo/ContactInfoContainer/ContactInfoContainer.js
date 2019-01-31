import React, {Component} from 'react';
import './ContactInfoContainer.css';
import chef_built from '../../../images/chef_built.jpg';
import expand from '../../../images/expand.png';

/*global daum*/
class ContactInfoContainer extends Component {
    
    componentDidUpdate() {

    }

    render() {
        if(this.props.submenuId==='built') return <Built/>;
        if(this.props.submenuId==='faq') return <Faq/>;
        if(this.props.submenuId==='service') return <Service/>;
        return <Customer/>;
    }
  }

const Built = ({onClick}) => (
    <div className="builtInfo">
        <div className="inner">
            <div>
                <div><img src={chef_built} alt="설치사례 이미지"></img></div>
            </div>
            <div className="center">
                <div className="center_title">
                    <h3>설치사례</h3>
                </div>            
                <div className="center_desc">
                    <div className="builtInfo">
                        <div className="builtInfo-item">
                            <h4>경기도 시흥시</h4><p>3구 전기레인지</p>
                        </div>
                        <div className="builtInfo-item">
                            <h4>경기도 시흥시</h4><p>2구 전기레인지</p>
                        </div>
                        <div className="builtInfo-item">
                            <h4>경기도 시흥시</h4><p>3구 전기레인지</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </div>
)

const Faq = ({onClick}) => (
    <div className="faqInfo">
        <div className="inner">
            <div className="center">
                <div className="center_title">
                    <h3>자주 묻는 질문</h3>
                </div>            
                <div className="center_desc">

                    <div className="panel-group">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <a data-toggle="collapse" href="#collapse1">
                                    <h4 className="panel-title">
                                        전기요금이 얼마나 나올까요?
                                    </h4>
                                </a>
                            </div>
                            <div id="collapse1" className="panel-collapse collapse">
                                <div className="panel-body">
                                    <h4>
                                        <b>
                                            답변)<br></br>
                                             Chef 원적외선 하이라트 전기레인지는  전기료 부담이 아주 적은 하이라이트 발열체를 사용하고 있습니다.
                                            또한, 불필요한 전기가 낭비되지 않도록 자동 절전 기능이 내장되어 있는 초절전 에너지 절약 조리기구입니다.
                                        </b>
                                    </h4>
                                    
                                    <table className="tableCls">
                                        <tbody>
                                            <tr>
                                                <th>구분</th>
                                                <th>소비 전력</th>
                                                <th>전기 사용량(kw)</th>
                                                <th>전기요금</th>
                                            </tr>
                                            <tr>
                                                <th>1구 이동형</th>
                                                <td>1.65kw</td>
                                                <td>49.5</td>
                                                <td>3,550원</td>
                                            </tr>
                                            <tr>
                                                <th>1구 빌트인</th>
                                                <td>1.80kw</td>
                                                <td>54</td>
                                                <td>3,870원</td>
                                            </tr>
                                            <tr>
                                                <th>2구 이동형</th>
                                                <td>2.90kw</td>
                                                <td>87</td>
                                                <td>5,980원</td>
                                            </tr>
                                            <tr>
                                                <th>2구 빌트인</th>
                                                <td>2.90kw</td>
                                                <td>87</td>
                                                <td>5,980원</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="red">1일 1시간 30일(한달)을 사용했을 때 Chef 전기레인지의 전기세는 다음과 같습니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel-group">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <a data-toggle="collapse" href="#collapse2">
                                    <h4 className="panel-title">
                                        전기세를 줄이는 방법은 없나요?
                                    </h4>
                                </a>
                            </div>
                            <div id="collapse2" className="panel-collapse collapse">
                                <div className="panel-body">
                                    <h4>
                                        <b>
                                            답변)<br></br>
                                             1. 바닥이 평평하고 열효율이 좋은 냄비를 사용하세요.<br></br><br></br>
                                            2. 전기레인지 사용 후 잔열을 이용하세요. Chef 전기레인지는 사용 후 잔열이 최장 30분까지 유효합니다. 뜸들이기, 라면 익히기 등은 잔열을 이용하세요.<br></br><br></br>
                                            3. 전체 화구를 모두 사용했을 때의 계산입니다.(상단 전기요금표) 전체를 사용하지 않을 경우 표의 요금보다 전기요금이 적게 부과 됩니다.<br></br><br></br>
                                            4. 고객님 댁에서 사용 시 전력 사용량이 100kwh 단위로 볼때 100~150kwh, 200~250kwh 백단위 초반 사용시는 전기레인지를 사용하시더라도 요금이 적게 발생되지만 후반대 사용시 전기레인지 사용으로  백단위를 넘었을 경우 누진세로 요금이 계산되어 많이 나옵니다.<br></br>
                                        </b>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="panel-group">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <a data-toggle="collapse" href="#collapse3">
                                    <h4 className="panel-title">
                                        Chef 전기레인지의 조리시간은 얼마나 걸리나요?
                                    </h4>
                                </a>
                            </div>
                            <div id="collapse3" className="panel-collapse collapse">
                                <div className="panel-body">
                                    <h4>
                                        <b>
                                            답변)<br></br>
                                            물 100°C까지 끓이는 시간 : 약 6분정도 소요됩니다.<br></br>
                                            (실험기준:1650w 18cm화,구 물용량 1L, 물 온도 17°C, 용기규격 지름 180cm 높이 10cm 용기바닥 스테인레스3중바닥)<br></br>
                                            물이  끓는 시간은 물의 온도,  용기의 재질과 종류에 따라 달라질 수 있습니다.<br></br>
                                            가스레인지에서 물이 빨리 끓는 것처럼 보이는 이유는 가스 불꽃이 냄비의 옆면을 달궈서 테두리가 먼저 끓기 때문에 그렇게 보이지만, 냄비에 담긴 물의 전체 온도가 100°C에 이르기까지는 상당한 시간이 소요됩니다.<br></br>
                                            결과적으로 가스레인지와 하이라이트 전기레인지에서의  물 끓는 속도는 대동소이합니다.
                                        </b>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </div>
)

const Service = ({onClick}) => (
    <div className="serviceInfo">
        <div className="inner">
            <div className="center">
                <div className="center_title">
                    <h3>서비스 접수 및 이용안내</h3>
                </div>            
                <div className="center_desc">
                   
                </div>
            </div>
        </div>   
    </div>
)

const Customer = ({onClick}) => (
    <div className="customerInfo">
        <div className="inner">
            <div className="center">
                <div className="center_title">
                    <h3>고객의 소리</h3>
                </div>    
                <div className="center_desc">
                    
                </div>
            </div>
        </div>   
    </div>
)

export default ContactInfoContainer;