import React, { useEffect, useState } from 'react'
import * as uuidv4 from 'uuid/v4'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

async function getCountries(setValues) {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await response.json();
    setValues(countries);
}

export const SearchInput = ({ searchedList, setSearchedList }) => {
    const [request, setRequest] = useState(false);
    const [countries, setCountries] = useState([]);
    const [searchValue, setSearchValue] = useState(null)

    useEffect(() => {
        if (!request) {
            getCountries(setCountries);
            setRequest(true);
        }
    }, [request]);

    const handleChanges = (e, { name, flag }) => {
        const searchElement = {
            uid: uuidv4(),
            name,
            flag,
            date: Date.now()
        }
        setSearchedList([...searchedList, searchElement]);
        setSearchValue(null);
    }

    return (
        <Autocomplete
            id="combo-box-demo"
            options={countries}
            autoSelect={true}
            value={searchValue}
            onChange={handleChanges}
            clearOnEscape={true}
            getOptionLabel={country => country.name}
            style={{ width: 300 }}
            renderInput={TextBox}
        />
    );
}


const TextBox = (params) => (<TextField {...params} label="Search for a country" fullWidth />);
