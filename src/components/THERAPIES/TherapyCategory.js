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

const Logo = '/static/logo.svg'

export default function TherapyCategory({ category }) {
    return (
        <Card sx={{ maxWidth: { xs: 'auto', md: 345 } }}>
            <Box>
                <CardMedia
                    component="img"
                    height="140"
                    image={Logo}
                    alt="green iguana"
                    sx={{ objectFit: 'scale-down' }}
                />
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
