import React from 'react';
import { useApp } from '../../../context/AppContext'
// mui
import { Card, Typography, Box, Stack, IconButton, Divider, List, ListItem, ListItemText, Button } from '@mui/material'
import CollectionsIcon from '@mui/icons-material/Collections';
import ArticleIcon from '@mui/icons-material/Article';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';

// rest
import Map from '../../Map'
import { manipulateCloudinaryImage } from '../../../utils/manipulateCloudinaryImage'

const TherapeutInfoTab = () => {
    const { selectedTherapeut, logedInPacient } = useApp()
    const { images: practicePhotos, website, phone, email, address, locationCoordinates, reviews, biography, specializedMethods, qualifications } = selectedTherapeut || logedInPacient || { images: [], website: '', phone: '', email: '', address: '', reviews: [], biography: '', specializedMethods: [], qualifications: '' }
    const lng = locationCoordinates && locationCoordinates.coordinates[0]
    const lat = locationCoordinates && locationCoordinates.coordinates[1]

    return (
        <Card sx={{ p: 2 }}>
            <Box>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton color="primary">
                        <CollectionsIcon />
                    </IconButton>
                    <Typography variant="subtitle1">
                        Praxis Photos
                    </Typography>
                </Stack>
                <Stack mx={{ xs: 0, md: 2 }} direction={{ xs: 'column', md: 'row' }} spacing={2}>
                    {practicePhotos.map(practicePhoto => {
                        const optimizedPracticePhoto = manipulateCloudinaryImage(practicePhoto, ['w_500'])

                        // return <Box sx={{ height: 200, width: { xs: 'auto', md: 350 }, borderRadius: 1, overflow: 'hidden' }}>
                        //     <img src={optimizedPracticePhoto} style={{ height: '100%', width: '100%' }} />
                        // </Box>
                        return <Box
                            sx={{
                                height: 200,
                                width: { xs: 'auto', md: 350 },
                                overflow: 'hidden',
                                background: `url(${optimizedPracticePhoto})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}
                        >
                        </Box>
                    })}
                </Stack>
            </Box>
            <Divider sx={{ mt: 2, mb: 1 }} />
            <Box>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton color="primary">
                        <ArticleIcon />
                    </IconButton>
                    <Typography variant="subtitle1">
                        Kurzvorstellung
                    </Typography>
                </Stack>
                <Box mx={2}>
                    <Typography variant="body2">
                        {biography}
                    </Typography>
                </Box>
            </Box>
            <Divider sx={{ mt: 2, mb: 1 }} />
            <Box>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton color="primary">
                        <SummarizeIcon />
                    </IconButton>
                    <Typography variant="subtitle1">
                        Schwerpunkt
                    </Typography>
                </Stack>
                <Box mx={2}>
                    <Typography variant="body2">
                        {specializedMethods.map((method, index) => {
                            return <Typography variant="body2">
                                {method}
                            </Typography>
                        })}
                    </Typography>
                </Box>
            </Box>
            <Divider sx={{ mt: 2, mb: 1 }} />
            <Box>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton color="primary">
                        <SchoolIcon />
                    </IconButton>
                    <Typography variant="subtitle1">
                        Qualifikationen
                    </Typography>
                </Stack>
                <Box >
                    <List dense sx={{ p: 0 }}>
                        <ListItem>
                            <ListItemText
                                primary={qualifications}
                            />
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Divider sx={{ mt: 2, mb: 1 }} />
            <Box>
                <Stack direction="row" alignItems="center">
                    <IconButton color="primary">
                        <LocationOnIcon />
                    </IconButton>
                    <Box>
                        <Typography variant="subtitle1">
                            Kontakt Informationen
                        </Typography>
                    </Box>
                </Stack>
                <Box mx={2}>
                    <Button href={`${website && !website.startsWith('https') ? `https://${website}` : website}`} target="_blank" variant="text" sx={{ p: 0, mb: .5, textTransform: 'lowercase' }} >
                        {website}
                    </Button>
                    <Typography variant="subtitle1" mb={1}>
                        E-mail: {email}
                    </Typography>
                    <Typography variant="subtitle1" mb={1}>
                        Adresse: {address}
                    </Typography>
                    <Typography variant="subtitle1" mb={1}>
                        Telefon: {phone}
                    </Typography>
                    <Map lng={lng} lat={lat} />
                </Box>
            </Box>
            {reviews && reviews.length > 0 &&
                <>
                    <Divider sx={{ mt: 2, mb: 1 }} />
                    <Box>
                        <Stack direction="row" alignItems="center" mb={1}>
                            <IconButton color="primary">
                                <StarIcon />
                            </IconButton>
                            <Box>
                                <Typography variant="subtitle1" >
                                    Bewertungen
                                </Typography>
                            </Box>
                        </Stack>
                        <Box mx={2}>
                            {reviews && reviews.map((review, index) => {
                                return (
                                    <>
                                        <Stack direction="row" spacing={2} alignItems="center" key={review._id}>
                                            <Stack alignItems="center">
                                                <Typography variant="subtitle1" noWrap>
                                                    {`${review.pacient.firstName} ${review.pacient.lastName}`}
                                                </Typography>
                                                <Box>
                                                    <Rating
                                                        value={review.rating}
                                                        readOnly
                                                    />
                                                </Box>
                                            </Stack>
                                            <Typography noWrap sx={{ textOverflow: 'ellipsis' }}>
                                                {review.review}
                                            </Typography>
                                        </Stack>
                                        {index !== reviews.length - 1 && <Divider sx={{ mt: 2, mb: 1 }} />}
                                    </>
                                )
                            })}
                        </Box>
                    </Box>
                </>}
        </Card>
    )
};

export default TherapeutInfoTab;