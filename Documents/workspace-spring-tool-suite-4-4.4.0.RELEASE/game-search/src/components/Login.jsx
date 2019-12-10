import React, { Component } from "react";
import {Card, CardContent,Grid,Button, CardActions, TextField, Paper} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Api from "../services/Api";
import { connect } from 'react-redux';
import { addLoggedInUser } from '../redux/actions/UserActions';


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
        }
        this.updateUserName = this.updateUserName.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }
    
    login(){
        Api.userLoginRequest({'username': this.state.userName, 'password': this.state.password}).then(response => {
            if(response.data === '1'){
                this.props.addLoggedInUser({ 'username': this.state.userName})
                this.props.history.push(`/games`);
            } else {
                alert('incorrect username or password, please try again')
            }
        })
    }

    updateUserName(text){
        this.setState({userName: text.target.value})
    }
    updatePassword(text){
        this.setState({password: text.target.value})
    }

    componentDidMount() {
        if(this.props.user !== undefined){
            this.props.history.push(`/games`);
        }
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
                        <Card className="card-margin-login" >
                            <CardContent>
                                <TextField
                                label="Username"
                                value={this.state.userName} 
                                onChange={this.updateUserName}
                                />
                            </CardContent>
                            <CardContent >
                                <TextField
                                type="password" 
                                label="Password"
                                onChange={this.updatePassword}
                                />
                            </CardContent>
                            <CardActions >
                                <Button className = "victory-not-slanted" size="small" onClick={() => {
                                    this.login()
                                }}>
                                    Login
                                </Button>
                                <Button className = "victory-not-slanted" size="small">
                                    Register
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

function mapDispatchToProps(dispatch) {
    return {
        addLoggedInUser: user => dispatch(addLoggedInUser(user)),
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Login);