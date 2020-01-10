import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Resume  from './Resume'
import ContactInformation from './Contact_Information';
import About from './About';
import Projects from './Projects';
import TechnicalSkills from './Technical_Skills';
import References from './References';
import Home from './Home';
import NavBar from './NavBar'
import BottomNavBar from './BottomNavBar';
 
class Routes extends Component{

    render(){
        return (
            <BrowserRouter>
                <NavBar />
                <> 
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/resume" exact component={Resume} />.
                        <Route path="/contact" exact component={ContactInformation} />
                        <Route path="/about" exact component={About} />.
                        <Route path="/projects" exact component={Projects} />
                        <Route path="/skills" exact component={TechnicalSkills} />.
                        <Route path="/references" exact component={References} />
                    </Switch>
                </>
                <BottomNavBar />
            </BrowserRouter>
        )
    }
}

export default Routes;