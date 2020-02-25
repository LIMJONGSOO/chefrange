import React from 'react';
import './RangeInfo.css';
import HTS801 from '../../../../images/HTS801.jpg';


const RangeInfo = ({match}) => {
    let imgRange = HTS801;

    if(match.params.modelNo === 'HTS801'){
        imgRange = HTS801;
    }

    return (
        <div className="rangeInfo">
            <div className="inner">
                <div>
                    <div><img src={imgRange} alt={match.params.modelNo}></img></div>
                </div>
            </div>   
        </div>
    );
};

export default RangeInfo;