import React, { Component } from "react";
import Api from '../services/Api'
import { connect } from 'react-redux';
import {Card, CardContent,Grid,Button, CardActions, TextField, Paper} from '@material-ui/core';
import Box from '@material-ui/core/Box';

class GameSearch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchResults: [{"title": '', "platform": ''}],
            gameTitle: ''
        }
        this.searchGame = this.searchGame.bind(this);
        this.setTitle = this.setTitle.bind(this);
    }

    componentDidMount() {
        if(this.props.user === undefined){
            this.props.history.push(`/login`);
        }        
    }

    searchGame(){
        Api.getRequestGameSearch('dark souls remastered').then(response => {
            this.setState({searchResults: response.data.result})
        })
    }

    setTitle(text) {
        this.setState({gameTitle: text.target.value})
    }

    search() {
        this.props.history.push(`/games/${this.state.gameTitle}`)
    }

    render(){
        const styles = {
            paperContainer: {
                backgroundImage: "url(https://myrealdomain.com/images/80s-grid-background-8.png)",
                backgroundSize: 'cover',
                overflow: 'hidden',
                height: '93vh',
            }
        };
        return (
            <Paper style={styles.paperContainer}>
                <Box>
                    <Grid container direction="column" alignItems="center" justify="center">
                        <div className="future-cop"><span className="cop">SEARCH FOR A GAME</span></div>
                        <Card className="card-margin-search" >
                            <CardContent>
                                <TextField
                                label="Game Title"
                                value={this.state.title} 
                                onChange={this.setTitle}
                                />
                            </CardContent>
                            <CardActions className ="">
                                <Button className = "victory-not-slanted" size="small" onClick={() => {
                                    this.search()
                                }}>
                                    Search
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Box>
            </Paper>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        user: state.UserReducer.userLoggedIn[0],
    };
}

export default connect(mapStateToProps)(GameSearch);