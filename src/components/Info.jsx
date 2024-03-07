import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';

import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaMapMarkerAlt, FaDownload  } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

function Info() {
  return (
    <Card sx={{
        backgroundColor: '#ffffff',
        borderRadius: '3px',
        width: '100%',
        backgroundColor: 'var(--background-box)'
      }}>
       <Box sx={{ padding: '35px', textAlign: 'center' }}>
            <CardMedia
                component="img"
                image={require("../assets/images/avatar.jpg")}
                sx={{
                    height: '250px',
                    width: '100%',
                    borderRadius: '2px' 
                }}
            />
             <CardContent>
                <Typography variant="h5" component="div" sx={{fontWeight: 'bold', color: 'var(--text-color)'}}>
                    Nguyen _ Bui
                </Typography>
                <Typography variant="small" component="div" sx={{color: '#B2B2B2', fontWeight: 'bold'}}>
                    Junior Front End Developer
                </Typography>
            </CardContent>
            <Grid container alignItems="center" justifyContent="center">
                <Box
                    sx={{
                        background: 'linear-gradient(to right, #F44958, #E42F6D)',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        padding: '3px',
                        width: '20px',
                        height: '20px',
                        borderRadius: '3px',
                        mr: 1,
                        cursor: 'pointer'
                    }}
                >
                <FaFacebookF/>
                </Box>
                <Box
                        sx={{
                            background: 'linear-gradient(to right, #F44958, #E42F6D)',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            padding: '3px',
                            width: '20px',
                            height: '20px',
                            borderRadius: '3px',
                            mr: 1,
                            cursor: 'pointer'
                        }}
                    >
                    <FaGithub/>
                </Box>
                <Box
                        sx={{
                            background: 'linear-gradient(to right, #F44958, #E42F6D)',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            padding: '3px',
                            width: '20px',
                            height: '20px',
                            borderRadius: '3px',
                            mr: 1,
                            cursor: 'pointer'
                        }}
                    >
                    <FaLinkedinIn />
                </Box>
                <Box
                        sx={{
                            background: 'linear-gradient(to right, #F44958, #E42F6D)',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            padding: '3px',
                            width: '20px',
                            height: '20px',
                            borderRadius: '3px',
                            mr: 1,
                            cursor: 'pointer'
                        }}
                    >
                    <FaXTwitter />
                </Box>
                <Box
                        sx={{
                            background: 'linear-gradient(to right, #F44958, #E42F6D)',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            padding: '3px',
                            width: '20px',
                            height: '20px',
                            borderRadius: '3px',
                            cursor: 'pointer'
                        }}
                    >
                    <FaYoutube/>
                </Box>
            </Grid>
        </Box>

        <Box sx={{background: "#F3F7F8", padding: '25px', textAlign: 'center'}}>
            <Grid container alignItems="center" >
                <Box
                    sx={{
                        background: "#fff",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                        borderRadius: '4px',
                        marginRight: '15px'
                    }}
                    >
                    <FaPhoneAlt style={{ color: '#A7AAA9' }} /> 
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: "left" }}>
                    <Typography variant="small" component="div" sx={{color: '#B2B2B2', fontWeight: 'bold', fontSize: "14px"}}>
                        Phone
                    </Typography>
                    <Typography variant="body1">032 868 4229</Typography>
                </Box>
            </Grid>

            <Grid container alignItems="center" sx={{ mt: 2 }}>
                <Box
                    sx={{
                        background: "#fff",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                        borderRadius: '4px',
                        marginRight: '15px'
                    }}
                    >
                    <RiMailSendLine style={{ color: '#92B2B8', fontSize: "20px" }} /> 
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: "left" }}>
                    <Typography variant="small" component="div" sx={{color: '#B2B2B2', fontWeight: 'bold', fontSize: "14px"}}>
                        Mail
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: "13px" }}>nguyen.phamthanh201299@gmail.com</Typography>
                </Box>
            </Grid>

            <Grid container alignItems="center" sx={{ mt: 2 }}>
                <Box
                    sx={{
                        background: "#fff",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                        borderRadius: '4px',
                        marginRight: '15px'
                    }}
                    >
                    <FaMapMarkerAlt  style={{ color: '#DA7CA1', fontSize: "18px" }} /> 
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: "left" }}>
                    <Typography variant="small" component="div" sx={{color: '#B2B2B2', fontWeight: 'bold', fontSize: "14px"}}>
                        Location
                    </Typography>
                    <Typography variant="body1">District 3, Ho Chi Minh</Typography>
                </Box>
            </Grid>

            <Grid container alignItems="center" sx={{ mt: 2 }}>
                <Box
                    sx={{
                        background: "#fff",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                        borderRadius: '4px',
                        marginRight: '15px'
                    }}
                    >
                    <MdOutlineDateRange style={{ color: '#E1CFE8', fontSize: "20px" }} /> 
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: "left" }}>
                    <Typography variant="small" component="div" sx={{color: '#B2B2B2', fontWeight: 'bold', fontSize: "14px"}}>
                        Birthday
                    </Typography>
                    <Typography variant="body1">20 Dec 1999</Typography>
                </Box>
            </Grid>
        </Box>


        <CardActions>
            <Button
                sx={{
                    background: 'linear-gradient(to right, #F44958, #E42F6D)',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                    color: '#fff',
                    borderRadius: "6px",
                    fontSize: '13px',
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    width: '180px',
                    height: '45px',
                    margin: '0 auto',
                    mt: 2,
                    mb: 2
                }}
            >
                <FaDownload style={{ marginRight: '10px' }} />
                DOWNLOAD CV
          </Button>
        </CardActions>
      </Card>
  )
}

export default Info
