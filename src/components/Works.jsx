import { Box, Typography, Card, CardActions, CardContent, CardMedia, Button, Stack, Chip, Dialog, DialogTitle, DialogContent, DialogActions, Avatar  } from '@mui/material'
import React, { useState } from 'react'
import { CgMediaLive, CgDetailsMore  } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";
import thailogo from '../assets/images/ThaiLogo.png'
import device from '../assets/images/deviceLogo.png'
import thaiFood from '../assets/images/thaiFood.jpg'

const Works = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    
  };

  const projectThai = 'https://thai-food.vercel.app';
  const handleProjectThaiClick = () => {
    window.open(projectThai, '_blank'); 
}; 


  return (
    <Box>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: '550', borderBottom: '2px solid var(--text-color)', display: 'inline-block', mb: 2 }}>
            My Projects
        </Typography>
      </Box>
      <Stack direction='row' spacing={2}>
        <Card onClick={handleClickOpen} sx={{ minWidth: 375, background: 'var(--background-project-work)', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', cursor: 'pointer', 
                    transition: '0.2s ease-in',
                    '&:hover': {
                      background: 'rgba(0, 0, 0, 0.03)',
                    }, }}>
          <CardContent>
            <Typography variant='p' component="p" sx={{ fontWeight: '550', color: "#96969E", mb: 2, mt: 1 }}>
              August 3,2024
            </Typography>
            <img src={thailogo} alt="thai logo" width={70} />
            <Typography variant="h6" component="h2" sx={{ fontWeight: '550', mt: 1, mb: 2 }}>
              Thai Food
            </Typography>
            <Typography variant='p' component="p" sx={{ fontWeight: '550', color: "#96969E",  mt: 2, mb: 2  }}>
              Celebrate the essence of Thai cuisine with us. Dive into a world of rich flavors, vibrant spices, and irresistible aromas. From classic dishes to street food delights, embark on a culinary journey that will tantalize your taste buds.
            </Typography>
            <Stack direction="row" spacing={2} sx={{  flexWrap: 'wrap' }}>
              <Chip className='tags' label="HTML5"  onClick={handleClick} />
              <Chip className='tags' label="CSS3"  onClick={handleClick} />
              <Chip className='tags' label="SCSS"  onClick={handleClick} />
              <Chip className='tags' label="Javascript"  onClick={handleClick} />
              <Chip className='tags' label="ReactJs"  onClick={handleClick} />
              <Chip className='tags' label="Material UI"  onClick={handleClick} />
            </Stack>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={2} sx={{  flexWrap: 'wrap', mt: 2 }}>

              <Button
                onClick={handleProjectThaiClick}
                sx={{
                  background: 'linear-gradient(to right, #F44958, #E42F6D)',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                  color: '#fff',
                  borderRadius: '16px',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  padding: '10px 10px',
                  width: '80px',
                  height: '40px',
                  
                }}
              >
                Live <CgMediaLive style={{ marginLeft: '5px', fontSize: '17px' }}/>
              </Button>
              <Button
                onClick={handleClickOpen}
                sx={{
                  background: 'var(--details-box)',
                  color: 'var(--details-text)',
                  borderRadius: '16px',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  padding: '10px 10px',
                  width: '150px',
                  height: '40px',
                  '&:hover': {
                    background: 'var(--hover) !important',
                  },
                }}
              >
                See Details <CgDetailsMore style={{ marginLeft: '5px', fontSize: '20px' }}/>
              </Button>
            </Stack>

          </CardActions>
        </Card>
        <Dialog sx={{
                      '& .MuiDialog-paper': {
                        width: '550px',
                        background: 'var(--background-color)',
                        borderRadius: '15px'
                      },
                    }} 
                    open={open} 
                    onClose={handleClose}>
          <DialogTitle>
            <Typography variant="h6" component="h2" sx={{ fontWeight: '550', mb: 1, mt: 1 }}>
              Project Details
            </Typography>
          </DialogTitle>
            <DialogContent>
              <img src={thaiFood} alt="thai" width={500} style={{ borderRadius: "10px", marginBottom: '10px' }}/>

              <Box>
                <Typography variant='p' component="p" sx={{ fontWeight: '550', color: "#989898", mt: 1, mb: 1 }}>
                  Description
                </Typography>
                <Typography variant='p' component="p" sx={{ fontWeight: '550',  mb: 5, color: 'var(--text-color)' }}>
                  The 'Thai Food' project is a web application that
                  showcases Thai cuisine, providing users with an immersive experience
                  to explore authentic Thai dishes and detailed information about each
                  dish. With a visually appealing and interactive interface, users can
                  learn, discover, and share their favorite Thai dishes through this
                  application
                </Typography>
              </Box>
              <Box>
                <Typography variant='p' component="p" sx={{ fontWeight: '550', color: "#989898", mb: 1 }}>
                  Tags
                </Typography>
                <Stack direction="row" spacing={2} sx={{  flexWrap: 'wrap', mb: 5 }}>
                  <Chip className='tags' label="Project"  onClick={handleClick} />
                  <Chip className='tags' label="Ongoing"  onClick={handleClick} />
                  <Chip className='tags' label="Hobby"  onClick={handleClick} />
                </Stack>
              </Box>
              <Box>
                <Stack direction="row" spacing={15} sx={{  flexWrap: 'wrap', mb: 5 }}>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <FaRegClock style={{ fontSize: '23px', marginRight: '5px', color: '#989898' }}/>
                      <Typography variant='p' component="p" sx={{ fontWeight: '550', color: "#989898" }}>
                        Started
                      </Typography>
                    </Box>
                    <Typography variant='p' component="p" sx={{ fontWeight: '550', color: 'var(--text-color)'  }}>
                      November 2023
                    </Typography>
                  </Box>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <FaRegClock style={{ fontSize: '23px', marginRight: '5px', color: '#989898' }}/>
                      <Typography variant='p' component="p" sx={{ fontWeight: '550', color: "#989898" }}>
                        Due Date
                      </Typography>
                    </Box>
                    <Typography variant='p' component="p" sx={{ fontWeight: '550', color: 'var(--text-color)' }}>
                      present
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Box>
                <Typography variant='p' component="p" sx={{ fontWeight: '550', color: "#989898", mb: 1 }}>
                  Author
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ background: "#333", marginRight: '5px' }} aria-label="recipe">
                    N
                  </Avatar>
                  <Typography variant='p' component="p" sx={{ fontWeight: '550', color: 'var(--text-color)'  }}>
                    Pham Thanh Nguyen Bui
                  </Typography>
                </Box>
              </Box>
            </DialogContent>
          <DialogActions>
            <Button sx={{ background: 'linear-gradient(108.4deg, rgb(253, 44, 56) 3.3%, rgb(176, 2, 12) 98.4%)', color: '#fff', fontWeight: 550 }} onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>

        <Card sx={{ minWidth: 375, background: 'var(--background-project-work)', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', cursor: 'pointer', 
                    transition: '0.2s ease-in',
                    '&:hover': {
                      background: 'rgba(0, 0, 0, 0.03)',
                    }, }}>
          <CardContent>
            <Typography variant='p' component="p" sx={{ fontWeight: '550', color: "#96969E", mb: 2, mt: 1 }}>
              August 3,2024
            </Typography>
            <img src={device} alt="thai logo" width={70} />
            <Typography variant="h6" component="h2" sx={{ fontWeight: '550', mt: 1, mb: 2 }}>
              Device Manager
            </Typography>
            <Typography variant='p' component="p" sx={{ fontWeight: '550', color: "#96969E",  mt: 2, mb: 2  }}>
              Introducing Device Manager – your comprehensive solution for efficient device management. Seamlessly oversee all your devices, track their status, and manage their configurations effortlessly.
            </Typography>
            <Stack direction="row" spacing={2} sx={{  flexWrap: 'wrap' }}>
                  <Chip className='tags' label="HTML5"  onClick={handleClick} />
                  <Chip className='tags' label="CSS3"  onClick={handleClick} />
                  <Chip className='tags' label="SCSS"  onClick={handleClick} />
                  <Chip className='tags' label="Javascript"  onClick={handleClick} />
                  <Chip className='tags' label="ReactJs"  onClick={handleClick} />
                  <Chip className='tags' label="Material UI"  onClick={handleClick} />
                  <Chip className='tags' label="NodeJs"  onClick={handleClick} />
                </Stack>
          </CardContent>
          <CardActions>
            <Stack direction="row" spacing={2} sx={{  flexWrap: 'wrap', mt: 2 }}>

              <Button
                sx={{
                  background: 'linear-gradient(to right, #F44958, #E42F6D)',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                  color: '#fff',
                  borderRadius: '16px',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  padding: '10px 10px',
                  width: '80px',
                  height: '40px',
                  
                }}
              >
                Live <CgMediaLive style={{ marginLeft: '5px', fontSize: '17px' }}/>
              </Button>
              <Button
                sx={{
                  background: 'var(--details-box)',
                  color: 'var(--details-text)',
                  borderRadius: '16px',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  padding: '10px 10px',
                  width: '150px',
                  height: '40px',
                  '&:hover': {
                    background: 'var(--hover) !important',
                  },
                }}
              >
                See Details <CgDetailsMore style={{ marginLeft: '5px', fontSize: '20px' }}/>
              </Button>
            </Stack>

          </CardActions>
        </Card>
      </Stack>
    </Box>
  )
}

export default Works
