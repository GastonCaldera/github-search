import * as React from 'react';
import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import useStyles from '../../styles/ReadOnlyInput'

export default function ReadOnlyInput({ title, value = '', width = '25ch' }) {
    const classes = useStyles();
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { width: width },
            }}
            noValidate
            autoComplete="off"
            p={1}
        >
            <div style={{ marginLeft: "5px" }}>
                <Typography variant="subtitle1" gutterBottom>
                    {title}
                </Typography>
            </div>
            <TextField
                id="outlined-read-only-input"
                value={value ? value : ''}
                className={classes.root}
                InputProps={{
                    readOnly: true,
                }}
                sx={{ marginTop: "10px" }}
            />
        </Box>
    );
}