import React, { Component } from 'react';
import { Typography, Grid, Paper, Box, Divider } from '@material-ui/core';
import { connect } from 'react-redux';

class Home extends Component{

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render(){
        const styles = {
            paperContainer: {
                minHeight: '92vh',
                width: '50vw',
                overflow: 'hidden',
                backgroundColor: '#D1F2EB',
                boxShadow: 'none',  
                paddingTop: '20vh',
                paddingBottom: '20vh',
            },
            nameFont: {
                fontSize: '150px',
                fontFamily: 'Sirin Stencil',
                color: '#9e9e9e',
                textShadow: '8px -5px 0px #f48fb1',
                marginTop: '-25px',
            },
            occupationFont:{
                fontFamily: 'Montserrat',
                fontSize: '23px',
                marginTop: '10px',
                paddingLeft: '13vw',
                color: '#9e9e9e',
                fontWeight: 'bold',
                textShadow: '-1px -1px 0 #FCF8D2, 1px -1px 0 #FCF8D2, -1px 1px 0 #FCF8D2, 1px 1px 0 #FCF8D2'
            },
            introFont: {
                fontFamily: 'Montserrat',
                fontSize: '25px',
                fontWeight: 'bold',
            },
            paperContainerMobile: {
                minHeight: '92vh',
                width: '100vw',
                backgroundColor: '#D1F2EB',
                boxShadow: 'none',  
                paddingTop: '20vh',
                paddingBottom: '20vh',
            },
            nameFontMobile: {
                fontSize: '50px',
                fontFamily: 'Sirin Stencil',
                color: '#9e9e9e',
                textShadow: '3px -3px 0px #f48fb1',
            },
            occupationFontMobile:{
                fontFamily: 'Montserrat',
                fontSize: '18px',
                marginTop: '10px',
                color: '#9e9e9e',
                fontWeight: 'bold',
                textShadow: '-1px -1px 0 #FCF8D2, 1px -1px 0 #FCF8D2, -1px 1px 0 #FCF8D2, 1px 1px 0 #FCF8D2'
            },
            introFontMobile: {
                fontFamily: 'Montserrat',
                fontSize: '14px',
                fontWeight: 'bold',
            },
          };

        return (
            <div>
                {this.props.screen.screenWidth > 700 ?
                    <Grid container direction="row" alignItems="center"    >
                        <Paper style={styles.paperContainer}>
                            <Grid container direction="row" justify="flex-end" alignItems="center" >
                                <Grid item>  
                                    <Box container>
                                        <Typography style={styles.nameFont}>
                                            Ryann 
                                        </Typography>
                                        <Typography style={styles.nameFont}>
                                            Hippen 
                                        </Typography>
                                        <Typography style={styles.occupationFont}>
                                            Web Developer 
                                        </Typography>                         
                                    </Box>  
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper style={styles.paperContainer}>
                            <Grid container direction="row" justify="flex-start" alignItems="center" >
                                <Grid item xs={8}>
                                    <Box container pl={6} pt={11}>                            
                                        <Typography style={styles.introFont}>
                                            Hi. I have a passion for development and always looking for 
                                            creative and challenging projects to expand my knowledge and skills. 
                                            If you have any projects please contact me!
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    :
                    <div>
                        <Paper style={styles.paperContainerMobile}>
                            <Grid container direction="column" justify="center">  
                                <Typography style={styles.nameFontMobile} align="center">
                                    Ryann Hippen
                                </Typography>
                                <Typography style={styles.occupationFontMobile} align="center"> 
                                    Web Developer 
                                </Typography>    
                            </Grid>
                            <Grid container direction="row" justify="center">
                                <Box mt={3} mb={3} width="75%">
                                    <Divider />              
                                </Box>
                                <Box  width="75%">        
                                    <Typography style={styles.introFontMobile} align="center">
                                        Hi. I have a passion for development and always looking for 
                                        creative and challenging projects to expand my knowledge and skills. 
                                        If you have any projects please contact me!
                                    </Typography>
                                </Box>
                            </Grid>
                        </Paper>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { screen: state.screenSizeReducer.screen }
  }

  export default connect(mapStateToProps)(Home)