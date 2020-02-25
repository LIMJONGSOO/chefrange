import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Range from './Range';
import RangeInfo from './Components/RangeInfo/RangeInfo';

function RangeRoutes({ match }) {
    return (
        <div className="container main">
            <Range/>
            <Route exact path={match.path} component={RangeInfo} />
            <Route exact path={`${match.path}/:modelNo`} component={RangeInfo} />
        </div>
    );
}

export default RangeRoutes;