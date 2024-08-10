"use client"
import * as React from 'react';
import { useState } from 'react';
import { Card, CardContent, TextField, Button, Typography, Alert, Grid, Hidden, Box, Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
export default function Page() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter()

    const handleSubmit = async (event: any) => {
        event.preventDefault();


        // Basic validation (add more robust validation as needed)
        if (!name || !email || !password) {
            setError('Please fill in all fields');
            return;
        }

        try {
            // Send registration request to your backend API
            const response = await fetch('http://localhost:4000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                router.push("/login")
            } else {
                const data = await response.json();
                setError(data.error || 'Registration failed');
            }
        } catch (error) {
            console.error(error);
            setError('An error occurred');
        }
    };

    return (
        // <Grid container spacing={2} p={4}>
        //     {/* Image column, hidden on small screens */}
        //     <Grid item xs={12} md={6}>
        //         <Hidden smDown>
        //             <Box display="flex" justifyContent="center" alignItems="center">
        //                 {/* Replace with your image */}
        //                 <Image src="/Rawda Yasser Mohamed - rawdaymohamed - Socialize.jpg" width={600} height={400} alt="" />

        //             </Box>
        //         </Hidden>
        //     </Grid>

        //     {/* Register card column */}
        //     <Grid item xs={12} md={6}>
        //         <Box p={2}>
        //             <Typography variant="h5" align="center" component="div" gutterBottom>
        //                 Register to Socialize.
        //             </Typography>
        //             {error && <Alert severity="error">{error}</Alert>}
        //             <Box p={2} sx={{ maxWidth: 400, margin: '20px auto' }}>
        //                 <form onSubmit={handleSubmit}>
        //                     <TextField
        //                         fullWidth
        //                         margin="normal"
        //                         label="Name"
        //                         value={name}
        //                         onChange={(e) => setName(e.target.value)}
        //                     />
        //                     <TextField
        //                         fullWidth
        //                         margin="normal"
        //                         label="Email"

        //                         type="email"
        //                         value={email}
        //                         onChange={(e) => setEmail(e.target.value)}
        //                     />
        //                     <TextField
        //                         fullWidth
        //                         margin="normal"
        //                         label="Password"
        //                         type="password"
        //                         value={password}
        //                         onChange={(e) => setPassword(e.target.value)}

        //                     />
        //                     <Button type="submit" fullWidth variant="contained" color="primary" sx={{
        //                         marginTop: 2
        //                     }}>
        //                         Register
        //                     </Button>
        //                 </form></Box>
        //         </Box>
        //     </Grid>
        // </Grid>
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
                            Register to Socialize.
                        </Typography>
                        {error && <Alert severity="error">{error}</Alert>}
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
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
                                Register
                            </Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );



}
