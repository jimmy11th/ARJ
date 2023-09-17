import { Box, Button, Typography } from '@mui/material';

const Card = (props: any) => {
    const {name, price, URL } = props
    return (
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-start',gap:'20px',height:'500px'}}>
            <img width='100%' src={URL} alt={name}/>
            <Typography >{name}</Typography>
            <Typography >$ {price}</Typography>
            <Button style={{marginTop: "auto"}}>Quick View</Button>
        </Box>
    );
}

export default Card;
