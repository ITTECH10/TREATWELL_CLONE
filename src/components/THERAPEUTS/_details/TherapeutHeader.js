import React from 'react'
import { useApp } from '../../../context/AppContext'
// mui
import { Box, Stack, Typography, Avatar } from '@mui/material'
import { useTheme } from '@mui/material/styles'
//rest
import UpdateTherapeutInfoDialog from './UpdateTherapeutInfoDialog'
import TherapeutHeaderTabs from './TherapeutHeaderTabs'
import { manipulateCloudinaryImage } from '../../../utils/manipulateCloudinaryImage'

const defaultAvatar = '/static/illustrations/defaultAvatar.svg'

const TherapeutHeader = () => {
    const theme = useTheme()
    const { selectedTherapeut, logedInPacient } = useApp()
    const { image, name, specializedIn, phone, location: therapeutLocation, ratingsAverage, ratingsQuantity } = selectedTherapeut || logedInPacient || { image: '', name: '', specializedIn: '', phone: '', location: '', ratingsAverage: 0, ratingsQuantity: 0 }
    const manipulatedAvatarImage = manipulateCloudinaryImage(image, ['q_80'])
    // const manipulatedAvatarImage = manipulateCloudinaryImage(image, ['w_200', 'c_thumb', 'g_face', 'h_200'])

    return (
        <Box sx={{ width: '100%', position: 'relative' }}>
            <Box px={{ xs: 0, md: 30 }} sx={{ background: theme.palette.primary.main, color: '#fff' }}>
                <Stack direction="row" spacing={1} sx={{ position: 'relative', top: '2rem' }}>
                    <Box sx={{ height: 135, width: 135, position: 'relative', marginLeft: { xs: 2, md: 0 } }}>
                        {
                            image ? <img style={{ height: '100%', width: '100%', borderRadius: 10 }} alt="avatar" src={manipulatedAvatarImage} /> 
                            : <img style={{ height: '100%', width: '100%', borderRadius: 10 }} alt="avatar" src={defaultAvatar} />
                        }
                        <UpdateTherapeutInfoDialog />
                    </Box>
                    <Box>
                        <Typography variant="h4">{name}</Typography>
                        <Typography variant="subtitle2">{specializedIn}</Typography>
                        <Typography variant="subtitle2">Location: {therapeutLocation}</Typography>
                        <Typography variant="subtitle2">Telefon: {phone}</Typography>
                        {ratingsQuantity > 0 ?
                            <Typography variant="subtitle2">Bewertung: {Number(ratingsAverage).toFixed(1)}</Typography> :
                            <Typography variant="subtitle2">Noch keine Bewertung</Typography>}
                    </Box>
                </Stack>
            </Box>
            <TherapeutHeaderTabs />
        </Box>
    )
}

export default TherapeutHeader