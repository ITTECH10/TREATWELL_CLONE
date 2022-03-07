import React from 'react'
//mui
import { Stack, Typography } from '@mui/material'
//rest

const HomeBanner = ({ title, style, titleVariant }) => {
    return (
        <Stack alignItems="center" justifyContent="center" sx={{
            borderRadius: 2,
            zIndex: 999,
            ...style,
        }}>
            <Typography variant={titleVariant}>{title}</Typography>
        </Stack>
    )
}

export default HomeBanner