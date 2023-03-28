import { useState, React, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
// using ./ only because these component are available in same directory
const Feed = () => {
    const [selectedCategory, setselectedCategory] = useState('New')
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
    }, [])
    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setselectedCategory={setselectedCategory}
                />
                <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
                    Copyright 2023
                </Typography>
            </Box>
            <Box p={1} sx={{ height: "90vh", overflowY: 'auto', flex: 2 }}>
                <Typography sx={{ color: "white", fontWeight: "bold" }} m={1} variant="h5">
                    {selectedCategory} <span style={{ color: 'red', fontWeight: "bold", fontSize: 22 }}>
                        Videos
                    </span>
                </Typography>
                <Videos videos={[]} />
            </Box>
        </Stack>
    )
}

export default Feed