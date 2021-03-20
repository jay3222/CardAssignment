import React from 'react';
import {
        Grid,
        Typography,
        Card,
        CardActionArea,
        CardMedia,
        CardContent,
        Box
        } from "@material-ui/core";



      
const CardUi= (props) => {
  
    return (
        <>
      

       
            <Grid container spacing={10}>
                <Grid item >
            <Card component={Box} width="100%">
            <CardActionArea>
           
            <CardMedia
        image={props.img}
        component="img"
        title="user one"
            />
           
                <CardContent>
                    <Typography variant="h5" color="secondary">UserId:{props.id}</Typography>
                    <Typography variant="h6">Name:{props.name}</Typography>
                    <Typography variant="h6">Email:{props.email}</Typography>
                    <Typography variant="h6">Phone No:{props.phone}</Typography>
                    <Typography variant="h6">Website:{props.website}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Grid>
            </Grid>
      

        </>
    )
}

export default CardUi;
