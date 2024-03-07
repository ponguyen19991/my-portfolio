import React, { useState } from 'react'
import { Tabs, Tab, Box } from '@mui/material'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { FaUser, FaRegNewspaper } from "react-icons/fa";
import { MdContacts, MdOutlineWorkHistory  } from "react-icons/md";
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import '../assets/css/Tablist.scss'

const TabsList = () => {
  const [value, setValue] = useState('about');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
     <TabContext value={value}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <TabList onChange={handleChange} aria-label="icon position tabs example" sx={{ backgroundColor: 'var(--background-box)', padding: '35px', borderRadius: '4px', width: '400px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
          "& .Mui-selected": {
            background: 'linear-gradient(to right, #F44958, #E42F6D)',
            color: 'white !important'
          },
          "& .MuiTabs-indicator": {
            backgroundColor: 'transparent'
          } 
        }}>
          <Tab icon={<FaUser />} sx={{ backgroundColor: '#F3F7F8', borderRadius: '5px', mr: 1, fontWeight: '550' }} value="about" label="About" />
          <Tab icon={<FaRegNewspaper />} sx={{ backgroundColor: '#F3F7F8', borderRadius: '5px', mr: 1, fontWeight: '550' }} value="resume" label="Resume" />
          <Tab icon={<MdOutlineWorkHistory />} sx={{ backgroundColor: '#F3F7F8', borderRadius: '5px', mr: 1, fontWeight: '550' }} value="works" label="Works" />
          <Tab icon={<MdContacts />} sx={{ backgroundColor: '#F3F7F8', borderRadius: '5px', fontWeight: '550' }} value="contact" label="Contact" />
        </TabList>
      </Box>

      <Box sx={{ width: '800px', mt: 4, borderRadius: '5px' }} className='tabListBox'> 
        <Box sx={{ padding: '20px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'  }}>
          {value === 'about' && <About/>}
          {value === 'contact' && <Contact/>}
          {value === 'resume' && <Resume/>}
        </Box>
      </Box>
    </TabContext>
    </Box>
  )
}

export default TabsList
