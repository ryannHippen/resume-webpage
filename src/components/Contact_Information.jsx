import React, { Component } from 'react';
import { Box, Grid, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import ResumeContact from './ResumeContact'
import ResumeContactMobile from './ResumeContactMobile'
import { MuiThemeProvider, createMuiTheme }  from "@material-ui/core/styles";


class ContactInformation extends Component{

     theme = createMuiTheme({
        palette: {
          primary: {main: '#FCF8D2'},
          secondary: {main: '#84ffff'}
        },
      });

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render(){

        const theme = createMuiTheme({
            palette: {
              primary: {main: '#FCF8D2'},
              secondary: {main: '#84ffff'}
            },
          });
          
        const styles = {
            paperContainer: {
                minHeight: '92vh',
                width: '100vw',
                overflow: 'hidden',
                backgroundColor: '#94BFFA',
                boxShadow: 'none',  
                paddingTop: '8vh',
                // paddingBottom: '20vh',
            },
            paperContainerContact: {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                // maxHeight: '80vh',
            },
          };

        return (
            <MuiThemeProvider theme={theme}>
            <Paper style={styles.paperContainer}>
                {this.props.screen.screenWidth > 600 ? 
                    <Box pt={5}>
                        <ResumeContact /> 
                    </Box>
                    :
                    <Paper style={styles.paperContainerContact}>
                        <Box>
                            <ResumeContactMobile /> 
                        </Box> 
                    </Paper>
                }
            </Paper>
            </MuiThemeProvider>
        )
    }
}
function mapStateToProps(state) {
    return { screen: state.screenSizeReducer.screen }
  }

  export default connect(mapStateToProps)(ContactInformation)