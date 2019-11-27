import React from 'react'

import { format } from 'date-fns';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

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
            )) : <span>No search done</span>}
        </List>
    )
}
