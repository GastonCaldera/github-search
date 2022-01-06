import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Grid } from '@mui/material'
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBackRounded } from '@mui/icons-material';
import BoxUserInfo from '../molecules/BoxUserInfo'
import BoxUserRepos from '../molecules/BoxUserRepos'
import BoxUserOrgs from '../molecules/BoxUserOrgs'
import Loading from '../molecules/Loading';

export default function UserInfo() {
    const location = useLocation();
    const [user, setUser] = useState({})
    const [repos, setrRepos] = useState([])
    const [orgs, setrOrgs] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                const result = await axios.get(`https://api.github.com/users/${location?.state?.name}`)
                setUser(result.data)
                setLoading(false)
            } catch (error) {
                console.error(error);
                setLoading(false)
            }
        }
        async function fetchRepos() {
            try {
                const result = await axios.get(`https://api.github.com/users/${location?.state?.name}/repos`)
                setrRepos(result.data)
            } catch (error) {
                console.error(error);
            }
        }
        async function fetchOrganizations() {
            try {
                const result = await axios.get(`https://api.github.com/users/${location?.state?.name}/orgs`)
                setrOrgs(result.data)
            } catch (error) {
                console.error(error);
            }
        }

        fetchOrganizations()
        fetchData()
        fetchRepos()
    }, [location])

    return (
        <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ background: "#f1f4fb", minHeight: '100vh' }}
            pt={5}
            px={5}
            pb={5}
        >
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{
                    width: '80vw'
                }}
                p={1}
            >
                <ArrowBackRounded sx={{ color: "#809FB8", cursor: "pointer" }} onClick={() => { navigate('/') }} />
            </Grid>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                sx={{
                    background: "white",
                    border: "1px solid #D8DCE6",
                    borderRadius: "5px",
                    boxShadow: "0 1px 6px #eeeeee",
                    width: '80vw'
                }}
                p={2}
            >
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <BoxUserInfo user={user} />
                        {repos.length ? (
                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center">
                                <BoxUserRepos object={repos} />
                            </Grid>
                        ) : null}
                        {orgs.length ? (
                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center">
                                <BoxUserOrgs object={orgs} />
                            </Grid>
                        ) : null}
                    </>
                )}
            </Grid>
        </Grid >
    );
}
