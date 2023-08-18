import Counter from '@/components/Counter/Counter';
import TemplateTester from '@/components/TemplateTester/TemplateTester';
import { Container, Stack, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={1} my={2}>
        <Typography textAlign="center" variant="h2">
        </Typography>
        <Typography textAlign="center" variant="subtitle1">
          React + TS + Vite + Redux + RTK + MUI + RRD + Prettier
        </Typography>
      </Stack>
      <TemplateTester />
      <Counter />
    </Container>
  );
};

export default HomePage;
