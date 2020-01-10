import React, { Component } from 'react';
import { Typography, Grid, ButtonBase, Box, Button } from '@material-ui/core';


class ContactInformation extends Component{

    render(){
        return (
            <div>
                <Grid container direction="row" justify="center" alignItems="center"     >
                    <Grid item  xs={12} sm={6}>
                        <Typography align="center"></Typography>
                    </Grid>
                    <Grid item  xs={12} sm={6}>
                        <Typography align="center">Technologies Listed</Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ContactInformation;