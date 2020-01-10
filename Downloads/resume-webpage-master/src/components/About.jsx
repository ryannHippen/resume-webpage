import React, { Component } from 'react';
import { Typography, Grid, ButtonBase, Box, Button, Paper } from '@material-ui/core';

class About extends Component{

    componentDidMount() {
        
    }


    render(){
        const styles = {
            paperContainer: {
                height: '100vh',
                width: '100vw',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                boxShadow: 'none',
            }
          };
        return (
            <div>
                <Paper style={styles.paperContainer}>
                    <Grid container direction="row" justify="center" alignItems="center"     >
                        <Grid item  xs={12} sm={6}>
                            <Typography align="center"></Typography>
                        </Grid>
                        <Grid item  xs={12} sm={6}>
                            <Typography align="center">Technologies Listed</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default About;