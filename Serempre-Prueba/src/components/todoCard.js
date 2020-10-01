import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import {deleteTodo, updateTodo} from '../actions'
import {useDispatch} from 'react-redux'
import { Input } from '@material-ui/core'
import { useState, useEffect } from 'react'

const styles = makeStyles(theme =>({
    root:{
        width: '20vw',
        backgroundColor: 'lightblue',
        marginTop: '30px'
    },
    edit:{
        backgroundColor: 'lightgreen'
    },
    delete:{
        backgroundColor: 'red'
    }
}))

const TodoCard = ({cardNum, notes}) => {
    const classes = styles()
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false);
    const [editInfo, setEditInfo] = useState(notes);

    useEffect(()=>{
        setEditInfo(notes)
    }, [notes])
    
    const handleUpdate = () => {
        setEdit(!edit)
        const updatedData = {
            id: cardNum,
            data: editInfo
        }
        dispatch(updateTodo(updatedData))
    }

    return (
        <Card className={classes.root}>
            <CardContent>    
                {edit ? (<Input value={editInfo} onChange={e => setEditInfo(e.target.value)} />) : (<TextField id="standard-basic" label={notes} disabled/>)}            
            </CardContent>
            <CardActions>
                {edit ? (
                <Button className={classes.edit} onClick={() => handleUpdate()}>
                    DONE
                </Button>):
                    (<Button className={classes.edit} onClick={() => setEdit(!edit)}>
                        EDIT
                    </Button>)}
                <Button onClick={()=>dispatch(deleteTodo(cardNum))} className={classes.delete}>
                    DELETE
                </Button>
            </CardActions>
        </Card>
    )
}

export default TodoCard