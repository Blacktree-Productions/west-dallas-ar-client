import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Donation from "../donation/donation";
import Signup from "../signup/signup";

const About = () => (
    <section>
        <Switch>
          <Route path="/about/donation" component={Donation} />
          <Route path="/about/signup" component={Signup} />  
        </Switch>
        <Link to="/about/signup">Signup</Link>
        <Link to="/about/donation">Donation</Link>
    </section>
);

export default About;

