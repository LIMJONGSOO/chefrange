import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './Contact';
import Built from './Components/Built/Built';
import Faq from './Components/Faq/Faq';
import Service from './Components/Service/Service';
import Customer from './Components/Customer/Customer';

function ContactRoutes({ match }) {
    return (
        <div className="container main">
            <Contact/>
            <Route exact path={match.path} component={Built} />
            <Route exact path={`${match.path}/built`} component={Built} />
            <Route exact path={`${match.path}/faq`} component={Faq} />
            <Route exact path={`${match.path}/service`} component={Service} />
            <Route exact path={`${match.path}/customer`} component={Customer} />
        </div>
    );
}

export default ContactRoutes;