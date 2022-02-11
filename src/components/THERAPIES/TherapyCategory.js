import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TherapyCategory({ category }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={category.image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {category.name}
                </Typography>
                <Typography sx={{ display: 'block', display: '-webkit-box', overflow: 'hidden', maxHeight: '8rem', '-webkit-box-orient': 'vertical', '-webkit-line-clamp': '4', textOverflow: 'ellipsis' }} variant="body2" color="text.secondary">
                    {category.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button href={category.link} target="_blank" variant="contained">
                    Lern mehr
                </Button>
            </CardActions>
        </Card>
    );
}
