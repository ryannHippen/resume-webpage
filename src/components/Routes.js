import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Resume  from './Resume'
import ContactInformation from './Contact_Information';
import About from './About';
import Projects from './Projects';
import TechnicalSkills from './Technical_Skills';
import References from './References';
import Home from './Home';
import NavBar from './NavBar'
import BottomNavBar from './BottomNavBar';
import ResumeVert  from './ResumeVert'
import Test  from './Carousel'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from "styled-components";


 
function Routes({ location }) {

    // render()
    //{
        return (
//                 <NavBar />
//                 <> 
//                     <Switch location={location}>
//                         <Route path="/" exact component={Home} />
//                         <Route path="/resume" exact component={Resume} />
//                         <Route path="/resume/vert" exact component={ResumeVert} />
//                         <Route path="/contact" exact component={ContactInformation} />
//                         <Route path="/about" exact component={About} />
//                         <Route path="/projects" exact component={Projects} />
//                         <Route path="/skills" exact component={TechnicalSkills} />
//                         <Route path="/references" exact component={References} />
//                         <Route path="/test" exact component={Test} />
//                     </Switch>
//                 </>
//                 <BottomNavBar />
//         )
//     }
// }


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
                {/* <Route path="/resume" exact component={Resume} /> */}
                <Route path="/resume" exact component={ResumeVert} />
                <Route path="/contact" exact component={ContactInformation} />
                <Route path="/about" exact component={About} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/skills" exact component={TechnicalSkills} />
                <Route path="/references" exact component={References} />
                <Route path="/test" exact component={Test} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
      {/* <BottomNavBar /> */}
    </Wrapper>
  );
}

// const Wrapper = styled.div`
//   .fade-enter {
//     opacity: 0.01;

//   }

//   .fade-enter.fade-enter-active {
//     opacity: 1;
//     transition: opacity 1000ms ease-in;

//   }

//   .fade-exit {
//     opacity: 1;

//   }

//   .fade-exit.fade-exit-active {
//     opacity: 0.01;
//     transition: opacity 500ms ease-in;
//     height: 0px;
//     -webkit-transition: height .3s ease;


//   }

//   div.transition-group {
//     position: relative;
//   }

//   section.route-section {

//     width: 100%;
//     top: 0;
//     left: 0;
//   }
// `;

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