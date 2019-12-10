import React, { Component } from "react";
import Api from '../services/Api'
import { connect } from 'react-redux';

class UserProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchResults: [{"title": '', "platform": ''}],
        }
        this.goBack = this.goBack.bind(this);
        this.searchGame = this.searchGame.bind(this);
    }

    goBack() {
        this.props.history.push(`/games/genre`);
    }

    componentDidMount() {
        if(this.props.user === undefined){
            this.props.history.push(`/login`);
        } else {
            //this.searchGame();
        }
        
    }

    searchGame(){
        Api.getRequestGameSearch('dark souls remastered').then(response => {
            this.setState({searchResults: response.data.result})
        })
    }

    render(){
        return (

            <div>
                <h2>UserProfile</h2>
            </div>

        )
    }
}

function mapStateToProps(state, props) {
    return {
        user: state.UserReducer.userLoggedIn[0],
    };
}

export default   connect(mapStateToProps)(UserProfile);