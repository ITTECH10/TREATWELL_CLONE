import React from 'react'
// mui
import { Box, Stack, Card, List, ListItem, ListItemText, ListItemIcon, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// others

const therapeutAdvantagesRowOne = [
    {
        id: 0,
        title: 'Neukundengewinung'
    },
    {
        id: 1,
        title: 'Bekanntheitsgradsteigerung'
    },
    {
        id: 2,
        title: 'Unterstüztung beim Geschäfts-Praxisaufbau'
    },
]

const therapeutAdvantagesRowTwo = [
    {
        id: 0,
        title: 'Monatliche unterstüztung bei Marketing und Weibang'
    },
    {
        id: 1,
        title: 'Rechtliche Berahay'
    }
]

const HomeTherapeutAdvantages = () => {
    return (
        <Card sx={{ px: 10, py: 2 }}>
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <List dense sx={{ width: '50%' }}>
                    {therapeutAdvantagesRowOne.map(therapeutAdvantage => {
                        return <ListItem key={therapeutAdvantage.id} sx={{ mb: { '&:not(:last-child)': 2 } }}>
                            <ListItemIcon>
                                <CheckCircleIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText
                                primary={therapeutAdvantage.title}
                                primaryTypographyProps={{ variant: 'h5' }}
                            />
                        </ListItem>
                    })}
                </List>
                <List dense sx={{ width: '50%' }}>
                    {therapeutAdvantagesRowTwo.map(therapeutAdvantage => {
                        return <ListItem key={therapeutAdvantage.id} sx={{ mb: { '&:not(:last-child)': 2 } }}>
                            <ListItemIcon>
                                <CheckCircleIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText
                                primary={therapeutAdvantage.title}
                                primaryTypographyProps={{ variant: 'h5' }}
                            />
                        </ListItem>
                    })}
                </List>
            </Stack>
        </Card >
    )
}

export default HomeTherapeutAdvantages