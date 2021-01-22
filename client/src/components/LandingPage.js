import { AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { flexbox } from '@material-ui/system';



const LandingPage = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6">
                            News
                    </Typography>
                    <Link to='/home' type='button' style={{ textDecoration: 'none', color: 'white'}}>Message</Link>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="xs" style={{margin: '100px auto'}}>
                <h2>BUTTON TO SIGNUP AND LOGIN</h2>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                    >
                        <Link to='/register' style={{ textDecoration: 'none', color: 'white'}}>SIGN-UP</Link>
                    </Button>
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                    >
                        <Link to='/login' style={{ textDecoration: 'none', color: 'white'}}>LOGIN</Link>
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default LandingPage