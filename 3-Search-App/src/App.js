import React, { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { SearchInput } from './Components/SearchInput/SearchInput';
import { SearchHistory } from './Components/SearchHistory/SearchHistory';
import { Button, Typography, Grid, Container } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  container: {
    marginTop: '5vh'
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  MuiAutocomplete: {
    root: {
      marginBottom: '200px'
    }
  },
  GridSearch: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '200px'
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
    <Container maxWidth="md" className={classes.container}>
      <Grid container>
        <Grid className={classes.GridSearch} item sm={6} xs={12}>
          <SearchInput searchedList={searchedList} setSearchedList={setSearchedList}></SearchInput>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography variant="h4" className={classes.title}>
            Search History
        </Typography>
          <SearchHistory searchedList={searchedList} setSearchedList={setSearchedList} />
          <Button color={'secondary'} variant={'contained'} onClick={removeAllSearches}>Remove All Searches</Button>
        </Grid>
      </Grid>
    </Container >
  );
}

export default App;
