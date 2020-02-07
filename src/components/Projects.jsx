import React, { Component } from 'react';
import { Typography, Grid, Paper, Container } from '@material-ui/core';
import Carousel from './Carousel';

class Projects extends Component{

    render(){

        const styles = {
            paperContainer: {
                minHeight: '92vh',
                width: '100vw',
                overflowY: 'hidden',
                overflowX: 'hidden',
                backgroundColor: '#AEE1EB',
                boxShadow: 'none',
            }
          };

        return (
            <div>
                <Paper style={styles.paperContainer}>
                    {/* <Grid container direction="row" justify="center" alignItems="center"     >
                        <Grid item  xs={12} sm={6}>
                            <Typography align="center"></Typography>
                        </Grid>
                        <Grid item  xs={12} sm={6}>
                            <Typography align="center">Projects Listed</Typography>
                        </Grid>
                    </Grid> */}
                    <Carousel />
                </Paper>
            </div>
        )
    }
}

export default Projects;