import React from 'react'
import AddLocationIcon from '@material-ui/icons/AddLocation';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react'

const styles = makeStyles(theme=>({
    marker:{
        fontSize: "5vh",
        color: 'red',
        transform: 'translate(-50%, -50%)',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        "&:hover":{
            fontSize: "8vh",
        }
    }
}))

const Marker = ({description}) => {
    const classes = styles()
    const [showInfo, setShowInfo] = useState(false)
    console.log(showInfo)
    return(
        <AddLocationIcon onMouseEnter={()=>setShowInfo(!showInfo)} 
            onMouseLeave={()=>setShowInfo(!showInfo)}
        className={classes.marker}/>
    )
}

export default Marker