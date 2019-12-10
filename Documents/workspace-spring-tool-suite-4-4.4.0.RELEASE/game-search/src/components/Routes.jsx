import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GameSearch  from './GameSearch'
import Login  from './Login'
import GameDetails from "./GameDetails";
import UserProfile from "./UserProfile";
import GameSearchResults  from './GameSearchResults'
import HomePage  from './HomePage'
import NavBar from './navbar'

class Routes extends Component {
    render() {
        return (
            
            <BrowserRouter>
            <NavBar />
                <> 
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/home" exact component={HomePage} />
                        <Route path="/games" exact component={ GameSearch} />
                        <Route path="/games/:title" exact component={GameSearchResults} />
                        <Route path="/user/profile" exact component={UserProfile} />
                        <Route path="/gamedetails/:title/:platform" exact component={GameDetails} />
                        
                    </Switch>
                </>
            </BrowserRouter>
        )
    }
}


export default Routes;