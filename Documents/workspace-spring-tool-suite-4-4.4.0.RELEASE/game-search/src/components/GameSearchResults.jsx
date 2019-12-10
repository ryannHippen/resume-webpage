import React, { Component } from "react";
import InputBase from '@material-ui/core/InputBase';
import Api from '../services/Api'
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import {Box, Table, TableRow, TableCell, TableHead, Button,
    TableBody, Grid, Paper, Card, CardContent, CardActions, IconButton,
    } 
    from '@material-ui/core';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';


class GameSearchResults extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchResults: [{"title": '', "platform": ''}],
            title: this.props.match.params.title,
            fetchInProgress: '',
            gameTitle: '',
        }
        this.goBack = this.goBack.bind(this);
        this.searchGame = this.searchGame.bind(this);
        this.setTitle = this.setTitle.bind(this);
    }

    goBack() {
        this.props.history.push(`/games/genre`);
    }

    componentDidMount() {
        if(this.props.user === undefined){
            this.props.history.push(`/login`);
        } else {
            this.setState({ fetchCompleted: false })
            this.searchGame();
        }
        
    }

    setTitle(text) {
        this.setState({title: text.target.value, gameTitle: text.target.value})
    }

    searchGame(){
        Api.getRequestGameSearch(this.state.title).then(response => {
            if(response.data.result === "No result"){
                this.setState({ searchResults: [{'title': '', 'platform': ''}], fetchCompleted: true})
            } else {
                this.setState({searchResults: response.data.result, fetchCompleted: true})
            }
        })
    }

    search() {
        if (this.state.gameTitle !== ''){
            this.props.history.push(`/games/${this.state.title}`)
            this.setState({fetchCompleted: false})
            this.searchGame()
            this.setState({gameTitle: ''})
        } 
    }
    
    render(){        
        const styles = {
            paperContainer: {
                backgroundColor: "black",
                backgroundSize: 'cover',
                overflow: 'hidden',
                height: '93vh',
            },
            root: {
                width: '50%',
            },
            table: {
                width: 650,
            },
            search: {
                position: 'relative',
                marginLeft: 0,
                width: '100%',
              },
            searchIcon: {
                height: '100%',
                position: 'absolute',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
              tableColor: {
                background: 'black'
              },
              bgColor: {
                backgroundColor: "",
              },
              customColumnSize: {
                height: "10px", 
                padding: "0px"
              }
                
        };
        return (
            <div className={styles.root}>
                <Paper style={styles.paperContainer} >
                    <Box>
                        <Grid container direction="column" alignItems="center" justify="center">
                        <span className="flux game-search-title">Game Search Results</span>
                        <div className=" circle-spin " hidden={this.state.fetchCompleted}><CircularProgress/></div>
                        <Card className="card-margin-table" hidden={!this.state.fetchCompleted} >
                            <CardContent style={styles.bgColor}>
                                <Table  size="small" aria-label="a dense table"> 
                                    <TableHead style={styles.tableColor}>
                                        <TableRow  className="">
                                            <TableCell align="" className="cop">Platform</TableCell>
                                            <TableCell align="right" className="cop">Title</TableCell>
                                            <TableCell align="center" className="cop">Favorite</TableCell>
                                            <TableCell align="" className="cop">More Info</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.searchResults.map(result =>
                                            <TableRow  key={result.platform + result.title}>
                                                <TableCell style={styles.customColumnSize} component="th" scope="row" className="victory-not-slanted">
                                                    {result.platform}
                                                </TableCell>
                                                <TableCell  style={styles.customColumnSize}  align="right" className="victory-not-slanted">
                                                    {result.title}
                                                </TableCell>
                                                <TableCell style={styles.customColumnSize} align="center" >
                                                    <IconButton >
                                                        <CheckBoxOutlineBlankOutlinedIcon fontSize="small" />
                                                        {/* <CheckBoxOutlinedIcon fontSize="small" /> */}
                                                    </IconButton>
                                                </TableCell>
                                                <TableCell style={styles.customColumnSize} >
                                                    <Button size="small" variant="contained" color="secondary">details</Button>
                                                </TableCell>
                                            </TableRow>
                                            )}
                                    </TableBody>
                                </Table>
                            </CardContent>
                            <CardActions style={styles.bgColor} className="card__actions ">
                                <div className={styles.search}>
                                    <InputBase
                                    onChange={this.setTitle}
                                    placeholder="Search Different Title…"
                                    value={this.state.gameTitle}/>
                                </div>
                            <Button onClick={() => this.search()}>Go</Button>
                            </CardActions>
                        </Card>
                        </Grid>
                    </Box>
                </Paper>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        user: state.UserReducer.userLoggedIn[0],
    };
}

export default  connect(mapStateToProps)(GameSearchResults);