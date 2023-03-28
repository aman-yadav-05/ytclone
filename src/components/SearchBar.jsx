import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';



const SearchBar = () => {
    return (
        <Paper
            elevation={'12'}
            component="form"
            onSubmit={() => { }}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}
        >
            <input
                className='search-bar'
                placeholder='search...'
                value=""
                onChange={() => { }}
            />
            <IconButton type='submit' sx={{ p: '10px', color: '#03b1fc' }}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar