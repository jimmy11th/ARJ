import { Box, Button, Typography } from '@mui/material';

interface ICard {
    name: string,
    price: string,
    URL: string
}

const Card = (props: ICard) => {
  const { name, price, URL } = props;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:"space-between",height:'340px' }}>
        <img width="100%" src={URL} alt={name} />
        <Typography>{name}</Typography>
        <Typography sx={{ margin: '0 auto' }}>$ {price}</Typography>
        <Button sx={{ margin: '0 auto' }}>Quick View</Button>
    </Box>
  );
};

export default Card;
