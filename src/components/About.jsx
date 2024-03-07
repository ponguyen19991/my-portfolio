import React from 'react'
import { Tabs, Tab, Box, Typography, Grid } from '@mui/material'
import { MdOutlineScreenshotMonitor, MdApi, MdMobileScreenShare   } from "react-icons/md";
import { BsWindowFullscreen } from "react-icons/bs";
import '../assets/css/About.scss'


const About = () => {
  return (
    <Box>
      <div className='aboutMe'>
        <Typography variant="h6" component="h2" sx={{ fontWeight: '550', borderBottom: '2px solid var(--text-color)', display: 'inline-block' }}>
          About
        </Typography>
        <Typography variant='p' component="p" sx={{ mt: 2, mb: 1, fontWeight: '550', color: "#989898" }}>
           Hello! I'm a passionate front end developer dedicated to crafting unique and engaging web experiences. With solid experience and expertise in web development, I'm always seeking opportunities to showcase my creative abilities by building functional applications and user interfaces. Additionally, I continuously expand my knowledge to leverage the latest and most advanced technologies in this field. 
        </Typography>
        <Typography variant='p' component="p" sx={{ fontWeight: '550', color: "#989898", mb: 2 }}>
          Over the next 2-3 years, my goal is to enhance my Front-end Development skills. I aspire to build proficiency in creating captivating and high-quality user interfaces. Following this phase, I plan to broaden my horizons and elevate my knowledge and skills to become a proficient Fullstack expert. I believe that continuous growth and steadfast commitment will enable me to achieve my career goals. 
        </Typography>
      </div>
      <div className='whatIdo'>
        <Typography variant="h6" component="h2" sx={{ fontWeight: '550', borderBottom: '2px solid var(--text-color)', display: 'inline-block' }}>
          What I Do!
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ background: '#FFF4EC', p: 2, mt: 2, height: 200, borderRadius: '5px' }}>
            <MdOutlineScreenshotMonitor style={{ fontSize: '55px' }}/>
              <Typography variant="h5" sx={{ mb: 1 }}>Front-end Development</Typography>
              <Typography variant="p" sx={{ fontWeight: '550', color: "#989898" }}>
                Creation of interactive and responsive user interfaces using HTML, CSS, SCSS, JavasScript and ReactJs.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ background: '#FEDECC', p: 2, mt: 2, height: 200, borderRadius: '5px' }}>
            <MdApi style={{ fontSize: '55px' }}/>
              <Typography variant="h5" sx={{ mb: 1 }}>Back-end Development</Typography>
              <Typography variant="p" sx={{ fontWeight: '550', color: "#989898" }}>
                Building server-side applications and APIs using programming languages like NodeJs, Auth or Firebase (Still learning)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ background: '#FEDECC', p: 2, mt: 2, height: 200, borderRadius: '5px' }}>
            <BsWindowFullscreen style={{ fontSize: '55px' }}/>
              <Typography variant="h5" sx={{ mb: 1 }}>Full Stack Development</Typography>
              <Typography variant="p" sx={{ fontWeight: '550', color: "#989898" }}>
                Coming Soon!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ background: '#FFF4EC', p: 2, mt: 2, height: 200, borderRadius: '5px' }}>
            <MdMobileScreenShare style={{ fontSize: '55px' }}/>
              <Typography variant="h5" sx={{ mb: 1 }}>Responsive Design</Typography>
              <Typography variant="p" sx={{ fontWeight: '550', color: "#989898" }}>
                Ensuring website are optimized for various devices and screen sizes, providing a seamless user experience.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Box>
  )
}

export default About
