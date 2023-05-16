import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



import Form from '../components/Form'
import Count from '../components/Count'
import Date from '../components/Date'
import Gallery from '../components/Gallery'
import Todo from '../components/Todo'
import Calculator from '../components/Calculator'
import WeatherApp from '../components/WeatherApp'
import Item from '../components/Item'
import Filter from '../components/Filter'




interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function List() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Form" {...a11yProps(0)} />
          <Tab label="Count" {...a11yProps(1)} />
          <Tab label="Date" {...a11yProps(2)} />
          <Tab label="Gallery" {...a11yProps(3)} />
          <Tab label="Todo" {...a11yProps(4)} />
          <Tab label="Calculator" {...a11yProps(5)} />
          <Tab label="WeatherApp" {...a11yProps(6)} />
          <Tab label="Item" {...a11yProps(7)} />
          <Tab label="Filter" {...a11yProps(8)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Form/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Count/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Date/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Gallery/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Todo/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Calculator/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <WeatherApp/>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Item/>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Filter/>
      </TabPanel>
    </Box>
  );
}