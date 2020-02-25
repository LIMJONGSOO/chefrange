import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Corp from './Corp';
import Aboutus from './Components/Aboutus/Aboutus';
import CeoMsg from './Components/CeoMsg/CeoMsg';
import Location from './Components/Location/Location';

function CorpRoutes({ match }) {
    return (
        <div className="container main">
            <Corp/>
            <Route exact path={match.path} component={Aboutus} />
            <Route exact path={`${match.path}/about`} component={Aboutus} />
            <Route exact path={`${match.path}/ceomsg`} component={CeoMsg} />
            <Route exact path={`${match.path}/location`} component={Location} />
        </div>
    );
}

export default CorpRoutes;