import { Grid, Typography, Avatar } from '@mui/material';
import IndividualCell from '../Atoms/IndividualCell'

export default function BoxCell({ object, header = false, onClick, error }) {
    if (!error) {
        return (
            <>
                {object.map((item, index) => {
                    return (
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            key={item?.id}
                            py={1.5}
                            px={2}
                            sx={header ? null : {
                                cursor: 'pointer',
                                '&:hover': {
                                    background: "#e6e6e6",
                                    borderRadius: `${index === (object.length - 1) ? "0px 0px 5px 5px" : ""}`,
                                }
                            }}
                            onClick={(e) => {
                                onClick(item)
                            }}
                        >
                            <Avatar alt={item.login} src={item.image} sx={{ marginRight: '20px' }} />
                            <IndividualCell xs={2} value={item.name} />
                        </Grid>
                    )
                })}
            </>
        )
    }
    else {
        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                p={2}
            >
                <Typography>No results found, be sure to type the correct name</Typography>
            </Grid>
        )
    }

}