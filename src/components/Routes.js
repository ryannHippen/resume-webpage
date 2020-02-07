import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Resume  from './Resume'
import ContactInformation from './Contact_Information';
import About from './About';
import Projects from './Projects';
import Home from './Home';
import NavBar from './NavBar'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from "styled-components";


 
function Routes({ location }) {

        return (
            <Wrapper>
            <NavBar />
                  <TransitionGroup className="transition-group">
                    <CSSTransition
                      key={location.key}
                      timeout={{ enter: 1000, exit: 1000 }}
                      classNames="slide"
                      // classNames="fade"
                    >
                      <section className="route-section">
                        <Switch location={location}>
                            <Route path="/" exact component={Home} />
                            <Route path="/resume" exact component={Resume} />
                            <Route path="/contact" exact component={ContactInformation} />
                            <Route path="/about" exact component={About} />
                            <Route path="/projects" exact component={Projects} />
                        </Switch>
                      </section>
                    </CSSTransition>
                  </TransitionGroup>
                </Wrapper>
              );
            }


const Wrapper = styled.div`
.slide-enter {
    transform: translateY(-100vh);
    opacity: 1;
}

/* Declare transition properties */
.slide-enter.slide-enter-active {
    transform: translateY(0);
    opacity: 1;
}

/* EXIT TRANSITION */
.slide-exit {
    transform: translateY(-90vh);
    opacity: 1;
}

.slide-exit.slide-exit-active {
    transform: translateY(90vh);
    opacity: 1;
    transition: all 700ms linear 
}
`;

export default withRouter(Routes);