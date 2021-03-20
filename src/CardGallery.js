import React,{useState,useEffect} from 'react';
import axios from "axios";
import Card from "./CardUi";
import userImage from "./Images/user1.png";

import {Container,
        Box,
        Paper,
        Typography,
        Grid,
        makeStyles
    }from "@material-ui/core";

    const useStyles=makeStyles((theme)=>({
        root:{
        width:"100vw",
        height:"100%",
        paddingTop:theme.spacing(5),
        backgroundColor:theme.palette.grey[200],
    
          },

        
        }))



const CardGallery=()=>{ 
    const classes=useStyles();

    const[user,setUser]=useState([]);

    useEffect(()=>{
        loadCardData();

    },[])
      const loadCardData=async()=>{
        const result= await axios.get(`https://jsonplaceholder.typicode.com/users`)
        console.log(result.data);
        setUser(result.data);
       
      }

      
       
    
    


    return(
       <>
       <Box className={classes.root}>
       <Container>
       <Paper component={Box} width="50%" py={3} my={3} pl={3}>
        <Typography variant="h4" color="secondary">User data:</Typography>
        </Paper>

        <Grid container  spacing={10}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
        {
          user.map((userData,ind)=>{
              return <Card
                    key={ind}
                    img={userImage}
                    id={userData.id}
                    name={userData.name}
                    email={userData.email}
                    phone={userData.phone}
                    website={userData.website}

                />
          })  
        }
        </Grid>
        </Grid>
       </Container>
       </Box>






    </>
    )
}

export default CardGallery;
