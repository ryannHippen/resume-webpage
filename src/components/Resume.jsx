import React from 'react';
import { Typography, Grid, Box, Paper, List, ListItem, ListItemText, ListItemIcon, Container, Card, CardContent } from '@material-ui/core';
import Amplify from 'aws-amplify';
import config from '../ampconfig';
import Hibernate from '../icons/hibernate.svg'
import Material from '../icons/material.svg'
import Springio from '../icons/springio.svg'
import Bootstrap from '../icons/bootstrap.svg'
import Css from '../icons/css3.svg'
import Html from '../icons/html.svg'
import Reactjs from '../icons/reactjs.svg'
import Mysql from '../icons/mysql.svg'
import Javascript from '../icons/javascript.svg'
import Java from '../icons/java.svg'
import Route53 from '../icons/route53.svg'
import S3 from '../icons/s3.svg'
import Cloudfront from '../icons/cloudfront.svg'
import Python from '../icons/python.svg'
import Redux from '../icons/redux.svg'
import Wrightstate from '../icons/wrightState.svg'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiThemeProvider, createMuiTheme }  from "@material-ui/core/styles";
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

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  const theme = createMuiTheme({
    palette: {
      primary: {main: '#9389e2'},
      secondary: {main: '#84ffff'}
    },
  });
  
  const work = [
      {'company': 'Tata Consultancy Services', 'title' : 'Software Engineer', 'location' : 'Milford, OH' , 'duration' : 'Aug 2019 - Present',
      'description': [
        'Trained for 8 weeks as a full stack developer using Java, Spring Boot, Hibernate, Angular and MySQL. Since completing the training I’ve worked on personal projects using ReactJS, Redux, Material UI, Bootstrap, MySQL, and AWS.'
    ],
       'bulletPoints' : 
      ['']},
      {'company': 'Marxent Labs',  'title' : 'Data Specialist', 'location' : 'Miamisburg, OH' , 'duration' : 'Jan 2019 - Aug 2019',
      'description':  ['I worked in an AGILE/SCRUM environment where I would get client specific information from BA’s, worked with the Development team regarding spec sheets for the data and would ensure clean data was entered as needed and on time as dictated by the project manager.',
],
'bulletPoints' : 
      ['']},
      
      {'company': 'Reynolds & Reynolds', 'title' : 'Software Support Specialist', 'location' : 'Kettering, OH' ,'duration' : 'Mar 2014 - Jan 2019',
        'description': ['I would help customers and write reports to development regarding issues with the software. I created and maintained an Access Database that tracks employee time off and was used by all managers in my department.'], 
      'bulletPoints' : ['']}]

    const technologiesFE = [
        {'technology': 'React.js', 'svg': Reactjs},
        {'technology': 'Material UI', 'svg': Material},
        {'technology': 'Bootstrap', 'svg': Bootstrap},
        {'technology': 'JavaScript', 'svg': Javascript},
        {'technology': 'CSS', 'svg': Css},
        {'technology': 'HTML', 'svg': Html},
        {'technology': 'Redux', 'svg': Redux},
    ]

    const technologiesBE = [
        {'technology': 'Java', 'svg': Java},
        {'technology': 'AWS: Cloudfront', 'svg': Cloudfront},
        {'technology': 'AWS: Route 53', 'svg': Route53},
        {'technology': 'AWS: S3', 'svg': S3},
        {'technology': 'Python', 'svg': Python},
        {'technology': 'Hibernate', 'svg': Hibernate},
        {'technology': 'MySQL', 'svg': Mysql},
        {'technology': 'Spring Boot', 'svg': Springio},
    ]
  
  const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        minHeight: '92vh',
        backgroundColor: '#c6f1e0',
        boxShadow: 'none',
        alignItems: 'center',
    },
    listItemText:{
        fontSize:'0.1em',
      },
    title : {
        fontSize: 15,
    },
    titleMobile : {
        fontSize: 10,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
    tabs: {
        borderRight: `0px solid ${theme.palette.divider}`,
        marginTop: 60,
        marginBottom: 60,
        marginRight: 20,
        color: '#9e9e9e',  
        fontSize: '14px',
    },
    tabsMobile: {
        borderRight: `0px solid ${theme.palette.divider}`,
        marginTop: 70,
        marginBottom: 70,
        paddingRight: 27,
        paddingLeft: 20,
        color: '#9e9e9e',  
        fontSize: '10px',
    },
    paperContainer: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        width: '60vw',
        paddingTop: '2vh',
    },
    paperContainerLeft: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        width: '20vw',
        overflow: 'hidden',
    },
    paperContainerRight: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        width: '40vw',
        minHeight: '20vh',
        overflow: 'hidden',
    },
    paperContainerMobile: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    paperContainerLeftMobile: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    paperContainerRightMobile: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        overflow: 'hidden',
    },
    paperContainerContact: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        maxHeight: '80vh',
    },
    buttonContainer: {
        backgroundColor: 'transparent',
    },
    devIconStyle: {
        height: "20px",
        margin: "auto",
    },
    devIconStyleMobile: {
        height: "15px",
        margin: "auto",
    },
    schoolIconStyle: {
        height: "200px",
        margin: "auto",
        opacity: 0.75,
    },
    schoolIconStyleMobile: {
        height: "95px",
        margin: "auto",
        opacity: 0.75,
    },
    card: {
        width: 450,
    },
    educationFont: {
        paddingLeft: '10px',
        paddingRight: '10px',
        fontFamily: 'EB Garamond',
        fontSize: '24px',
        fontStyle: 'italic',
        fontWeight: 500,
        color: '#9e9e9e',
    },
    educationFontMobile: {
        fontFamily: 'EB Garamond',
        fontSize: '12px',
        fontStyle: 'italic',
        fontWeight: 300,
        color: '#9e9e9e'
    },
    tabPosition: {
        position: 'absolute',
    },
    description: {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        color: '#9e9e9e'
    },
    descriptionMobile: {
        fontFamily: 'Montserrat',
        fontSize: '10px',
        color: '#9e9e9e'
    },
    company: {
        fontFamily: 'Montserrat',
        fontSize: '19px',
        color: '#9389e2',
        fontWeight: 'bold',
    },
    companyMobile: {
        fontFamily: 'Montserrat',
        fontSize: '11px',
        color: '#9389e2',
        fontWeight: 'bold',
    },
    duration: {
        fontFamily: 'Montserrat',
        fontSize: '13px',
        color: '#9e9e9e',
    },
    durationMobile: {
        fontFamily: 'Montserrat',
        fontSize: '9px',
        color: '#9e9e9e',
    },
    jobTitle: {
        fontFamily: 'Montserrat',
        fontSize: '15px',
        color: '#9389e2',
        fontWeight: 'bold',
    },
    jobTitleMobile: {
        fontFamily: 'Montserrat',
        fontSize: '10px',
        color: '#9389e2',
        fontWeight: 'bold',
    },
  }));
  
 function VerticalTabs({screen}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
<MuiThemeProvider theme={theme}>
    <div className={classes.root}>
        {screen.screenWidth > 700 ? 
            <Tabs 
                orientation="vertical"
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab className={classes.tabs} label="Technologies" {...a11yProps(0)} />
                <Tab className={classes.tabs} label="Education" {...a11yProps(1)} />
                <Tab className={classes.tabs} label="Work Experience" {...a11yProps(2)}  />

            </Tabs>
            :
            <Tabs 
                orientation="vertical"
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab className={classes.tabsMobile} label="Technologies" {...a11yProps(0)} />
                <Tab className={classes.tabsMobile} label="Education" {...a11yProps(1)} />
                <Tab className={classes.tabsMobile} label="Work Experience" {...a11yProps(2)}  />
            </Tabs>
        }
        <Container maxWidth='lg' disableGutters>
            <TabPanel value={value} index={0} >
                {screen.screenWidth > 600 ?
                <Grid container direction="row" justify="center" spacing={10} >
                    <Grid item>
                        <Card className={classes.card} >
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Front End
                                </Typography>
                                <List dense={true}>
                                    <Grid container direction="row">
                                    {technologiesFE.map((tech) =>
                                        <Grid item xs={6}>
                                            <ListItem  disableGutters={true}>
                                                <ListItemIcon >
                                                    <img src={tech.svg} alt="" className={classes.devIconStyle}></img>
                                                </ListItemIcon>
                                                <ListItemText primary={tech.technology} /> 
                                            </ListItem>
                                        </Grid>
                                    )}
                                    </Grid>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Back End
                                </Typography>
                                <List dense={true}>
                                    <Grid container direction="row">
                                    {technologiesBE.map((tech) =>
                                        <Grid item xs={6}>
                                            <ListItem  disableGutters={true}>
                                                <ListItemIcon >
                                                    <img src={tech.svg} alt="" className={classes.devIconStyle}></img>
                                                </ListItemIcon>
                                                <ListItemText  primary={tech.technology} /> 
                                            </ListItem>
                                        </Grid>
                                    )}
                                    </Grid>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                :
                <Grid container direction="row" justify="center" spacing={5} >
                    <Grid item>
                        <Card >
                            <CardContent>
                                <Typography className={classes.titleMobile} color="textSecondary" gutterBottom>
                                    Front End
                                </Typography>
                                <List dense={true}>
                                    <Grid container direction="row">
                                    {technologiesFE.map((tech) =>
                                        <Grid item xs={6} >
                                            <ListItem  disableGutters={true}>
                                                <Typography className={classes.titleMobile}>
                                                    <ListItemText disableTypography={true} primary={tech.technology} /> 
                                                </Typography>
                                            </ListItem>
                                        </Grid>
                                    )}
                                    </Grid>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card >
                            <CardContent>
                                <Typography className={classes.titleMobile} color="textSecondary" gutterBottom>
                                    Back End
                                </Typography>
                                <List dense={true}>
                                    <Grid container direction="row">
                                    {technologiesBE.map((tech) =>
                                        <Grid item xs={6}>
                                            <ListItem  disableGutters={true}>
                                                <Typography className={classes.titleMobile}>
                                                    <ListItemText disableTypography={true} primary={tech.technology} /> 
                                                </Typography>
                                            </ListItem>
                                        </Grid>
                                    )}
                                    </Grid>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                }
            </TabPanel>
            <TabPanel value={value} index={1}  >
                {screen.screenWidth > 600 ?
                    <Grid container direction="column" justify="center" alignItems="center" >
                    <Grid item>  
                        <Box container>
                            <img src={Wrightstate} alt="" className={classes.schoolIconStyle}></img>                            
                        </Box>  
                    </Grid>
                    <Grid item >
                        <Box container mt={5}>                            
                            <Typography className={classes.educationFont}>B.S.B - Management Information Systems</Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box container>                            
                            <Typography className={classes.educationFont}>Graduated - December 2018</Typography>
                        </Box> 
                    </Grid>
                    <Grid item>
                        <Box container>                            
                            <Typography className={classes.educationFont}>GPA - 3.81/4.00</Typography>
                        </Box> 
                    </Grid>
                </Grid>
                :
                <Grid container direction="column" justify="center" alignItems="center" >
                    <Grid item>  
                        <Box container>
                            <img src={Wrightstate} alt="" className={classes.schoolIconStyleMobile}></img>                            
                        </Box>  
                    </Grid>
                    <Grid item >
                        <Box container mt={5}>                            
                            <Typography className={classes.educationFontMobile}>B.S.B - Management Information Systems</Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box container>                            
                            <Typography className={classes.educationFontMobile}>Graduated - December 2018</Typography>
                        </Box> 
                    </Grid>
                    <Grid item>
                        <Box container>                            
                            <Typography className={classes.educationFontMobile}>GPA - 3.81/4.00</Typography>
                        </Box> 
                    </Grid>
                </Grid>
                }
            </TabPanel >
            <TabPanel value={value} index={2} >
                {screen.screenWidth > 600 ?
                <Box pt={7}> 
                    {work.map((job, i) =>  
                        <Box pl={1}    > 
                            <Paper className={classes.paperContainer}> 
                                <Grid container direction='row'>
                                    <Paper className={classes.paperContainerLeft}>
                                        <Grid direction='column' container justify="flex-start">
                                            <Box container pr={4}>
                                                <Typography className={classes.company} >{job.company}</Typography>
                                            </Box>
                                            <Box container pt={1} pr={4}>
                                                <Typography className={classes.duration} >{job.duration}</Typography>
                                            </Box>
                                        </Grid>
                                    </Paper> 
                                    <Paper className={classes.paperContainerRight}>
                                        <Box pb={1}>
                                            <Typography className={classes.jobTitle} >{job.title}</Typography>
                                        </Box>
                                        {job.description.map((desc, i) =>    
                                            <Typography className={classes.description} key={i}>
                                                <Box pb={1}>
                                                    {desc}
                                                </Box>
                                            </Typography>
                                        )}
                                    </Paper>
                                </Grid>
                            </Paper>
                        </Box> 
                    )}
                </Box> 
                :
                <Box pt={1}> 
                    {work.map((job, i) =>  
                        <Box pb={2} > 
                            <Paper className={classes.paperContainerMobile}> 
                                <Grid container direction='row'>
                                    <Paper className={classes.paperContainerLeftMobile}>
                                        <Grid direction='column' container >
                                            <Box pb={1} container >
                                                <Typography className={classes.companyMobile} >{job.company} - {job.title}</Typography>
                                            </Box>
                                            <Box pb={2}  container >
                                                <Typography className={classes.durationMobile} >{job.duration}</Typography>
                                            </Box>
                                        </Grid>
                                    </Paper> 
                                    <Paper className={classes.paperContainerRightMobile}>
                                        {job.description.map((desc, i) =>    
                                            <Typography className={classes.descriptionMobile} key={i}>
                                                <Box pb={1}>
                                                    {desc}
                                                </Box>
                                            </Typography>
                                        )}
                                    </Paper>
                                </Grid>
                            </Paper>
                        </Box> 
                    )}
                </Box> 
                }
            </TabPanel>
        </Container>
    </div>
    </MuiThemeProvider>
    );
  }

  function mapStateToProps(state) {
    return { screen: state.screenSizeReducer.screen }
  }

  export default connect(mapStateToProps)(VerticalTabs)