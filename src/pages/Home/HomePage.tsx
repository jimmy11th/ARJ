import ResponsiveAppBar from '@/components/AppBar/BarWithMenu';
import SwipeableTextMobileStepper from '@/components/Carousel/Carousel';
import LabTabs from '@/components/Tabs/Tabs';
import { Box, Stack, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ maxWidth:'xxl' }}>
      <Stack gap={0} my={0}>
       {/* <Box style={{height:'44px', backgroundColor:"black", cursor: "pointer", fontSize: "14px", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <span style={{ color: 'white' }}>
          FREE SHIPPING ON ORDERS OVER 300
        </span>
       </Box> */}
       <ResponsiveAppBar />
       <Box>
         <SwipeableTextMobileStepper />
      </Box>
      <Box sx={{ maxWidth:'xxl', paddingBottom:'4rem', paddingTop:'4rem', display: 'flex', flexDirection:'column', alignItems:'center'}}>
        <Typography variant="h1" gutterBottom align="center" width="50%">
        ALLMAX PROFESSIONAL GRADE SUPPLEMENTS
        </Typography>
        <Typography variant="body1" gutterBottom align="center" width="80%">
        We are a trusted brand for athletes and fitness enthusiasts looking for the highest quality supplements to optimize their workouts and achieve their fitness goals. Our product ingredients are of the purest quality, meet pharmaceutical grade, and are lab-tested.
        </Typography>
      </Box>
      <LabTabs />
       <div style={{height:'420px', backgroundColor:"#3D4451"}}>sales</div>
       <div style={{height:'460px', backgroundColor:"#FFFFFF"}}>company</div>
       <div style={{height:'240px', backgroundColor:"#3ABFF8"}}>Items</div>
       <div style={{height:'650px', backgroundColor:"#36D399"}}>Communications</div>
       <div style={{height:'320px', backgroundColor:"#FBBD23"}}>Footer</div>
      </Stack>
    </Box>
  );
};

export default HomePage;
