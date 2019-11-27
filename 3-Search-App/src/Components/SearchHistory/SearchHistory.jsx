import React from 'react'

import { format } from 'date-fns';



import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, IconButton, Typography } from '@material-ui/core';

export const SearchHistory = ({ searchedList, setSearchedList }) => {

    const handleRemoveSearch = ({ uid }) => {
        setSearchedList(searchedList.filter((country) => country.uid !== uid))
    }

    return (
        <List>
            {searchedList.length > 0 ? searchedList.map((country) => (
                <ListItem key={country.uid}>
                    <ListItemAvatar>
                        <Avatar src={country.flag} alt={`Flag of ${country.name}`}>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={country.name}
                        secondary={format(country.date, "yyyy-MM-dd' 'HH:mm:ss' 'xxx")}
                    />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="Delete" onClick={() => handleRemoveSearch(country)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            )) : <Typography variant='body1'>No search done</Typography>}
        </List>
    )
}
