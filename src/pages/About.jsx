import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import csharp from '../images/csharp.png'
import github from '../images/github.png'
import ecommerce from '../images/e-commerce.png'
import IconButton from "@mui/material/IconButton"
import GitHubIcon from '@mui/icons-material/GitHub';


function About() {
    return (
        <Grid container>
            <Grid sx={{
                backgroundImage: { xs: `url(${csharp})`, sm: 'none' }, backgroundSize: 'cover',
                backgroundPosition: 'center', backgroundColor: { xs: 'grey.900', sm: 'rgb(39, 38, 38)', md: 'rgb(15, 15, 15)' }, padding: { xs: '100px', sm: '125px' }, paddingTop: { xs: '30px' }
            }} size={{ xs: 12, md: 6 }} display={'flex'} pl={5} justifyContent={'center'} flexDirection={'column'}>

                <Typography color='white' variant="h2" textAlign='center' borderRadius={3} sx={{ backgroundColor: { md: 'transparent', xs: 'rgba(0, 0, 0, 0.6)' } }}>
                    My favorite  <span style={{ color: 'brown' }}>c#</span> project i made
                </Typography>

            </Grid>
            <Grid size={{ xs: 0, md: 6 }} sx={{ paddingBottom: '0', display: { xs: 'none', md: 'block' } }}>
                <Box sx={{
                    backgroundImage: `url(${csharp})`, height: '450px', backgroundSize: 'contain',
                    backgroundPosition: 'center', paddingTop: '50px', backgroundRepeat: 'no-repeat'

                }} width={'90%'}>

                </Box>
            </Grid>
            <Grid size={{ xs: 0, md: 6 }} pl={5} sx={{ paddingBottom: '0', display: { xs: 'none', md: 'block' } }}>
                <Box sx={{
                    backgroundImage: `url(${ecommerce})`, height: '450px', backgroundSize: 'contain',
                    backgroundPosition: 'center', paddingTop: '150px', backgroundRepeat: 'no-repeat'

                }} width={'90%'}>

                </Box>
            </Grid>
            <Grid mt={5} sx={{
                backgroundImage: { xs: `url(${ecommerce})`, sm: 'none' }, backgroundSize: 'cover',
                backgroundPosition: 'center', backgroundColor: { xs: 'grey.900', sm: 'rgb(39, 38, 38)', md: 'rgb(15, 15, 15)' }, padding: { xs: '20px', sm: '125px' }, paddingTop: { xs: '30px' }
            }} size={{ xs: 12, md: 6 }} display={'flex'} pl={5} justifyContent={'center'} flexDirection={'column'}>

                <Typography color='white' variant="h2" textAlign='center' borderRadius={3} sx={{ backgroundColor: { md: 'transparent', xs: 'rgba(0, 0, 0, 0.6)' } }}>
                    My   <span style={{ color: 'brown' }}>e-commerce</span> project, i learn a lot react things while make it
                </Typography>

            </Grid>
            <Grid display={"flex"} justifyContent={"center"} alignItems={"center"} size={{ xs: 12, md: 12 }} sx={{
                backgroundImage: `url(${github})`, height: '450px', backgroundSize: 'contain',
                backgroundPosition: 'center', paddingTop: '20px', backgroundRepeat: 'no-repeat'

            }} >
                <Box sx={{ width: '15rem', height: '15rem' }} display={'flex'} alignItems={'center'}>
                    <IconButton component="a" target="_blank" href='https://github.com/aykublut' size='large' sx={{ color: 'white', width: '15rem', height: '15rem' }}>
                        <GitHubIcon sx={{ fontSize: '15rem', backgroundColor: 'transparent' }} />
                    </IconButton>
                </Box>

            </Grid>

        </Grid>
    )
}

export default About