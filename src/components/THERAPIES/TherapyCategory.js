import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Logo = '/static/logo-white.svg'

export default function TherapyCategory({ category }) {
    return (
        <Card sx={{ maxWidth: { xs: 'auto', md: 345 } }}>
            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={category.image}
                    alt="green iguana"
                />
                <Box sx={{ width: 160, position: 'absolute', bottom: '.3rem', right: '.5rem' }}>
                    <img style={{ height: '100%', width: '100%' }} src={Logo} alt="logo" />
                </Box>
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {category.name}
                </Typography>
                <Accordion
                    sx={{
                        '&:before': {
                            display: 'none',
                        }
                    }}
                >
                    <AccordionSummary
                        sx={{ p: 0 }}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Button variant="contained">Mehr Lesen</Button>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {category.description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </CardContent>
        </Card>
    );
}
