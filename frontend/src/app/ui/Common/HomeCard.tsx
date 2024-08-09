import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from 'next/image';

export function HomeCard() {
    return (
        <>
            <Image src="/rawda yasser mohamed socialize logo white transparent.png" width={212} height={64} alt="Socialize logo" />
            <Typography variant="h4" gutterBottom sx={{ textAlign: "center", marginTop: 2 }}>
                Welcome to Socialize :)
            </Typography>
            <Card sx={{ maxWidth: 600, minHeight: 400, margin: "auto", marginTop: 4 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="400"
                        image="/Rawda Yasser Mohamed - rawdaymohamed - Socialize.jpg"
                        alt="a hand holding a mobile phone with social media apps"
                    />

                </CardActionArea>
            </Card>
        </>
    );
}