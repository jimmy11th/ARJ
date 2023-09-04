import PrimarySearchAppBar from '@/components/AppBar/AppBar';
import { Box, Stack } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{ maxWidth:'lg' }}>
      <Stack gap={0} my={0}>
       <Box style={{height:'44px', backgroundColor:"black", cursor: "pointer", fontSize: "14px", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <span style={{ color: 'white' }}>
          FREE SHIPPING ON ORDERS OVER 300
        </span>
       </Box>
       <PrimarySearchAppBar />
       <div style={{height:'320px', backgroundColor:"#37CDBE"}}>products</div>
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
