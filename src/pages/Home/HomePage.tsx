import { Container, Stack } from '@mui/material';

const HomePage = () => {
  return (
    <Container sx={{ maxWidth:'lg', py: 2, position: 'relative' }}>
      <Stack gap={0} my={0}>
       <div style={{height:'35px', backgroundColor:"#570DF8"}}>Announcements</div>
       <div style={{height:'57px', backgroundColor:"#F000B8"}}>Headers</div>
       <div style={{height:'320px', backgroundColor:"#37CDBE"}}>products</div>
       <div style={{height:'420px', backgroundColor:"#3D4451"}}>sales</div>
       <div style={{height:'460px', backgroundColor:"#FFFFFF"}}>company</div>
       <div style={{height:'240px', backgroundColor:"#3ABFF8"}}>Items</div>
       <div style={{height:'650px', backgroundColor:"#36D399"}}>Communications</div>
       <div style={{height:'320px', backgroundColor:"#FBBD23"}}>Footer</div>
      </Stack>
    </Container>
  );
};

export default HomePage;
