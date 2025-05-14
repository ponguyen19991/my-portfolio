import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";

import { MdWorkHistory } from "react-icons/md";
import { FaUserGraduate, FaCalendarAlt } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";

import personal from "../assets/images/personal.jpg";
import logoUniver from "../assets/images/Logo-DH-Hoa-Binh-Peace-University.png";

import "../assets/css/Resume.scss";

const Resume = () => {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "550",
            borderBottom: "2px solid var(--text-color)",
            display: "inline-block",
            mb: 1,
          }}
        >
          Qualification
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "550", color: "#989898" }}
        >
          My personal journey
        </Typography>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        {/* Profile Image Section */}
        <Box
          sx={{
            flex: "0 0 auto",
            textAlign: "center",
            width: { xs: "100%", md: "300px" }, // Fixed width on desktop
            maxWidth: "300px",
            position: "sticky", // Prevents image from moving
            top: "20px", // Adjust based on your layout
            alignSelf: "flex-start",
          }}
        >
          <img
            src={personal}
            alt="Pham Thanh Nguyen Bui"
            style={{
              borderRadius: "5px",
              width: "100%",
              maxWidth: "250px",
              height: "auto",
              marginBottom: "10px",
            }}
          />
          <Typography
            variant="body1"
            sx={{ fontWeight: "550", color: "#989898", mb: 1 }}
          >
            Pham Thanh Nguyen Bui
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Chip
              label="4 years"
              onClick={handleClick}
              sx={{ mr: 1 }}
            />
            <Typography
              variant="body1"
              sx={{ fontWeight: "550", color: "var(--text-color)" }}
            >
              Front End Developer
            </Typography>
          </Box>
        </Box>

        {/* Education & Work Section */}
        <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "800px" } }}>
          {/* Education */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "550", mb: 1 }}>
              Education
            </Typography>
            <Accordion>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ fontWeight: "bold" }}
              >
                <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IoSchoolSharp
                        style={{ fontSize: "20px", marginRight: "7px" }}
                      />
                      Hoa Binh University
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "550", color: "#989898" }}
                    >
                      07/2017 - 09/2021
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                  >
                    <Typography variant="body2" sx={{ fontWeight: "550" }}>
                      IT - Web Development
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", color: "#0e5beb" }}
                    >
                      4 years
                    </Typography>
                  </Stack>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <img src={logoUniver} alt="school" width={50} />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: "550" }}>
                      Information Technology - Web Developer
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", color: "#0e5beb" }}
                    >
                      Degree classification: Good - GPA: 3.2
                    </Typography>
                  </Box>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Box>

          {/* Work */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "550", mb: 1 }}>
              Work
            </Typography>
            <Stack direction="column" spacing={1}>
              {/* INET Solution */}
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ fontWeight: "bold" }}
                >
                  <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={2}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <MdWorkHistory
                          style={{ fontSize: "20px", marginRight: "7px" }}
                        />
                        Intern Web Developer
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: "550", color: "#989898" }}
                      >
                        04/2021 - 07/2021
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={2}
                    >
                      <Typography variant="body2" sx={{ fontWeight: "550" }}>
                        INET Solution
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: "bold", color: "#0e5beb" }}
                      >
                        3 Months
                      </Typography>
                    </Stack>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", fontSize: "18px", mb: 1 }}
                  >
                    Main responsibilities:
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 1 }}>
                    - Assisted in developing web applications using PHP and
                    Laravel.
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 1 }}>
                    - Collaborated with the team to understand project
                    requirements.
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 2 }}>
                    - Learned and applied frameworks and tools for PHP
                    development.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", color: "#0e5beb" }}
                  >
                    Download my CV for more information!
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* STECH Company */}
              <Accordion>
                <AccordionSummary
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={{ fontWeight: "bold" }}
                >
                  <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={2}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <MdWorkHistory
                          style={{ fontSize: "20px", marginRight: "7px" }}
                        />
                        Junior Frontend Developer
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: "550", color: "#989898" }}
                      >
                        09/2021 - 10/2023
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={2}
                    >
                      <Typography variant="body2" sx={{ fontWeight: "550" }}>
                        STECH Company
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: "bold", color: "#0e5beb" }}
                      >
                        2 years
                      </Typography>
                    </Stack>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", fontSize: "18px", mb: 1 }}
                  >
                    Main responsibilities:
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 1 }}>
                    - Developed responsive web applications using ReactJS and
                    NextJS.
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 1 }}>
                    - Analyzed, coded, reviewed, and refactored code.
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 1 }}>
                    - Implemented UI/UX designs for consistent user experience.
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 1 }}>
                    - Integrated APIs and managed data from back-end services.
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 1 }}>
                    - Handled asynchronous operations using Axios or Fetch.
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 2 }}>
                    - Used Git for version control and team collaboration.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", color: "#0e5beb" }}
                  >
                    Download my CV for more information!
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* IKIGROUP */}
              <Accordion>
                <AccordionSummary
                  aria-controls="panel3-content"
                  id="panel3-header"
                  sx={{ fontWeight: "bold" }}
                >
                  <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={2}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <MdWorkHistory
                          style={{ fontSize: "20px", marginRight: "7px" }}
                        />
                        Front-end Developer [ReactJS]
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: "550", color: "#989898" }}
                      >
                        05/2024 - Present
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={2}
                    >
                      <Typography variant="body2" sx={{ fontWeight: "550" }}>
                        IKIGROUP
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: "bold", color: "#0e5beb" }}
                      >
                        Ongoing
                      </Typography>
                    </Stack>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", fontSize: "18px", mb: 1 }}
                  >
                    Main responsibilities:
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 1 }}>
                    - Developed responsive web apps using ReactJS, NextJS, and
                    TypeScript.
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 1 }}>
                    - Optimized performance with memoization, virtualization,
                    and code-splitting.
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 1 }}>
                    - Implemented SSR and SSG with Next.js for performance and
                    SEO.
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 1 }}>
                    - Built reusable components using Atomic Design methodology.
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 1 }}>
                    - Ensured code quality with Clean Code and SOLID principles.
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 1 }}>
                    - Managed state with Redux Toolkit and collaborated with
                    UI/UX designers.
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 2 }}>
                    - Conducted code reviews and provided technical guidance.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", fontSize: "18px", mb: 1 }}
                  >
                    Projects:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    DONCHAN (2024)
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 1 }}>
                    - Online food ordering platform with menu management and
                    real-time tracking.
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 1 }}>
                    - Role: Design & Development
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 2 }}>
                    - Technologies: HTML5, CSS3, MUI, TypeScript, ReactJS
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    IKIGAI COACH (2024 - Present)
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 1 }}>
                    - E-learning platform with courses, group calls, and social
                    features.
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 1 }}>
                    - Role: Design & Development
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 2 }}>
                    - Technologies: HTML5, CSS3, MUI, TypeScript, NextJS
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    CMS IKIGAICOACH (2024 - Present)
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 1 }}>
                    - Admin system for managing users, courses, and social
                    posts.
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 1 }}>
                    - Role: Design & Development
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "550", mb: 2 }}>
                    - Technologies: HTML5, CSS3, MUI, TypeScript, ReactJS
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", color: "#0e5beb" }}
                  >
                    Download my CV for more information!
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Box>

          {/* Key Skills */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "550", mb: 1 }}>
              Key Skills
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ flexWrap: "wrap", gap: 1 }}
            >
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "TypeScript",
                "ReactJS",
                "NextJS",
                "Redux Toolkit",
                "MUI",
                "Git",
                "Axios",
                "Laravel",
              ].map((skill) => (
                <Chip
                  key={skill}
                  className="tags"
                  label={skill}
                  variant="outlined"
                  onClick={handleClick}
                  sx={{ mb: 1 }}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
