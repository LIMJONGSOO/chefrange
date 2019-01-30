import React, {Component} from 'react';
import './CorpInfoContainer.css';
import chef_company from '../../../images/chef_company.jpg';
import chef_ceo from '../../../images/chef_ceo.jpg';

/*global daum*/
class CorpInfoContainer extends Component {
    
    componentDidUpdate() {
        if(this.props.submenuId==='location'){
            let el = document.getElementById('map');
            let map = new daum.maps.Map(el, {
                center: new daum.maps.LatLng(37.535842, 126.823848)
            });
    
            let markerPosition  = new daum.maps.LatLng(37.535842, 126.823848);
    
            // 마커를 생성합니다
            let marker = new daum.maps.Marker({
                position: markerPosition
            });
    
            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
    
            let iwContent = '<div style="padding:5px;">Chef 전기레인지 <br><a href="http://map.daum.net/link/map/Hello World!,37.535842,126.823848" style="color:blue" target="_blank">큰지도보기</a> <a href="http://map.daum.net/link/to/Hello World!,37.535842,126.823848" style="color:blue" target="_blank">길찾기</a></div>', 
            iwPosition = new daum.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다
    
            // 인포윈도우를 생성합니다
            let infowindow = new daum.maps.InfoWindow({
                position : iwPosition, 
                content : iwContent 
            });
            
            // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
            infowindow.open(map, marker); 
        }
    }

    render() {
        if(this.props.submenuId==='aboutUs') return <AboutUs/>;
        if(this.props.submenuId==='ceoMsg') return <CeoMsg/>;
        return <Location/>;
    }
  }

const AboutUs = ({onClick}) => (
    <div className="companyInfo">
        <div className="inner">
            <div>
                <div className="bannerImg"><img src={chef_company} alt="회사소개 이미지"></img></div>
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

const CeoMsg = ({onClick}) => (
    <div className="companyInfo">
        <div className="inner">
            <div>
                <div><img src={chef_ceo} alt="CEO 인사말 이미지"></img></div>
            </div>
            <div className="center">
                <div className="center_title">
                <h3>CEO 인사말</h3>
                </div>            
                <div className="center_desc">
                    Chef 전기레인지는 일본 NEG의 세라믹 글라스와 영국의 세라마 스피드 하이라이트 발열체를 사용하여 최상의 품질을 보장합니다. <br></br>
                </div>
            </div>
        </div>   
    </div>
)

const Location = ({onClick}) => (
    <div className="companyInfo">
        <div className="inner">
            <div className="center">
                <div className="center_title">
                    <h3>찾아오시는 길</h3>
                </div>    
                <div className="center_desc">
                    <div id="map" className="map"></div>
                </div>
                <h4>주소 : 서울특별시 양천구 가로공원로55길 14</h4>
                <h4>연락처 : 02) 2065-0583</h4>
            </div>
        </div>   
    </div>
)

export default CorpInfoContainer;