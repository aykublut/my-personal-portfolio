import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import aykut from '../images/aykute.png'
import Box from '@mui/material/Box';

function Home() {
    return (
        <div>
            <Grid container>
                <Grid sx={{
                    backgroundImage: { xs: `url(${aykut})`, sm: 'none' }, backgroundSize: 'cover',
                    backgroundPosition: 'center', backgroundColor: { xs: 'grey.900', sm: 'rgb(39, 38, 38)', md: 'rgb(15, 15, 15)' }, padding: { xs: '100px', sm: '125px' }, paddingTop: { xs: '30px' }
                }} size={{ xs: 12, md: 6 }} display={'flex'} pl={5} justifyContent={'center'} flexDirection={'column'}>
                    <Typography color='#555555' variant="h4" gutterBottom textAlign='left'>
                        Hello,
                    </Typography>
                    <Typography color='white' variant="h2" textAlign='left'>
                        I'm <span style={{ color: 'brown' }}>Aykut</span>
                    </Typography>
                    <Typography color='white' variant="h2" gutterBottom textAlign='left'>
                        Frontend Developer
                    </Typography>
                    <Typography color='#cccccc' variant="h5" textAlign='left'>
                        I designed this portfolio site using Material UI
                    </Typography>
                    <Typography color='#bbbbbb' variant="h5" textAlign='left'>
                        to improve my skills. I am primarily a React developer.
                    </Typography>
                </Grid>
                <Grid size={{ xs: 0, md: 6 }} p={5} sx={{ paddingBottom: '0', display: { xs: 'none', md: 'block' } }}>
                    <Box sx={{
                        backgroundImage: `url(${aykut})`, height: '450px', backgroundSize: 'cover',
                        backgroundPosition: 'center', paddingTop: '150px',

                    }} width={'90%'}>

                    </Box>
                </Grid>

            </Grid>
        </div>
    )
}

export default Home