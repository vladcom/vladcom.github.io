import React, {useCallback, useState} from "react";
import {TodoForm} from "../../components/TodoForm/TodoForm";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Todolist} from "../../components/TodoList/TodoList";
import Card from "@material-ui/core/Card";

export const Home = () => {

    const [todos, setTodos] = useState([]);

    const saveTodoItem = useCallback((todoText) => {
        const trimmedText = todoText.trim();

        if (trimmedText.length > 0) {
            setTodos([...todos, trimmedText]);
        }
    }, [todos])

    const deleteTodoItem = useCallback((todoIndex) => {
        const newTodos = todos.filter((_, index) => index !== todoIndex);

        setTodos(newTodos);
    }, [todos])

    return (
        <Grid container item xs={12} sm={12} alignItems='center' alignContent='center' direction='column'
              justify='center'>
            <Card variant='outlined' style={{display: 'flex', alignItems: 'center', alignContent: 'center',justifyContent: 'center', flexDirection: 'column' }}>
                <Typography variant='h1' color='textPrimary'>Todos</Typography>
                <TodoForm
                    saveTodo={saveTodoItem}/>
                <Todolist
                    todos={todos}
                    deleteTodo={deleteTodoItem}/>
            </Card>
        </Grid>
    )
};