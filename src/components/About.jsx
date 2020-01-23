import React, { Component } from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';

class About extends Component{

    componentDidMount() {
        
    }


    render(){

        const styles = {
            paperContainer: {
                minHeight: '92vh',
                width: '100vw',
                overflowX: 'hidden',
                backgroundColor: '#DBA964',
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
                            <Typography align="center"></Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default About;