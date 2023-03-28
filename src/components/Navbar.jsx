// import React from 'react'
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => {
    return (
        <Stack
            direction="row" alignItems="center"
            p={2}
            sx={{ position: 'sticky', background: 'black', top: 0, justifyContent: 'space-between' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="logo" height={45} />
                <Typography className='appName' variant={'h4'} sx={{ color: 'white', fontWeight: 'bold', left: '0%', ml: 2 }}>
                    y o u t u b e
                </Typography>
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default Navbar