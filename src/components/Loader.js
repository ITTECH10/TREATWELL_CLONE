import * as React from 'react';
import { CircularProgress, Box } from '@mui/material';
import { styled } from '@mui/material/styles'

const RootStyle = styled(Box)(({ theme }) => ({
    display: 'flex',
    height: '95vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
}))

export default function Loader() {
    return (
        <RootStyle>
            <CircularProgress size={60} />
        </RootStyle>
    );
}