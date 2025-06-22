import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import aykut from '../images/aykuty.png'
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
    return (
        <Grid container>
            <Grid size={{ xs: 0, md: 5 }} sx={{ paddingBottom: '0', display: { xs: 'none', md: 'block' }, paddingLeft: '250px' }} >
                <Box sx={{
                    backgroundImage: `url(${aykut})`, height: '450px', backgroundSize: 'cover',
                    backgroundPosition: 'center', paddingTop: '150px', borderRadius: '100px 20px',


                }} width={'100%'}>

                </Box>
            </Grid>
            <Grid sx={{
                backgroundImage: { xs: `url(${aykut})`, sm: 'none' }, backgroundSize: 'cover', paddingTop: '7.9rem'
                , backgroundPosition: 'center', backgroundColor: { xs: 'grey.900', sm: 'rgb(39, 38, 38)', md: 'rgb(15, 15, 15)' }, paddingBottom: { xs: '130px' }
            }} size={{ xs: 12, md: 7 }} display={'flex'} alignItems={'center'} flexDirection={'column'}>
                <Box pr={3} mt={5} pl={1} pb={0.9} textAlign={'center'} sx={{ backgroundColor: { xs: 'transparent', sm: 'grey.900' }, gap: '3rem', borderRadius: '0px 50px 50px 0px', width: { md: '35rem', xs: '23rem' }, paddingTop: '3rem', paddingBottom: '1.8rem', marginRight: { xs: '0', xl: '304px' } }} display={'flex'} flexDirection={'column'} >
                    <Typography color='white' variant="h3" textAlign='center'>
                        You can <span style={{ color: 'brown' }}>contact</span> with
                    </Typography>
                    <Box display={'flex'} gap={5} justifyContent={'space-evenly'} pb={4} >
                        <Box sx={{ width: '3rem', height: '3rem' }} display={'flex'} alignItems={'center'}>
                            <IconButton component="a" target="_blank" href='https://www.linkedin.com/in/aykut-akbulut-622128208/' color="primary" size='large' sx={{ backgroundColor: 'white', width: '3rem', height: '3rem' }}>
                                <LinkedInIcon fontSize='large' sx={{ fontSize: '4rem', backgroundColor: 'transparent' }} />
                            </IconButton>
                        </Box>
                        <Box sx={{ width: '3rem', height: '3rem' }} display={'flex'} alignItems={'center'}>
                            <IconButton component="a" target="_blank" href='https://github.com/aykublut' size='large' sx={{ color: 'white', width: '3rem', height: '3rem' }}>
                                <GitHubIcon fontSize='large' sx={{ fontSize: '4rem', backgroundColor: 'transparent' }} />
                            </IconButton>
                        </Box>
                        <Box sx={{ width: '3rem', height: '3rem' }} display={'flex'} alignItems={'center'}>
                            <IconButton component="a" target="_blank" href='https://www.instagram.com/aykublut/?next=%2F' size='large' sx={{ backgroundColor: 'white', width: '3.3rem', height: '3.3rem', color: '#E1306C' }}>
                                <InstagramIcon fontSize='large' sx={{ fontSize: '4rem', backgroundColor: 'transparent' }} />
                            </IconButton>
                        </Box>
                        <Box sx={{ width: '3rem', height: '3rem' }} display={'flex'} alignItems={'center'}>
                            <IconButton component="a" target="_blank" href="mailto:aykutak.04.55@gmail.com" size='large' sx={{ backgroundColor: '#E1306C', width: '3rem', height: '2.5rem', borderRadius: '0', color: 'white' }}>
                                <EmailIcon fontSize='large' sx={{ fontSize: '4rem', backgroundColor: 'transparent' }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Grid>

        </Grid >
    )
}

export default Contact