import React from 'react'
//mui
import { Stack, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
//rest

const HomeBanner = ({ title }) => {
    const theme = useTheme()
    const match = useMediaQuery('(min-width:600px)');

    return (
        <Stack alignItems="center" justifyContent="center" sx={{ height: match ? '3rem' : '2.5rem', position: 'relative', zIndex: 999, width: '81%', my: 3, mx: 'auto', borderRadius: 2, backgroundColor: theme.palette.primary.main, color: '#fff' }}>
            <Typography variant="h6">{title}</Typography>
        </Stack>
    )
}

export default HomeBanner