import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Grid, Button, Typography, Pagination } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import SearchInput from '../molecules/SearchInput';
import BoxCell from '../molecules/BoxCell';
import Loading from '../molecules/Loading';

export default function Dashboard() {
    const [inputValue, setInputValue] = useState('')
    const [users, setUser] = useState([])
    const [error, setError] = useState(false)
    const [firstTime, setFirstTime] = useState(true)
    const [count, setCount] = useState(0)
    const [fetchLoading, setFetchLoading] = useState(false)
    const [pagination, setPagination] = useState(1)
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const navigate = useNavigate();

    async function fetchData(page) {
        try {
            setFirstTime(false)
            setError(false)
            setFetchLoading(true)
            const result = await axios.get(`https://api.github.com/search/users?q=${inputValue}&page=${page}&per_page=10`)
            const newUsers = result.data.items.map((user) => {
                return {
                    id: user.id,
                    name: user.login,
                    image: user.avatar_url,
                    url: user.html_url,
                }
            })
            if (newUsers.length) {
                setCount(Math.floor(result.data.total_count / 10))
                setUser(newUsers)
            } else {
                setCount(0)
                setError(true)
            }
            setFetchLoading(false)
        } catch (error) {
            console.error(error);
            setCount(0)
            setFetchLoading(false)
        }
    }

    const handleClick = () => {
        if (!inputValue) {
            setUser([])
            setFirstTime(true)
            setCount(0)
            setPagination(1)
        } else {
            fetchData(0)
            setPagination(1)
        }
    }

    const handleChangePage = (page) => {
        fetchData(page)
        setPagination(page)
    }

    const handleClickUser = (user) => {
        navigate(`/user/${user.id}`, { state: user}
        );
    }

    useEffect(() => {
    }, [users])

    useEffect(() => {
        setFirstTime(true)
    }, [])

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
        >
            <Typography variant="h2">
                Welcome!
            </Typography>
            <Typography variant="body2" gutterBottom>
                Look for any Github account!
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                sx={{
                    background: "white",
                    border: "1px solid #D8DCE6",
                    borderRadius: "5px",
                    boxShadow: "0 1px 6px #eeeeee",
                    width: `${isMobile ? '80vw' : '35vw'}`
                }}
                p={2}
            >
                <SearchInput
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    name='searchInput'
                    onClick={() => { handleClick() }}
                />
                <Button variant="contained" sx={{ background: '#03e0a9' }} my={2} onClick={() => handleClick()}>Contained</Button>
            </Grid>
            <Grid
                container
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                sx={{
                    background: "white",
                    border: "1px solid #D8DCE6",
                    borderRadius: "5px",
                    boxShadow: "0 1px 6px #eeeeee",
                    width: `${isMobile ? '80vw' : '35vw'}`
                }}
                py={2}
                mt={2}
                mb={4}
            >
                {fetchLoading ? (
                    <Loading />
                ) : (
                    <>
                        <BoxCell object={users} error={error} onClick={handleClickUser} />
                        {count > 0 ? (
                            <Pagination
                                count={count}
                                page={pagination}
                                shape="rounded"
                                onChange={(e, p) => handleChangePage(p)}
                                sx={{ marginTop: "20px" }}
                            />
                        ) : null}
                    </>
                )}
                {firstTime ? (
                    <Typography variant="body2" gutterBottom>
                        One click to find them!
                    </Typography>
                ) : null}
            </Grid>
        </Grid >
    );
}
