import React from 'react'
import AddLocationIcon from '@material-ui/icons/AddLocation';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme=>({
    marker:{
        fontSize: "5vh",
        color: 'red',
        transform: 'translate(-50%, -50%)',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
    }
}))

const Marker = () => {
    const classes = styles()
    return(
        <AddLocationIcon className={classes.marker}/>
    )
}

export default Marker