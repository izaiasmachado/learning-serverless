import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    link: {
      textAlign: 'center',
      textDecoration: 'none',
      color: 'inherit',
    },
    box: {
      transition: '0.4s',
      color: theme.palette.text.secondary,
      "&:hover, &:focus": {
          backgroundColor: 'gray',
          color: 'white'
      },
      display: 'block',
      border: '1px solid gray',
      borderRadius: '5px'
    }
}))

function Card(props) {
    const classes = useStyles()
    return (
        <div className={classes.box}>
            <a href={props.link} className={classes.link}>
                <div className="data">
                    <h2>{props.title}</h2>
                </div>
            </a>
        </div>
    )
}

export default Card