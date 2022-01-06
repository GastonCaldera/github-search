import { Typography, Grid } from '@mui/material';

export default function IndividualCell({ xs, value }) {
    return (
        <Grid
            xs={xs}
            mr={2}
        >
            <Typography variant="body2" gutterBottom>
                {value}
            </Typography>
        </Grid>
    )

}
