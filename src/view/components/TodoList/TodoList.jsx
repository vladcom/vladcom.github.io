import React, {useCallback} from "react";
import List from "@material-ui/core/List";
import {ListItem} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import {isEmpty} from "lodash";

export const Todolist = ({localTodos, deleteTodo}) => {

    const renderTodoItem = useCallback(() => {
        if (isEmpty(localTodos)){
            return null
        }

        return localTodos.map((todo, index) => (
            <ListItem key={index.toString()} dense button>
                <Checkbox tabIndex={-1} disableRipple/>
                <ListItemText primary={todo}/>
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete"
                        onClick={() => {
                            deleteTodo(index);
                        }}
                    >
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))
    }, [deleteTodo, localTodos]);

    return (
        <List style={{width: '500px'}}>
            {renderTodoItem()}
        </List>
    )
}