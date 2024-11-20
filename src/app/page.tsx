import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ChooseAction from "@/components/home/ChooseAction";

export default function Home() {
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
                <Typography variant="h4" component="h1" sx={{mb: 2}}>
                    Shutdown timer
                </Typography>
                <ChooseAction/>
                {/*<Link href="/about" color="secondary" component={NextLink}>*/}
                {/*  Go to the about page*/}
                {/*</Link>*/}
                {/*<ProTip />*/}
                {/*<Copyright />*/}
            </Box>
        </Container>
    );
}
