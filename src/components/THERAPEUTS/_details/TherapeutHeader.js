import React from 'react'
import { useApp } from '../../../context/AppContext'
// mui
import { Box, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
//rest
import UpdateTherapeutInfoDialog from './UpdateTherapeutInfoDialog'
import TherapeutHeaderTabs from './TherapeutHeaderTabs'
import { manipulateCloudinaryImage } from '../../../utils/manipulateCloudinaryImage'

const TherapeutHeader = () => {
    const theme = useTheme()
    const { selectedTherapeut, logedInPacient } = useApp()
    const { image, name, specializedIn, phone, location: therapeutLocation, ratingsAverage } = selectedTherapeut || logedInPacient || { image: '', name: '', specializedIn: '', phone: '', location: '', ratingsAverage: 0 }
    const manipulatedAvatarImage = manipulateCloudinaryImage(image, ['w_1500'])

    return (
        <Box sx={{ width: '100%', position: 'relative' }}>
            <Box px={{ xs: 0, md: 30 }} sx={{ background: theme.palette.primary.main, color: '#fff' }}>
                <Stack direction="row" spacing={1} sx={{ position: 'relative', top: '2rem' }}>
                    <Box sx={{ height: 135, width: 135, position: 'relative', marginLeft: { xs: 2, md: 0 } }}>
                        <img style={{ height: '100%', width: '100%', borderRadius: 10 }} alt="avatar" src={manipulatedAvatarImage} />
                        <UpdateTherapeutInfoDialog />
                    </Box>
                    <Box>
                        <Typography variant="h4">{name}</Typography>
                        <Typography variant="subtitle2">{specializedIn}</Typography>
                        <Typography variant="subtitle2">Location: {therapeutLocation}</Typography>
                        <Typography variant="subtitle2">Telefon: {phone}</Typography>
                        <Typography variant="subtitle2">Bewertung: {Number(ratingsAverage).toFixed(1)}</Typography>
                    </Box>
                </Stack>
            </Box>
            <TherapeutHeaderTabs />
        </Box>
    )
}

export default TherapeutHeader