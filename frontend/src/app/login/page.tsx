"use client"
import * as React from 'react';
import { useState } from 'react';
import { Card, CardContent, TextField, Button, Typography, Alert, Grid, Hidden, Box, Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { login } from '../utils/api-auth';
import authHelper from '../utils/auth-helper';
export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter()

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        // Basic validation (add more robust validation as needed)
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        const user = {
            email: email || undefined,
            password: password || undefined
        }
        try {
            // Send registration request to your backend API
            login(user).then((data: any) => {
                if (data && data.error) {
                    setError(data.error || "Login failed")
                } else if (data) {
                    authHelper.authenticate(data, () => {
                        setError("")
                        router.push("/")
                    })
                }
            })

        } catch (error) {
            console.error(error);
            setError('An error occurred');
        }
    };

    return (
        <Container maxWidth={false} sx={{ height: '100vh', display: 'flex' }}> {/*  Full height container */}
            <Grid container direction="row" alignItems="center"> {/* Center content vertically */}
                <Grid item xs={12} md={6}>
                    <Hidden smDown>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            {/* Replace with your image */}
                            <Image src="/Rawda Yasser Mohamed - rawdaymohamed - Socialize.jpg" width={600} height={400} alt="A hand holding a mobile phone with social media apps" />
                        </Box>
                    </Hidden>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: 400, margin: "auto" }}>
                        <Typography variant="h5" align="center" component="div" gutterBottom>
                            Login to Socialize.
                        </Typography>
                        {error && <Alert severity="error">{error}</Alert>}
                        <form onSubmit={handleSubmit}>

                            <TextField
                                fullWidth
                                margin="normal"
                                label="Email"

                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}

                            />
                            <Button type="submit" fullWidth variant="contained" color="primary" sx={{
                                marginTop:
                                    2
                            }}>
                                Login
                            </Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );



}
