import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import ProTip from '../../components/ProTip';
import Copyright from '../../components/Copyright';

export default function About() {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >

                <Typography component="p" sx={{mb: 2}}>
                    Easily generate a custom batch file for scheduling shutdowns, restarts, or log-offs on your Windows
                    device in just seconds. No coding required—simply choose your desired action and set the timer, and
                    our tool will create the file for you. Perfect for automating power management with simplicity and
                    precision.
                </Typography>

                {/*<Typography variant="h4" component="h1" sx={{ mb: 2 }}>*/}
                {/*  Material UI - Next.js example in TypeScript*/}
                {/*</Typography>*/}
                {/*<Box sx={{ maxWidth: 'sm' }}>*/}
                {/*  <Button variant="contained" component={NextLink} href="/">*/}
                {/*    Go to the home page*/}
                {/*  </Button>*/}
                {/*</Box>*/}
                {/*<ProTip />*/}
                {/*<Copyright />*/}
            </Box>
        </Container>
    );
}
