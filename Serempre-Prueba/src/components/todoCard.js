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
import Zoom from '@material-ui/core/Zoom';

const styles = makeStyles(theme =>({
    root:{
        width: '50vw',
        background: 'linear-gradient(to bottom, #FFFAF0 0%, #F0EBE1 100%)',
        marginTop: '30px'
    },
    edit:{
        backgroundColor: 'lightgreen'
    },
    delete:{
        backgroundColor: 'red'
    },
    size:{
        width: '90%'
    },
    aligning:{
        justifyContent: 'right'
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
        <Zoom in={true}>
            <Card className={classes.root}>
                <CardContent className={classes.size}>
                    {edit ? (<Input className={classes.size} value={editInfo} onChange={e => setEditInfo(e.target.value)} />) : (<TextField className={classes.size} id="standard-basic" label={notes} disabled />)}
                </CardContent>
                <CardActions className={classes.aligning}>
                    {edit ? (
                        <Button className={classes.edit} onClick={() => handleUpdate()}>
                            DONE
                        </Button>) :
                        (<Button className={classes.edit} onClick={() => setEdit(!edit)}>
                            EDIT
                        </Button>)}
                    <Button onClick={() => dispatch(deleteTodo(cardNum))} className={classes.delete}>
                        DELETE
                </Button>
                </CardActions>
            </Card>
        </Zoom>
    )
}

export default TodoCard