import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Box, Grid, CardContent, Card, CardActionArea, CardActions, Typography } from '@material-ui/core';
import Amplify, { Storage } from 'aws-amplify';
import config from '../ampconfig';
import { connect } from 'react-redux';
import addProjects from '../actions/projectActions'
import Material from '../icons/material.svg'
import Css from '../icons/css3.svg'


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
 
class ProjectCarousel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            projectFileNames: [
                'Game Search - Project.mp4',
                'Game Search with Login - Project.mp4'
            ],
            projectTechnologies: ['one', 'two'],
            technologies :[
              {'technology': 'Material UI', 'svg': Css},
              {'technology': 'CSS', 'svg': Css},
          ],
        }
      }
    

    componentDidMount() {
      if(this.props.projectsRetrieved.length === 0){
        this.getProjectVideo(); 
      } else {
        this.setState({ projects: this.props.projectsRetrieved })
      }
    }
    componentWillUnmount(){
      this.addProjectsToStore()
    }

    getProjectVideo = async  ()  => {  
        for(var i = 0; i < this.state.projectFileNames.length; i++){
            await Storage.get(this.state.projectFileNames[i]).then(response => {  
                this.setState({
                  projects: this.state.projects.concat(response)
                })
            }
        )}
    }; 

    addProjectsToStore() {
      if(this.state.projects.length === this.state.projectFileNames.length && this.props.projectsRetrieved.length === 0){
        this.props.addProjects(this.state.projects)
      }
    }

    
    render() {
      const styles = {
        card: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
        devIconStyle: {
            height: "20px",
            //margin: "auto",
        },
        devIconStyleMobile: {
            height: "15px",
            //margin: "auto",
        },
      };
      const technologies  = [
        {'technology': 'Material UI', 'svg': Material},
        {'technology': 'CSS', 'svg': Css},
    ]
        return (
          
          <Grid container direction='row' justify='center' alignItems="center">
            {this.props.screen.screenWidth > 700 & this.props.screenHeight > 700 ? 
            
              <Box width="1200px" mt={0} container>
                  <Card style={styles.card}>
                      <CardActionArea>
                          <CardContent>
                              <Carousel 
                                    axis='horizontal' 
                                    showStatus={false} 
                                    showThumbs={false} 
                                    autoPlay={false}  
                                    showIndicators={false}
                                    infiniteLoop={true} 
                                    transitionTime={1000}
                                    interval={4000}
                                >
                                {this.state.projectFileNames.map((project, i) =>
                                    <div>
                                        <video controls width="900px" height='600' src={this.state.projects[i]} />
                                    </div>
                                )}
                                </Carousel>
                          </CardContent>
                      </CardActionArea>
                      <CardActions>
                          <Grid container justify="center" >
                          <Typography> 
                            <img src={this.state.technologies[0].svg} />
                            </Typography>
                          </Grid >
                      </CardActions>
                  </Card>
              </Box>  
            :
              <Box width="80%" mt={0} container alignItems="center">
                  <Card style={styles.card}>
                      <CardActionArea>
                          <CardContent>
                              <Carousel 
                                    axis='horizontal' 
                                    showStatus={false} 
                                    showThumbs={false} 
                                    autoPlay={false}  
                                    showIndicators={false}
                                    infiniteLoop={true} 
                                    transitionTime={1000}
                                    interval={4000}
                                >
                                {this.state.projectFileNames.map((project, i) =>
                                    <div>
                                        <video controls width="70%" height='50%' src={this.state.projects[i]} />
                                    </div>
                                )}
                                </Carousel>
                          </CardContent>
                      </CardActionArea>
                      <CardActions>
                          <Grid container justify="center" >
                          <Typography> 
                            {/* <img src={this.state.technologies[0].svg} /> */}
                            </Typography>
                          </Grid >
                      </CardActions>
                  </Card>
              </Box>  
            }
          </Grid>
        )
    }
}

function mapStateToProps(state) {
    return { projectsRetrieved: state.projectReducer.projectVideoURL, screen: state.screenSizeReducer.screen  }
  }

const mapDispatchToProps = dispatch => {
    return {
      addProjects: project => dispatch(addProjects(project))
  }}; 

export default connect(mapStateToProps,mapDispatchToProps)(ProjectCarousel);