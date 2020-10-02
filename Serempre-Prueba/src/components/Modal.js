import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import {Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    modal:{
        position: 'absolute'
    },
    alignment:{
        textAlign: 'center'
    }
}))

const Modal = ({show, description}) => {
    const classes = styles()
    if(show){
        return (
            <Card className={classes.modal}>
                <CardContent>
                    <Typography className={classes.alignment} variant="h4">Task</Typography>
                    <Typography>{description}</Typography>
                </CardContent>
            </Card>
        )
    }
    else{
        return null
    }
}

export default Modal