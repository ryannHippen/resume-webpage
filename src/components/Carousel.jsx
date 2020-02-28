import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Box, Grid, CardContent, Card, CardActionArea, CardMedia, CardActions, Typography, Button, ButtonBase } from '@material-ui/core';
import Amplify, { Storage } from 'aws-amplify';
import config from '../ampconfig';
import { connect } from 'react-redux';
import addProjects from '../actions/projectActions'
import Css from '../icons/css3.svg'

import Material from '../icons/material.svg'
import Reactjs from '../icons/reactjs.svg'
import Mysql from '../icons/mysql.svg'
import Python from '../icons/python.svg'
import Redux from '../icons/redux.svg'


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

    navToProjectRepo = (url) => {  
      window.open(url, "_blank")
    }  

    
    render() {
      const styles = {
        card: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          paddingTop: 30,
          paddingBottom: 20,
        },
        devIconStyle: {
            height: "20px",
            marginRight: 10,
            //margin: "auto",
        },
        devIconStyleMobile: {
            height: "15px",
            marginRight: 10,
            //margin: "auto",
        },
        projectName: {
          fontSize: 15,
        },
        projectNameMobile: {
          fontFamily: 'Montserrat',
          fontSize: '14px',
          color: '#9389e2',
          fontWeight: 'bold',
        },
        projectDescription: {
          fontSize: 12,
        },
        projectDescriptionMobile: {
          fontFamily: 'Montserrat',
          fontSize: '12px',
          color: '#9e9e9e'
        },
        projectTech: {
          fontSize: 15,
        },
        projectTechMobile: {
          fontSize: 15,
        }
      };
      const technologies  = [
        {'technology': 'Material UI', 'svg': Material},
        {'technology': 'CSS', 'svg': Css},
      ]
      const projectInfo  = [
        {'name': 'Project 1 - Game Search Website: ', 'technologies': [ Material, Reactjs, Redux],
        'description': ' Using an external API I created a site that allows you to explore various Video Game Genres with examples of Games they encompass.',
        'repoLink': 'https://github.com/ryannHippen/game-db'},
        {'name': 'Project 2 - Login with local DB: ', 'technologies': [Material, Reactjs, Redux, Python, Mysql],
        'description': ' I created a login page for a website that allows you to search for video games to get info about them as well as what consoles they are available on. With Python as the API for React I stored hashed passwords in a local MySQL DB and connected with an external API for searching games.',
        'repoLink': ''},
      ]
        return (
          
          <Grid container direction='row' justify='center' alignItems="center">
            {this.props.screen.screenWidth > 800 && this.props.screen.screenHeight > 800 ? 
              <Box width="1200px" mt={0} container>
                  <Card style={styles.card}>
                    <CardActionArea>
                      <CardMedia>
                        <Carousel 
                              axis='horizontal' 
                              showStatus={true} 
                              showThumbs={false} 
                              autoPlay={false}  
                              showIndicators={true}
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
                        </CardMedia>
                      </CardActionArea>
                  </Card>
                  <Box width="95%" >
                    {projectInfo.map((project, i) => 
                    <Box pb={2} >
                      <Grid container direction="row"      >
                        <Grid item  xs={1} />
                          <Grid item  xs={3} >
                              <Typography align="right">{project.name}</Typography>
                          </Grid>
                          <Grid item  xs={3} />
                          <Grid item xs={2}>
                              <Typography align="right">Technologies:</Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Box ml={2}>
                            {project.technologies.map(svg =>
                              <img style={styles.devIconStyle} src={svg} />
                              )}
                            </Box>
                            
                          </Grid>
                          <Grid item  xs={1} >
                            <ButtonBase disableRipple type="button"  onClick= {() => { this.navToProjectRepo(project.repoLink) }}>
                              <Typography className="navBarText">Repo</Typography>
                            </ButtonBase>
                          </Grid>
                          {/* end of row 1 */}
                          <Grid item  xs={2} />
                          <Grid item xs={8}>
                              <Typography align="left">{project.description}</Typography>
                          </Grid>
                          <Grid item  xs={2} />
                          
                      </Grid>
                      </Box>
                    )}
                  </Box>
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
                  <Box width="95%" >
                    {projectInfo.map((project, i) => 
                    <Box pb={1} >
                      <Grid container direction="row"      >
                          <Grid item  xs={12}>
                              <Typography style={styles.projectNameMobile} align="left">{project.name}</Typography>
                          </Grid>
                          <Grid item >
                              <Typography style={styles.projectTechMobile}  align="left">Technologies:</Typography>
                          </Grid>
                          <Grid item >
                            <Box ml={2}>
                            {project.technologies.map(svg =>
                              <img style={styles.devIconStyleMobile} src={svg} />
                              )}
                            </Box>
                            
                          </Grid>
                          <Grid item  xs={12} >
                            <ButtonBase size="small" variant="outlined" type="button"  onClick= {() => { this.navToProjectRepo(project.repoLink) }}>
                              <Typography style={styles.projectTechMobile} align="center">Link To Repo</Typography>
                            </ButtonBase>
                          </Grid>
                          {/* end of row 1 */}
                          <Grid item   />
                          <Grid item >
                              <Typography style={styles.projectDescriptionMobile}  align="left">{project.description}</Typography>
                          </Grid>
                          <Grid item />
                          
                      </Grid>
                      </Box>
                    )}
                  </Box>
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