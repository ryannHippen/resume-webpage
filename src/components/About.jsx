import React, { Component } from 'react';
import { Typography, Grid, Paper, Box } from '@material-ui/core';
import Amplify, { Storage } from 'aws-amplify';
import config from '../ampconfig';
import { connect } from 'react-redux';

Amplify.configure({
    Auth: {
      mandatorySignIn: false,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      identityPoolId: config.cognito.IDENTITY_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
    Storage: {
      region: config.s3.REGION,
      bucket: config.s3.BUCKET,
      identityPoolId: config.cognito.IDENTITY_POOL_ID
    },
    API: {
      endpoints: [
        {
          name: "notes",
          endpoint: config.apiGateway.URL,
          region: config.apiGateway.REGION
        },
      ]
    }
  });

class About extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            images: [],
            imageNames: ['coffee.jpg','record.jpeg'],
            text: ['Hello, I’m a burgeoning developer with a passion for learning. I enjoy problem solving and work \
            great in teams as I prefer to have colleagues that I can bounce ideas off of.',  'When I’m not developing\
             personal projects, I like to play video games, watch movies, or listen to records. Me and my \
              wife travel when possible and we love to play board games with friends.',
             'I plan to continue my education in the near future and would like to work on any exciting projects that are out there.','\
              If there is anything that I would be a good fit for or if you just want to chat, please reach out to me! '],
        }
      }

      componentDidMount() {
        this.getProjectVideo()
      }

    getProjectVideo = async  ()  => {  
        for(var i = 0; i < this.state.imageNames.length; i++){
            await Storage.get(this.state.imageNames[i]).then(response => {  
                this.setState({
                  images: this.state.images.concat(response)
                })
            }
        )}
    }; 

    render(){

        const styles = {
            paperContainer: {
                minHeight: '93vh',
                width: '100vw',
                overflowX: 'hidden',
                backgroundColor: '#DDFABB',
                boxShadow: 'none',
                paddingTop: '4vh',
            },
            imageSize: {
                height: '35vh',
                width: 'auto',
                // marginLeft: '2vw',
                // marginRight: '2vw',
                opacity: '85%',
            },
            imageSizeMobile: {
                height: '100px',
                width: 'auto',
                marginLeft: 10,
                marginRight: 10,
                opacity: '80%',
                paddingTop: 10,
                paddingBottom: 10,
            },
            aboutFont: {
                fontFamily: 'Montserrat',
                fontSize: '15px',
                color: '#9e9e9e'
              },
              aboutFontMobile: {
                fontFamily: 'Montserrat',
                fontSize: '12px',
                color: '#9e9e9e'
              },
              aboutMe: {
                fontFamily: 'Montserrat',
                fontSize: '11px',
                color: '#9e9e9e',
              },
              aboutMeMobile: {
                fontFamily: 'Montserrat',
                fontSize: '16px',
                color: '#9389e2'
              }
          };

        return (
            <div>
                <Paper style={styles.paperContainer}>
                {this.props.screen.screenWidth > 700 && this.props.screen.screenHeight > 700 ? 
                    <Grid container direction="row" justify="" alignItems="center"     >
                        <Grid item xs={2}></Grid>
                        <Grid item  xs={4} >
                            <Box width='32vw'  >
                                <Typography style={styles.aboutFont} align="left">{this.state.text[0]}</Typography>
                            </Box>
                            <Box width='32vw' pt={2} >
                                <Typography style={styles.aboutFont} align="left">{this.state.text[1]}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item container justify="flex-start"   xs={5}>
                        <Box pt={3}  >
                            <img style ={styles.imageSize} src={this.state.images[1]} alt="" ></img>
                            </Box>
                        </Grid>
                        <Grid item  xs={5} >
                            <img align='right' style ={styles.imageSize} src={this.state.images[0]} alt="" ></img>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item  xs={3}>
                            <Box pl={2} width='32vw'>
                                <Typography style={styles.aboutFont} align="left">{this.state.text[2]}</Typography>
                            </Box>
                            <Box pl={2} pt={2} width='32vw'>
                                <Typography style={styles.aboutFont} align="left">{this.state.text[3]}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}></Grid>
                        
                    </Grid>
                    :
                    <Grid container direction="row" justify="center" alignItems="center"     >
                        <Grid item >
                            <Box pt={0} pb={2} width='500px'>
                                <Typography style={styles.aboutMeMobile} align="center">About Me</Typography>
                            </Box>
                        </Grid>
                        <Grid item  xs={12}>
                            <Box pl={3} pr={3} pb={3} pt={2}>
                                <Typography style={styles.aboutFontMobile} align="center">{this.state.text[0]}</Typography>
                            </Box>
                            <Box pl={3} pr={3} pb={3}>
                                <Typography style={styles.aboutFontMobile} align="center">{this.state.text[1]}</Typography>
                            </Box>
                        </Grid>
                        {/* <Grid item  xs={6} >
                            
                            <img align='right' style ={styles.imageSizeMobile} src={this.state.images[0]} alt="" ></img>
                        </Grid>
                        <Grid item  xs={6}>
                            <img style ={styles.imageSizeMobile} src={this.state.images[1]} alt="" ></img>
                        </Grid> */}

                        <Grid item  xs={12} >
                            <Box pl={3} pr={3} pb={3} >
                                <Typography style={styles.aboutFontMobile} align="center">{this.state.text[2]}</Typography>
                            </Box>
                            <Box pl={3} pr={3}>
                                <Typography style={styles.aboutFontMobile} align="center">{this.state.text[3]}</Typography>
                            </Box>
                        </Grid>
                        
                    </Grid>
                }
                </Paper>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { screen: state.screenSizeReducer.screen }
  }

export default connect(mapStateToProps)(About);