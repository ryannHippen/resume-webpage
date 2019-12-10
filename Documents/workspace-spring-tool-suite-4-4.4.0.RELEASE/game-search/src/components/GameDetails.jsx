import React, { Component } from "react";
import Api from '../services/Api'

class GameDetails extends Component {

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
        this.searchGame();
    }

    searchGame(){
        Api.getRequestGameSearch('dark souls remastered').then(response => {
            this.setState({searchResults: response.data.result})
        })
    }

    render(){
        return (
            <div>
                {this.state.searchResults.map(result =>
                    <div key={result.platform}>
                        <span>{result.platform} {result.title}</span>
                    </div>
                )}
            </div>
        )
    }
}
export default GameDetails;