import React, {Component} from 'react';
import './Customer.css';

class Customer extends Component {
    
    componentDidUpdate() {

    }

    render() {
        return (
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
    }
}

export default Customer;