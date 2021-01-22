import { AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    home: {
        background: 'linear-gradient(to top, rgba(0,0,160,0.5), rgba(0,0,170,0.9))',
        height: '100vh',
        color: 'white'
    },
    root: {
      flexGrow: 1,
    },
    appbar: {
        background: 'none',
        color: 'white',
        fontSize: '18px'
    },
    title: {
      flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '18px',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    buttonWraper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '150px'
    },
    button: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '18px',
        margin: '8px 15px',
    },
    head: {
        fontSize: '40px'
    },
    distance: {
        display: 'flex',
        width: '25%',
        justifyContent: 'space-around'
    }
  }));

const LandingPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.home}>
            <div className={classes.root}>
            <AppBar position="static" className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <Typography variant="h6" className={classes.title}>
                            TwiloMessages
                    </Typography>
                    <Link to='/home' type='button' className={classes.link}>Message</Link>
                </Toolbar>
            </AppBar>
            </div>

            <div className={classes.buttonWraper}>
                <h2 className={classes.head}>BUTTON TO SIGNUP AND LOGIN</h2>
                <div className={classes.distance}>
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                    >
                        <Link to='/register' className={classes.button}>SIGN-UP</Link>
                    </Button>
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                    >
                        <Link to='/login' className={classes.button}>LOGIN</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage