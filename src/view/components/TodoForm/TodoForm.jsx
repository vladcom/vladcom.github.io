import React from "react";
import TextField from "@material-ui/core/TextField";
import useTodoValue from "../../../utils/hooks/useTodoValue";

export const TodoForm = ({saveTodo}) => {

    const { value, reset, onChange } = useTodoValue('');

    return (
        <form onSubmit={ e => {
            e.preventDefault();

            saveTodo(value);
            reset();
        }}>
            <TextField
                variant="outlined"
                placeholder="Add todo"
                margin="normal"
                onChange={onChange}
                value={value}
            />

        </form>
    )
}