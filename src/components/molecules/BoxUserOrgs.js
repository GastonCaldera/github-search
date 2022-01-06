import React from 'react';
import { Grid, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material';
import IndividualCell from '../Atoms/IndividualCell'
import { withStyles } from '@mui/styles';
import MuiAccordion from '@mui/material/Accordion';
import { useMediaQuery } from "react-responsive";

const Accordion = withStyles({
    root: {
      border: 'none',
      boxShadow: 'none',
      '&$expanded': {
        margin: 'auto',
        borderBottom: '1px solid rgba(0, 0, 0, .125)'
      }
      ,
    },
    expanded: {},
  })(MuiAccordion);

export default function BoxUserOrgs({ object }) {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Organizations</Typography>
            </AccordionSummary>
            <AccordionDetails>
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
                            sx={{
                                width: `${isMobile ? "50vw" : "70vw"}`,
                                '&:hover': {
                                    background: "#e6e6e6",
                                    borderRadius: `5px 5px 5px 5px`,
                                }
                            }}
                        >
                            <IndividualCell xs={2} value={item.login} />
                        </Grid>
                    )
                })}
            </AccordionDetails>
        </Accordion>
    );
}
