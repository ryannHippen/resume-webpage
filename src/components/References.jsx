import React, { Component } from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';

class References extends Component{

    render(){

        const styles = {
            paperContainer: {
                minHeight: '81vh',
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

export default References;