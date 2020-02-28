import React, { Component } from 'react';
import { Box, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import ResumeContact from './ResumeContact'
import ResumeContactMobile from './ResumeContactMobile'
import ResumeContactMobileHZ from './ResumeContactMobileHZ'
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
                minHeight: '93vh',
                width: '100vw',
                overflow: 'hidden',
                backgroundColor: '#B1D0FB',
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
                {this.props.screen.screenWidth > 600 & this.props.screen.screenHeight > 600 ? 
                    <Box pt={0}>
                        <ResumeContact /> 
                    </Box>
                    : 
                    null
                }
                {this.props.screen.screenWidth < 600 && this.props.screen.screenWidth < this.props.screen.screenHeight ? 
                    <Paper style={styles.paperContainerContact}>
                    <Box>
                        <ResumeContactMobile /> 
                    </Box> 
                    </Paper>
                    : 
                    null
                }
                {this.props.screen.screenWidth < 825 && this.props.screen.screenWidth > this.props.screen.screenHeight ? 
                    <Paper style={styles.paperContainerContact}>
                    <Box>
                        <ResumeContactMobileHZ /> 
                    </Box> 
                    </Paper>
                    : 
                    null
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