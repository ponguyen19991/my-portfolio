import React, { useState } from 'react'
import { Tabs, Tab, Box, Typography, Stack, Accordion, AccordionSummary, AccordionDetails, Chip } from '@mui/material'

import { MdWorkHistory   } from "react-icons/md";
import { FaUserGraduate, FaCalendarAlt  } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";

import personal from "../assets/images/personal.jpg"
import logoUniver from "../assets/images/Logo-DH-Hoa-Binh-Peace-University.png"

import '../assets/css/Resume.scss'

const Resume = () => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };


  return (
    <Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: '550', borderBottom: '2px solid var(--text-color)', display: 'inline-block', mb: 2 }}>
          Qualification
        </Typography>
        <Typography variant='p' component="p" sx={{ fontWeight: '550', color: "#989898" }}>
          My personal journey
        </Typography>
      </Box>

      <Stack direction="row" justifyContent="space-around" alignItems="center" spacing={2} mt={2}>
        <Box >
          <img src={personal} alt="me" style={{ borderRadius: '5px' }}/>
          <Typography variant='p' component="p" sx={{ fontWeight: '550', color: "#989898", textAlign: 'center' }}>
            Pham Thanh Nguyen Bui
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Chip className='tags' label="2 years" onClick={handleClick} />
            <Typography variant='p' component="p" sx={{ fontWeight: '550', color: "var(--text-color)", textAlign: 'center', mt: 1, ml: 1 }}>
             Front End Developer
            </Typography>
          </Box>
        </Box>
        <Stack direction="column" spacing={6}>
          <Box>
            <Typography variant="h6" component="h2" sx={{ fontWeight: '550' }}>
              Education
            </Typography>
            <Accordion>
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ fontWeight: 'bold' }}
            >
              <Stack direction="column" spacing={1}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={11}>
                  <Box>
                    <IoSchoolSharp style={{ fontSize: '20px', marginRight: '7px' }}/> Hoa Binh University
                  </Box>
                  <Typography variant='p' component="p" sx={{ fontWeight: '550', color: "#989898", textAlign: 'center' }}>
                    07/2017 - 09/2021
                  </Typography>
                </Stack>
                <Box>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={11}>
                    <Typography variant='p' component="p" sx={{ fontWeight: '550', }}>
                      IT - Web Development
                    </Typography>
                    <Typography variant='p' component="p" sx={{ fontWeight: 'bold', color: "#0e5beb", textAlign: 'center' }}>
                      4 years
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </AccordionSummary>
              <AccordionDetails>
                <Stack direction="row" justifyContent="space-around" alignItems="center" spacing={1}>
                  <img src={logoUniver} alt="school" width={50}/>
                  <Box>
                    <Typography variant='p' component="p" sx={{ fontWeight: '550', }}>
                      Information Technology - Web Developer
                    </Typography>
                    <Typography variant='p' component="p" sx={{ fontWeight: 'bold', color: "#0e5beb", textAlign: 'center' }}>
                      Degree classication: Good - GPA: 3.2
                    </Typography>
                  </Box>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <Typography variant="h6" component="h2" sx={{ fontWeight: '550' }}>
              Work
            </Typography>
            
            <Stack direction="column" spacing={1}>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ fontWeight: 'bold' }}
                >
                  <Stack direction="column" spacing={1}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={9}>
                      <Box>
                        <MdWorkHistory style={{ fontSize: '20px', marginRight: '7px' }}/> Intern Web Developer
                      </Box>
                      <Typography variant='p' component="p" sx={{ fontWeight: '550', color: "#989898", textAlign: 'center' }}>
                        04/2021 - 07/2021
                      </Typography>
                    </Stack>
                    <Box>
                      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={11}>
                        <Typography variant='p' component="p" sx={{ fontWeight: '550', }}>
                          INET Solution
                        </Typography>
                        <Typography variant='p' component="p" sx={{ fontWeight: 'bold', color: "#0e5beb", textAlign: 'center' }}>
                          3 Months
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="p" component="p" sx={{ fontWeight: 'bold', fontSize: '19px',  mb: 1 }}>
                    Main responsibilities:
                  </Typography>
                  <Typography variant='p' component="p" sx={{ fontWeight: '550',  mb: 1 }}>
                    - Assisting in the development of web applications and websites using PHP programming language.
                  </Typography>
                  <Typography variant='p' component="p" sx={{ fontWeight: '550',  mb: 1 }}>
                    - Collaborating with the development team to understand project requirements and objectives.
                  </Typography>
                  <Typography variant='p' component="p" sx={{ fontWeight: '550',  mb: 2 }}>
                    - Learning and utilizing frameworks, libraries, and tools commonly used in PHP development, such as Laravel.
                  </Typography>
                  <Typography variant='p' component="p" sx={{ fontWeight: 'bold', color: "#0e5beb" }}>
                    Download my CV for more information!
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ fontWeight: 'bold' }}
                >
                  <Stack direction="column" spacing={1}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={5}>
                      <Box>
                        <MdWorkHistory style={{ fontSize: '20px', marginRight: '7px' }}/> Junior Frontend Developer
                      </Box>
                      <Typography variant='p' component="p" sx={{ fontWeight: '550', color: "#989898", textAlign: 'center' }}>
                        09/2021 - 10/2023
                      </Typography>
                    </Stack>
                    <Box>
                      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={11}>
                        <Typography variant='p' component="p" sx={{ fontWeight: '550', }}>
                          STECH Company
                        </Typography>
                        <Typography variant='p' component="p" sx={{ fontWeight: 'bold', color: "#0e5beb", textAlign: 'center' }}>
                          2 years
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="p" component="p" sx={{ fontWeight: 'bold', fontSize: '19px', mb: 1 }}>
                    Main responsibilities:
                  </Typography>
                  <Typography variant='p' component="p" sx={{ fontWeight: '550', mb: 1 }}>
                    - Developing responsive and user-friendly web applications using ReactJS and NextJS.
                  </Typography>
                  <Typography variant='p' component="p" sx={{ fontWeight: '550', mb: 1 }}>
                    - Analyze, code, review and refactoring code.
                  </Typography>
                  <Typography variant='p' component="p" sx={{ fontWeight: '550', mb: 1 }}>
                    - Implementing UI/UX designs and ensuring consistent user experience across different devices and browsers.
                  </Typography>
                  <Typography variant='p' component="p" sx={{ fontWeight: '550', mb: 1 }}>
                    - Working with APIs and integrating data from back-end services.
                  </Typography>
                  <Typography variant='p' component="p" sx={{ fontWeight: '550', mb: 1 }}>
                    - Handling and managing data flow and asynchronous operations using Axios or Fetch.
                  </Typography>
                  <Typography variant='p' component="p" sx={{ fontWeight: '550', mb: 2 }}>
                    - Working with version control systems (e.g., Git) to manage codebase and collaborate with team members.
                  </Typography>
                  <Typography variant='p' component="p" sx={{ fontWeight: 'bold', color: "#0e5beb" }}>
                    Download my CV for more information!
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" component="h2" sx={{ fontWeight: '550' }}>
              Key Skills
            </Typography>
            <Stack direction="row" spacing={1} sx={{  flexWrap: 'wrap' }}>
              <Chip className='tags' label="HTML" variant="outlined" onClick={handleClick} />
              <Chip className='tags' label="HTML5" variant="outlined" onClick={handleClick} />
              <Chip className='tags' label="CSS" variant="outlined" onClick={handleClick} />
              <Chip className='tags' label="CSS3" variant="outlined" onClick={handleClick} />
              <Chip className='tags' label="Javascript" variant="outlined" onClick={handleClick} />
              <Chip className='tags' label="Jquery" variant="outlined" onClick={handleClick} />
              <Chip className='tags' label="ReactJs" variant="outlined" onClick={handleClick} />
            </Stack>
          </Box>
        </Stack>
        
      </Stack>
    </Box>
  )
}

export default Resume
