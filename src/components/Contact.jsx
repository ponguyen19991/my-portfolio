import React, { useRef } from 'react';
import { Box, Stack, TextField, Typography, Grid, Button } from '@mui/material'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMdMail, IoMdSend } from "react-icons/io";
import { SnackbarProvider, useSnackbar } from 'notistack';

import '../assets/css/Contact.scss'

import emailjs from '@emailjs/browser';

const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();

  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs
      .sendForm('service_psxjoyw', 'template_p26yi6g', form.current, {
        publicKey: 'QWKxOVwBU74Ka3O_I',
        
      }, {
        // Thêm phạm vi xác thực cần thiết
        emailjs: 'send' 
      })
      .then(
        () => {
          enqueueSnackbar('Send Success!', { variant: 'success' });
        },
        (error) => {
          enqueueSnackbar('Send failed, please try again later!', { variant: 'error' });
        },
      );
  };
  
  const handleClickVariant = (variant) => () => {
    enqueueSnackbar('This is a success message!', { variant });
  };


  return (
    <Box>
       <div className='content'>
        <Typography variant="h6" component="h2" sx={{ fontWeight: '550', borderBottom: '2px solid var(--text-color)', display: 'inline-block' }}>
          Get in Touch!
        </Typography>
        <Typography variant='p' component="p" sx={{ mt: 2, mb: 1, fontWeight: '550', color: "#989898" }}>
          Hello! I'm delighted that you're interested in my work and would like to connect. Whether you're seeking collaboration opportunities, want to discuss a project, or simply wish to chat, please get in touch with me! Here are a few ways you can reach out:
        </Typography>
      </div>
      <div className='contactInfo'>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', textAlign: 'center', color: 'var(--text-color)', mt: 5, mb: 5 }}>
          <Box>
          <div style={{ display: 'inline-block', marginBottom: '20px' }}>
            <div className='border'>
              <FaLocationDot style={{ fontSize: '20px', transform: 'rotate(-45deg)' }} />
            </div>
          </div>
            <Typography variant="body1">Mai Dich, Cau Giay, Ha Noi</Typography>
          </Box>
          <Box>
          <div style={{ display: 'inline-block', marginBottom: '20px' }}>
            <div className='border'>
              <FaPhone style={{ fontSize: '20px', transform: 'rotate(-45deg)' }} />
            </div>
          </div>
            <Typography variant="body1">032 868 4229</Typography>
          </Box>
          <Box>
          <div style={{ display: 'inline-block', marginBottom: '20px' }}>
            <div className='border'>
              <IoMdMail style={{ fontSize: '20px', transform: 'rotate(-45deg)' }} />
            </div>
          </div>
            <Typography variant="body1">nguyen.phamthanh201299@gmail.com</Typography>
          </Box>
        </Box>
      </div>
      <div className='putInBox'>
        <Typography variant="h6" component="h2" sx={{ fontWeight: '550' }}>
          Send message
        </Typography>
        <Box sx={{ padding: '30px' }}>
        <form ref={form} onSubmit={sendEmail}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField 
              name="user_name"
              label="Name" 
              fullWidth 
              sx={{ 
                '& .MuiInputLabel-root': { 
                  color: 'var(--text-color)', 
                },
                '& .MuiOutlinedInput-root': { 
                  '& fieldset': { 
                    borderColor: 'var(--text-color)', 
                  },
                  '& input': { 
                    color: 'var(--text-color)', 
                  },
                },
              }} 
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              name="user_email"
              label="Email" 
              fullWidth 
              sx={{ 
                '& .MuiInputLabel-root': { 
                  color: 'var(--text-color)', 
                },
                '& .MuiOutlinedInput-root': { 
                  '& fieldset': { 
                    borderColor: 'var(--text-color)', 
                  },
                  '& input': { 
                    color: 'var(--text-color)', 
                  },
                },
              }} 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              name="message"
              label="Message" 
              fullWidth 
              multiline 
              rows={4} 
              sx={{ 
                '& .MuiInputLabel-root': { 
                  color: 'var(--text-color)', 
                },
                '& .MuiOutlinedInput-root': { 
                  '& fieldset': { 
                    borderColor: 'var(--text-color)', 
                  },
                  '& input': { 
                    color: 'var(--text-color)', 
                  },
                },
                '& textarea': {
                  color: 'var(--text-color)',
                }
              }} 
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              
              sx={{
                background: 'linear-gradient(to right, #F44958, #E42F6D)',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                color: '#fff',
                borderRadius: "6px",
                fontSize: '15px',
                fontWeight: 'bold',
                padding: '10px 20px',
                width: '110px',
                height: '45px',
                margin: '0 auto',
                mt: 2,
              }}
            >
              SEND 
            </Button>
          </Grid>
        </Grid>
      </form>
        </Box>
      </div>
    </Box>
  )
}

export default Contact
