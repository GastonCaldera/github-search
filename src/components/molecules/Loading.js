import * as React from 'react';
import { Box, Grid } from '@mui/material';
import CircularProgress, {
    circularProgressClasses,
} from '@mui/material/CircularProgress';

// Inspired by the former Facebook spinners.
export default function Loading(props) {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            py={1}
        >
            <Box sx={{ position: 'relative' }}>
                <CircularProgress
                    variant="determinate"
                    sx={{
                        color: (theme) =>
                            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                    }}
                    size={40}
                    thickness={4}
                    {...props}
                    value={100}
                />
                <CircularProgress
                    variant="indeterminate"
                    disableShrink
                    sx={{
                        color: '#03e0a9',
                        animationDuration: '550ms',
                        position: 'absolute',
                        left: 0,
                        [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: 'round',
                        },
                    }}
                    size={40}
                    thickness={4}
                    {...props}
                />
            </Box>
        </Grid>

    );
}