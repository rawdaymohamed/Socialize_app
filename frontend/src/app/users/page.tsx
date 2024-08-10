
import axios from 'axios';
import { Card, CardContent, Typography,  Button, Avatar } from '@mui/material';
import Link from 'next/link';

interface User {
    _id: number;
    name: string;
    email: string;

}

export async function getUsers() {
    const response = await axios.get('http://localhost:4000/api/users');
    return response.data;

}

export default async function Page() {
    const users = await getUsers()
    return (
        <><Typography variant='h5' sx={{ textAlign: "center", margin: 2 }}>All users</Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {users.map((user: User) => (
                    <Card key={user._id} sx={{ maxWidth: 250, margin: '10px', borderRadius: 4 }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Avatar
                                sx={{ width: 70, height: 70, margin: "auto", marginBottom: 2, bgcolor: 'primary.main' }}
                                alt={user.name}
                            // src={user.profilePicture || ''}
                            >{user.name[0]}</Avatar>
                            <Typography variant="h6" component="div">
                                {user.name}
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Link href={`/profile/${user._id}`} style={{ textDecoration: 'none' }}>
                                <Button variant="contained" color="primary" fullWidth>
                                    View Profile
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>);
}