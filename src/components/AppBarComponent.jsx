import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import '../css/AppBarCss.css'


function AppBarComponent() {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null)
    const handleOpenNavMenu = (e) => {
        setAnchorEl(e.currentTarget)
    }
    const handleCloseNavMenu = () => {
        setAnchorEl(null)
    }
    const [activeButton, setActiveButton] = useState('')
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ padding: '5px 60px', backgroundColor: 'grey.900' }}>
                    <Toolbar>
                        <IconButton
                            onClick={() => { navigate('/'); setActiveButton('home') }}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <WorkHistoryIcon />
                        </IconButton>
                        <Typography onClick={() => { navigate('/'); setActiveButton('home') }} variant="h6" component="div" sx={{ flexGrow: 2 }}>
                            Personal Portfolio
                        </Typography>
                        <Box display={{ xs: 'none', sm: 'none', md: 'flex' }} gap={3} pr={5}>
                            <Button id='btn_home' onClick={() => { navigate('/'); setActiveButton('home'); }} sx={{ width: '100px', padding: '10px', borderBottom: activeButton === 'home' ? '2px solid white' : 'none', }} color="inherit">Home</Button>
                            <Button id='btn_about' onClick={() => { navigate('/about'); setActiveButton('about'); }} sx={{ width: '100px', borderBottom: activeButton === 'about' ? '2px solid white' : 'none', }} color="inherit">About</Button>
                            <Button id='btn_contact' onClick={() => { navigate('/contact'); setActiveButton('contact'); }} sx={{ width: '100px', borderBottom: activeButton === 'contact' ? '2px solid white' : 'none', }} color="inherit">Contact</Button>
                        </Box>
                        <Box display={{ sm: 'flex', md: 'none' }} gap={3} >

                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                                sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}


                            >
                                <MenuIcon />
                            </IconButton>

                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseNavMenu}

                sx={{ display: { xs: 'block', md: 'none' } }}
            >
                <MenuItem sx={{ display: 'flex', justifyContent: 'center' }} onClick={() => { handleCloseNavMenu; navigate('/') }}>
                    <Typography textAlign={'center'} width={60} p={1}>Home</Typography>


                </MenuItem>
                <MenuItem sx={{ display: 'flex', justifyContent: 'center' }} onClick={() => { handleCloseNavMenu; navigate('/About') }}>
                    <Typography textAlign={'center'} width={60} p={1}>About</Typography>
                </MenuItem>
                <MenuItem sx={{ display: 'flex', justifyContent: 'center' }} onClick={() => { handleCloseNavMenu; navigate('/contact') }}>
                    <Typography textAlign={'center'} width={60} p={1}>Contact</Typography>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default AppBarComponent