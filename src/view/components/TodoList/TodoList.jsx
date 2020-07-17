import React from "react";
import List from "@material-ui/core/List";
import {ListItem} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';

export const Todolist = ({todos, deleteTodo}) => {
    return (
        <List style={{width: '500px'}}>
            {todos.map((todo, index) => (
                <ListItem key={index.toString()} dense button>
                    <Checkbox tabIndex={-1} disableRipple />
                    <ListItemText primary={todo} />
                    <ListItemSecondaryAction>
                        <IconButton
                            aria-label="Delete"
                            onClick={() => {
                                deleteTodo(index);
                            }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    )
}