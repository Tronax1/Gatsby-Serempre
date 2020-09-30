import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {deleteTodo} from '../actions'
import {useDispatch} from 'react-redux'
import { Input } from '@material-ui/core'
import { useState } from 'react'

const styles = makeStyles(theme =>({
    root:{
        width: '20vw',
        backgroundColor: 'lightblue'
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
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="body2">
                    {edit ? (<Input/>) : (<Input disabled defaultValue={notes} />)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button className={classes.edit} onClick={()=>setEdit(!edit)}>
                    {edit ? ('DONE'):('EDIT')}
                </Button>
                <Button onClick={()=>dispatch(deleteTodo(cardNum))} className={classes.delete}>
                    DELETE
                </Button>
            </CardActions>
        </Card>
    )
}

export default TodoCard