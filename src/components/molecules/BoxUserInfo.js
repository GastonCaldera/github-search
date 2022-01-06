import React from 'react';
import { Grid, Typography, Avatar } from '@mui/material'
import ReadOnlyInput from '../molecules/ReadOnlyInput'

export default function BoxUserInfo({ user }) {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                p={2}
            >
                <Avatar alt={user.login} src={user.avatar_url} sx={{ marginRight: '20px', }} />
                <Typography variant="h5" gutterBottom>
                    {user.name ? user.name : user.login}
                </Typography>
            </Grid>
            <Typography variant="h5" gutterBottom sx={{ paddingLeft: "20px" }}>
                General
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                p={2}
            >
                <ReadOnlyInput title={'Name'} value={user.name ? user.name : user.login} width={'25ch'} />
                <ReadOnlyInput title={'Email'} value={user.email} width={'25ch'} />
                <ReadOnlyInput title={'Followers'} value={user.followers} width={'25ch'} />
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                p={2}
            >
                <ReadOnlyInput title={'Following'} value={user.following} width={'25ch'} />
                <ReadOnlyInput title={'Repos'} value={user.public_repos} width={'25ch'} />
            </Grid>
        </>
    );
}
