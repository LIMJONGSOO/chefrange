import React, {Component} from 'react';
import './Built.css';
import chef_built from '../../../../images/chef_built.jpg';

class Built extends Component {
    
    componentDidUpdate() {

    }

    render() {
        return (
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
    }
}

export default Built;