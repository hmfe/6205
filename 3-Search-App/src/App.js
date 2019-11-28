import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchInput from "./Components/SearchInput";
import SearchHistory from "./Components/SearchHistory";
import { Button, Typography, Grid, Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752
    },
    container: {
        marginTop: "5vh",
        marginBottom: "5vh"
    },
    demo: {
        backgroundColor: theme.palette.background.paper
    },
    title: {
        margin: theme.spacing(3, 0, 5),
        textAlign: "center"
    },

    removeAllButton: {
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    }
}));

function App() {
    const classes = useStyles();
    const [searchedList, setSearchedList] = useState([]);

    function removeAllSearches(e) {
        e.preventDefault();
        setSearchedList([]);
    }

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Typography id="appTitle" variant="h3" className={classes.title}>
                Search Application for H&M
            </Typography>
            <Grid
                container
                item
                direction="row"
                justify="center"
                alignItems="baseline"
            >
                <Grid className={classes.GridSearch} item sm={6} xs={12}>
                    <SearchInput
                        searchedList={searchedList}
                        setSearchedList={setSearchedList}
                    ></SearchInput>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Typography
                        aria-label="Search history"
                        variant="h4"
                        className={classes.title}
                    >
                        Search History
                    </Typography>
                    <SearchHistory
                        searchedList={searchedList}
                        setSearchedList={setSearchedList}
                    />
                    <Button
                        className={classes.removeAllButton}
                        id="clearHistory"
                        aria-label="Clear search history"
                        color={"secondary"}
                        variant={"contained"}
                        onClick={removeAllSearches}
                    >
                        Clear search history
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
